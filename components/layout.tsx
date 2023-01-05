import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC, PropsWithChildren } from 'react'

import Appbar from './appbar'
import Footer from './footer'

type LayoutProps = FC<
  PropsWithChildren & {
    rickroll: boolean
  }
>

const Layout: LayoutProps = ({ children, rickroll }) => {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Natchi's Website" />
        <meta name='author' content='Nathan Caron' />
        <meta name='author' content='Natchi' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:title' content='Natchi - Website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Natchi59' />
        <meta name='twitter:creator' content='@Natchi59' />
        <meta name='twitter:image' content='/banner.gif' />
        <meta property='og:site_name' content='Natchi - Website' />
        <meta name='og:title' content='Natchi - Website' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/banner.gif' />
        <title>Natchi - Website</title>
      </Head>

      <Appbar />

      <div className='pt-[68px] md:pt-[66px]'>
        <div className='relative'>
          <div className='relative w-full h-44 lg:h-80 opacity-30'>
            {rickroll ? (
              <video
                loop
                playsInline
                className='w-full h-full object-cover'
                id='rickroll-video'
              >
                <source src='/rickroll.mp4' type='video/mp4' />
              </video>
            ) : (
              <Image
                src='/banner.gif'
                alt='Banner'
                priority={true}
                layout='fill'
                objectFit='cover'
                objectPosition='center 75%'
              />
            )}
          </div>

          <AnimatePresence initial={true} mode='wait'>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                type: 'tween',
                duration: 0.4
              }}
              key={asPath}
              className='absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center font-nunito font-bold text-xl lg:text-2xl'
            >
              {asPath === '/' && (
                <>
                  <h2>Bienvenue sur le</h2>

                  <h1 className='text-2xl lg:text-4xl text-orange-400'>
                    Site de Natchi
                  </h1>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='p-4'>
          <div className='w-full max-w-4xl mx-auto'>
            <AnimatePresence
              initial={true}
              mode='wait'
              onExitComplete={() => {
                if (typeof window !== 'undefined')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <motion.div
                key={asPath}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: 'tween', duration: 0.4 }}
                className='relative'
              >
                {children}

                <Footer />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
