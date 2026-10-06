import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin
        // noindex for preview/staging — remove Disallow when going live on production domain
        const body = [
          'User-agent: *',
          'Disallow: /',
          '',
          `Sitemap: ${origin}/sitemap.xml`,
          '',
          '# TASLAK: Bu robots.txt canli domaine gecildiginde guncellenmeli.',
          '# Canli domain icin: Allow: / olarak degistirilmeli.',
        ].join('\n')
        return new Response(body, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
          },
        })
      },
    },
  },
})
