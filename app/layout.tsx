import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

import { TailwindIndicator } from '@/components/tailwind-indicator'

import '@/styles/globals.css'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Analytics } from '@/components/analytics'
import { ThemeProvider } from '@/components/theme-provider'

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
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI'],
  authors: [
    {
      name: 'Natchi',
      url: 'https://www.natchi.fr'
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `/site.webmanifest`
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-[0.9rem] antialiased',
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
