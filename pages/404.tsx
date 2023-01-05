import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import NextLink from '@/components/next-link'

const NotFound: NextPage<{ setRickroll: any }> = ({ setRickroll }) => {
  return (
    <>
      <Head>
        <title>Natchi - Not Found</title>
        <meta name='description' content='This page was not found' />
        <meta name='twitter:title' content='Natchi - Not Found' />
        <meta property='og:site_name' content='Natchi - Not Found' />
        <meta name='og:title' content='Natchi - Not Found' />
      </Head>

      <div className='text-center flex flex-col items-center gap-4'>
        <h1 className='text-3xl font-nunito font-bold'>
          Woops... Tu t&apos;es pe
          <span
            className='hover:text-orange-400 cursor-pointer'
            onClick={async () => {
              await setRickroll(true)
              const video = document.getElementById(
                'rickroll-video'
              ) as HTMLVideoElement
              video.play()
            }}
          >
            r
          </span>
          du
        </h1>

        <NextLink
          link={{ href: '/' }}
          className='bg-orange-400 dark:bg-zinc-700 p-2 rounded-md shadow-sm outline-focus hover:bg-orange-300 dark:hover:bg-zinc-600'
        >
          Retour à l&apos;accueil
        </NextLink>
      </div>
    </>
  )
}

export default NotFound
