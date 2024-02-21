import type { Metadata, Viewport } from 'next'

import { Providers } from '@/components/providers'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
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
  twitter: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    card: 'summary'
  },
  openGraph: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    url: siteConfig.url
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
