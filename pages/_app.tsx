import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '@/styles/globals.css'
import Layout from '@components/layout'
import NextI18NextConfig from '@/next-i18next.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App, NextI18NextConfig)
