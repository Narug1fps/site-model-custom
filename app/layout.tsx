import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from '@/components/ui/toaster'

const SITE_NAME = 'Sociedade Brasileira de Psicanálise de Goiânia - SBPG'
const SITE_DESCRIPTION = 'Transformando vidas através da psicanálise com profissionais dedicados e experientes em Goiânia'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sbpgoiania.com.br'
const CONTACT_EMAIL = 'sbpgoiania@sbpgoiania.com.br'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: '%s | SBPG',
  },
  description: SITE_DESCRIPTION,
  keywords: ['Sociedade psicanalista', 'psicanalise', 'cursos de psicanalise', 'psicanálise Goiânia'],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/spg1.png`,
        width: 1200,
        height: 630,
        alt: 'Preview SBPG',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/spg1.png`],
  },
  icons: {
    icon: '/spg1.png',
    apple: '/spg1.png',
    other: [
      { rel: 'manifest', url: '/manifest.json' },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "description": SITE_DESCRIPTION,
  "url": SITE_URL,
  "email": CONTACT_EMAIL,
  "logo": `${SITE_URL}/spg1.png`,
  "sameAs": [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" as="image" href="/spg1.png" />
        <link rel="preload" href="/fonts/Inter-VariableFont_slnt,wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased bg-black selection:bg-primary selection:text-white text-foreground flex flex-col min-h-screen`}>
        <div className="flex-1">
          {children}
        </div>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
