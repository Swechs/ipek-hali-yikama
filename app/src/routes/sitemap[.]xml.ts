import { createFileRoute } from '@tanstack/react-router'
import { createSitemap } from '../lib/seo'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => new Response(createSitemap(), {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      }),
    },
  },
})
