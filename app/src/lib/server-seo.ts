import { PAGES, SITE_HOST, SITE_URL } from './seo'

const publicPaths = new Set<string>([...Object.keys(PAGES), '/robots.txt', '/sitemap.xml'])

export function canonicalRedirect(requestUrl: string, method: string): string | null {
  if (method !== 'GET' && method !== 'HEAD') return null
  const url = new URL(requestUrl)
  const isPublicHost = url.hostname === SITE_HOST || url.hostname === 'ispartaipekhaliyikama.com'
  if (!isPublicHost) return null

  const cleanPath = url.pathname.replace(/\/+$/, '') || '/'
  const normalizePath = cleanPath !== url.pathname && publicPaths.has(cleanPath)
  if (url.hostname === SITE_HOST && url.protocol === 'https:' && !normalizePath) return null

  // Keep campaign parameters while consolidating the public URL in one redirect.
  const target = new URL(SITE_URL)
  target.pathname = normalizePath ? cleanPath : url.pathname
  target.search = url.search
  return target.href
}

export function robotsDirective(hostname: string, status: number): string {
  if (hostname !== SITE_HOST || status >= 400) return 'noindex, follow'
  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}
