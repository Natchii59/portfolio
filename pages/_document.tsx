import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className='bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500'>
          <Main />
          <Script id='theme' strategy='beforeInteractive'>{`
(() => {
  if (typeof localStorage !== 'undefined') {
    const theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        return
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark')
        return
      }
    }
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
    return
  }
    
  document.documentElement.classList.remove('dark')
})()
`}</Script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
