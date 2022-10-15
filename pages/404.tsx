import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import NextLink from '@components/next-link'

const NotFound: NextPage = () => {
  const { t } = useTranslation()

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
        <h1 className='text-3xl font-nunito font-bold'>{t('404.message')}</h1>

        <NextLink
          link={{ href: '/' }}
          className='bg-orange-400 dark:bg-zinc-700 p-2 rounded-md shadow-sm outline-focus hover:bg-orange-300 dark:hover:bg-zinc-600'
        >
          {t('404.button')}
        </NextLink>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!))
    }
  }
}

export default NotFound
