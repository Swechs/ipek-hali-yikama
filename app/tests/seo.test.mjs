import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import vm from 'node:vm'
import { test } from 'node:test'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const app = fileURLToPath(new URL('../', import.meta.url))

// Exercise the actual route-head and server entry functions without starting a
// browser or requiring UI dependencies. UI rendering is outside these SEO tests.
function loader(ssrFetch = () => new Response('<html></html>', { headers: { 'content-type': 'text/html' } })) {
  const cache = new Map()
  const load = file => {
    const resolved = path.resolve(app, file)
    if (cache.has(resolved)) return cache.get(resolved)
    if (resolved.endsWith('.json')) return JSON.parse(readFileSync(resolved, 'utf8'))
    const source = readFileSync(resolved, 'utf8')
    const result = ts.transpileModule(source, {
      fileName: resolved,
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      reportDiagnostics: true,
    })
    const errors = (result.diagnostics ?? []).filter(d => d.category === ts.DiagnosticCategory.Error)
    assert.deepEqual(errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')), [], file)
    const module = { exports: {} }
    cache.set(resolved, module.exports)
    const scopedRequire = specifier => {
      if (specifier === '@tanstack/react-router') return {
        createFileRoute: routePath => options => ({ ...options, path: routePath }),
        createRootRouteWithContext: () => options => options,
        createRootRoute: options => options,
      }
      if (specifier === '@tanstack/react-start/server-entry') return { __esModule: true, default: { fetch: ssrFetch } }
      if (specifier === 'react' || specifier === 'react/jsx-runtime' || specifier === '@tanstack/react-query') return {}
      if (specifier.includes('/components/') || specifier.startsWith('../components/')) return {}
      if (specifier.endsWith('error-capture')) return { consumeLastCapturedError: () => undefined }
      if (specifier.endsWith('error-page')) return { renderErrorPage: () => '<html><h1>Hata</h1></html>' }
      if (specifier.endsWith('higgsfield-error-reporting')) return {}
      if (specifier.endsWith('.css?url')) return '/assets/styles.css'
      if (specifier.endsWith('.css')) return {}
      if (specifier.startsWith('.')) {
        const local = path.resolve(path.dirname(resolved), specifier)
        return load(existsSync(local) ? local : local + '.ts')
      }
      throw new Error('Unexpected import in SEO test: ' + specifier)
    }
    const context = vm.createContext({
      exports: module.exports, module, require: scopedRequire,
      URL, Request, Response, Headers, console: { ...console, error() {} },
    })
    new vm.Script(result.outputText, { filename: resolved }).runInContext(context)
    return module.exports
  }
  return load
}

const load = loader()
const seo = load('src/lib/seo.ts')
const routes = Object.keys(seo.PAGES).map(routePath => ({
  path: routePath,
  route: load('src/routes/' + (routePath === '/' ? 'index' : routePath.slice(1)) + '.tsx').Route,
}))

test('every public route returns a unique canonical and matching search/social metadata', () => {
  const canonicals = new Set()
  for (const { path: routePath, route } of routes) {
    assert.equal(route.path, routePath)
    const head = route.head()
    const canonicalsForPage = head.links.filter(link => link.rel === 'canonical')
    assert.equal(canonicalsForPage.length, 1)
    const canonical = canonicalsForPage[0].href
    assert.equal(canonical, seo.SITE_URL + routePath)
    assert.ok(!canonicals.has(canonical))
    canonicals.add(canonical)
    const title = head.meta.find(meta => 'title' in meta).title
    const description = head.meta.find(meta => meta.name === 'description').content
    assert.equal(head.meta.find(meta => meta.property === 'og:title').content, title)
    assert.equal(head.meta.find(meta => meta.name === 'twitter:title').content, title)
    assert.equal(head.meta.find(meta => meta.property === 'og:description').content, description)
    assert.equal(head.meta.find(meta => meta.name === 'twitter:description').content, description)
    assert.equal(head.meta.find(meta => meta.property === 'og:url').content, canonical)
    assert.ok(title.includes('İpek') && description.length > 40)
  }
  assert.equal(canonicals.size, 12)
})

test('site identity has the published address, hours, working local assets and one consistent phone', () => {
  const root = load('src/routes/__root.tsx').Route.head()
  assert.equal(root.links.filter(link => link.rel === 'manifest').length, 1)
  assert.equal(root.links.filter(link => link.rel === 'apple-touch-icon').length, 1)
  const graph = JSON.parse(root.scripts.find(script => script.type === 'application/ld+json').children)['@graph']
  const ads = root.scripts.filter(script => script.children?.includes('AW-881695776'))
  assert.equal(ads.length, 1)
  assert.match(ads[0].children, /AW-881695776\/ITYgCJqXzL8dEKC4tqQD/)
  assert.match(ads[0].children, /AW-881695776\/KvyiCJ2XzL8dEKC4tqQD/)
  const business = graph.find(node => node['@type'] === 'LocalBusiness')
  assert.equal(business.telephone, '+902462429999')
  assert.equal(business.contactPoint.telephone, '+905422471836')
  assert.equal(business.address.streetAddress, 'Sav Kasabası, Fatih Mahallesi, 528 Sokak No:5')
  assert.equal(business.address.addressCountry, 'TR')
  assert.equal(business.openingHoursSpecification[0].dayOfWeek.length, 7)
  assert.equal(business.openingHoursSpecification[0].opens, '08:00')
  assert.equal(business.openingHoursSpecification[0].closes, '21:00')
  for (const image of [business.logo.url, ...business.image]) {
    const url = new URL(image)
    assert.equal(url.origin, seo.SITE_URL)
    assert.ok(existsSync(path.join(app, 'public', url.pathname)))
  }
  assert.equal(business.aggregateRating, undefined)
  assert.equal(business.geo, undefined)
})

test('page schemas connect to the same business and breadcrumbs use the visible hierarchy', () => {
  for (const { path: routePath, route } of routes) {
    const graph = JSON.parse(route.head().scripts[0].children)['@graph']
    const webpage = graph.find(node => node['@type'].endsWith('Page'))
    assert.equal(webpage.isPartOf['@id'], seo.WEBSITE_ID)
    assert.equal(webpage.about['@id'], seo.BUSINESS_ID)
    const breadcrumbs = graph.find(node => node['@type'] === 'BreadcrumbList')
    if (routePath === '/') {
      assert.equal(breadcrumbs, undefined)
    } else {
      assert.equal(breadcrumbs.itemListElement.length, 2)
      assert.equal(breadcrumbs.itemListElement[0].item, seo.SITE_URL + '/')
      assert.equal(breadcrumbs.itemListElement[1].item, seo.SITE_URL + routePath)
      assert.equal(breadcrumbs.itemListElement[1].name, seo.PAGES[routePath].breadcrumb)
    }
  }
})

test('service prices retain per-square-metre and minimum-order meaning without invented quotes', () => {
  const service = routePath => JSON.parse(routes.find(route => route.path === routePath).route.head().scripts[0].children)['@graph']
    .find(node => node['@type'] === 'Service')
  const carpet = service('/hali-yikama')
  assert.equal(carpet.offers.price, undefined)
  assert.equal(carpet.offers.priceSpecification.price, '130')
  assert.equal(carpet.offers.priceSpecification.referenceQuantity.unitText, 'm²')
  assert.match(carpet.offers.description, /780 TL/)
  assert.equal(service('/koltuk-yikama').offers.price, '2500')
  for (const routePath of ['/perde-yikama', '/yorgan-battaniye-yikama']) {
    assert.equal(service(routePath).offers, undefined)
  }
  for (const routePath of ['/hali-yikama', '/koltuk-yikama', '/perde-yikama', '/yorgan-battaniye-yikama']) {
    const entry = service(routePath)
    assert.equal(entry.provider['@id'], seo.BUSINESS_ID)
    if (routePath === '/hali-yikama') {
      assert.ok(existsSync(path.join(app, 'public', new URL(entry.image).pathname)))
    } else {
      assert.equal(entry.image, undefined)
    }
  }
})

test('sitemap and robots handlers return all canonical URLs and crawlable content types', async () => {
  const response = await load('src/routes/sitemap[.]xml.ts').Route.server.handlers.GET()
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^application\/xml/)
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
  assert.deepEqual(urls.sort(), routes.map(route => seo.SITE_URL + route.path).sort())
  const robots = await load('src/routes/robots[.]txt.ts').Route.server.handlers.GET({ request: new Request(seo.SITE_URL + '/robots.txt') })
  assert.match(robots.headers.get('content-type'), /^text\/plain/)
  const text = await robots.text()
  assert.match(text, /Allow: \//)
  assert.ok(text.includes('Sitemap: ' + seo.SITE_URL + '/sitemap.xml'))
})

test('structured data round-trips safely when strings contain HTML delimiters', () => {
  const hostile = { name: '</script><script>alert(1)</script>', note: '\u2028\u2029' }
  const serialized = seo.serializeJsonLd(hostile)
  assert.ok(!serialized.includes('<'))
  assert.deepEqual(JSON.parse(serialized), hostile)
})

test('real server consolidates HTTP, apex and legacy trailing slashes in one 301', async () => {
  for (const [input, expected] of [
    ['http://ispartaipekhaliyikama.com/iletisim/?utm_source=google', seo.SITE_URL + '/iletisim?utm_source=google'],
    ['https://ispartaipekhaliyikama.com/hali-yikama/', seo.SITE_URL + '/hali-yikama'],
    [seo.SITE_URL + '/iletisim/', seo.SITE_URL + '/iletisim'],
    ['http://www.ispartaipekhaliyikama.com/', seo.SITE_URL + '/'],
  ]) {
    let calls = 0
    const server = loader(() => { calls++; return new Response('ok') })('src/server.ts').default
    const response = await server.fetch(new Request(input), {}, {})
    assert.equal(response.status, 301, input)
    assert.equal(response.headers.get('location'), expected)
    assert.equal(calls, 0)
  }
})

test('real server keeps previews accessible but noindexed and does not redirect POST requests', async () => {
  const server = loader()('src/server.ts').default
  const preview = await server.fetch(new Request('https://example.vercel.app/hali-yikama/'), {}, {})
  assert.equal(preview.status, 200)
  assert.equal(preview.headers.get('x-robots-tag'), 'noindex, follow')
  const post = await server.fetch(new Request(seo.SITE_URL + '/iletisim/', { method: 'POST', body: 'test' }), {}, {})
  assert.equal(post.status, 200)
  const head = await server.fetch(new Request(seo.SITE_URL + '/iletisim/', { method: 'HEAD' }), {}, {})
  assert.equal(head.status, 301)
  const current = await server.fetch(new Request(seo.SITE_URL + '/hali-yikama'), {}, {})
  assert.equal(current.status, 200)
  assert.match(current.headers.get('x-robots-tag'), /^index, follow, max-image-preview:large/)
})

test('real server retains 404/500 status and prevents indexing error pages', async () => {
  for (const status of [404, 500, 503]) {
    const server = loader(() => new Response('Error page', { status, headers: { 'content-type': 'text/html' } }))('src/server.ts').default
    const response = await server.fetch(new Request(seo.SITE_URL + '/missing-page/'), {}, {})
    assert.equal(response.status, status)
    assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow')
  }
  const server = loader(() => { throw new Error('SSR unavailable') })('src/server.ts').default
  const response = await server.fetch(new Request(seo.SITE_URL + '/'), {}, {})
  assert.equal(response.status, 500)
  assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow')
})
