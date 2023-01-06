import type { AppProps } from 'next/app'
import { useState } from 'react'

import '@/styles/globals.css'
import Layout from '@/components/layout'

function App({ Component, pageProps }: AppProps) {
  const [rickroll, setRickroll] = useState<boolean>(false)

  return (
    <Layout rickroll={rickroll}>
      <Component {...pageProps} setRickroll={setRickroll} />
    </Layout>
  )
}

export default App
