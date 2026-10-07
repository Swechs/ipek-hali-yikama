import { createFileRoute } from '@tanstack/react-router'

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/hali-yikama', priority: '0.9', changefreq: 'monthly' },
  { path: '/koltuk-yikama', priority: '0.8', changefreq: 'monthly' },
  { path: '/perde-yikama', priority: '0.8', changefreq: 'monthly' },
  { path: '/yorgan-battaniye-yikama', priority: '0.8', changefreq: 'monthly' },
  { path: '/hizmet-bolgeleri', priority: '0.8', changefreq: 'monthly' },
  { path: '/hakkimizda', priority: '0.6', changefreq: 'yearly' },
  { path: '/nasil-yikanir', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'monthly' },
  { path: '/iletisim', priority: '0.7', changefreq: 'yearly' },
  { path: '/sss', priority: '0.6', changefreq: 'monthly' },
]

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const origin = "https://www.ispartaipekhaliyikama.com"
        const urls = pages
          .map(
            (p) => `  <url>
    <loc>${origin}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
          )
          .join('\n')
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
