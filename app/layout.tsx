import type { Metadata, Viewport } from 'next'

import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'

import '@/styles/globals.css'

import { fontInter } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Portfolio',
    'Blog',
    'Natchi'
  ],
  authors: [
    {
      name: 'Natchi',
      url: 'https://natchi.fr'
    }
  ],
  creator: 'Natchi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  themeColor: 'var(--background)'
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontInter.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
