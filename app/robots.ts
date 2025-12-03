const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sbpgoiania.com.br'

export async function GET() {
  const lines = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
    '# Crawl-delay can be added if necessary',
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
