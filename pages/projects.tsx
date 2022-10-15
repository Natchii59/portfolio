import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

const Projects: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Natchi - Projects</title>
        <meta name='description' content="Natchi's Projects" />
        <meta name='twitter:title' content='Natchi - Projects' />
        <meta property='og:site_name' content='Natchi - Projects' />
        <meta name='og:title' content='Natchi - Projects' />
      </Head>

      <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito mb-4'>
        {t('projects.title')}
      </h1>

      <p>{t('projects.not')}</p>
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

export default Projects
