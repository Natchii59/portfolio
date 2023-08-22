import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

import { TailwindIndicator } from '@/components/tailwind-indicator'

import '@/styles/globals.css'

import { Analytics } from '@/components/analytics'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Natchi',
    'Nathan',
    'Fullstack',
    'Developer',
    'Web',
    'Typescript',
    'React',
    'Next.js'
  ],
  authors: [
    {
      name: 'Natchi',
      url: siteConfig.url
    }
  ],
  creator: 'Natchi',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@Natchi59'
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: `/favicon-16x16.png`,
      sizes: '16x16'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: `/favicon-32x32.png`,
      sizes: '32x32'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: `/apple-touch-icon.png`,
      sizes: '180x180'
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      url: `/favicon.ico`
    }
  ],
  manifest: `/site.webmanifest`
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans text-[0.9rem] antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
