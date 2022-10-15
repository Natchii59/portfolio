import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { uses } from '@utils/datas'

const Uses: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Natchi - What I use</title>
        <meta name='description' content='What I use for coding' />
        <meta name='twitter:title' content='Natchi - What I use' />
        <meta property='og:site_name' content='Natchi - What I use' />
        <meta name='og:title' content='Natchi - What I use' />
      </Head>

      <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito mb-4'>
        {t('uses.title')}
      </h1>

      <p className='mb-2'>{t('uses.description')}</p>

      <ul className='list-disc text-lg ml-5 mb-4'>
        {uses
          .filter((u) => u.has)
          .map((u, i) => (
            <li key={i}>
              <a
                href={u.url}
                target='_blank'
                rel='noreferrer'
                className='link-underline'
              >
                {t(`uses.item.${u.slug}`)}
              </a>
            </li>
          ))}
      </ul>

      <h3 className='text-2xl mb-2'>{t('uses.soon')}</h3>

      <ul className='list-disc text-lg ml-5'>
        {uses
          .filter((u) => !u.has)
          .map((u, i) => (
            <li key={i}>
              <a
                href={u.url}
                target='_blank'
                rel='noreferrer'
                className='link-underline'
              >
                {t(`uses.item.${u.slug}`)}
              </a>
            </li>
          ))}
      </ul>
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

export default Uses
