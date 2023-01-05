import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Layout from '@/components/layout'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [rickroll, setRickroll] = useState<boolean>(false)

  return (
    <Layout rickroll={rickroll}>
      <Component {...pageProps} setRickroll={setRickroll} />
    </Layout>
  )
}

export default App
