import NextLink from '@/components/next-link'
import { homeExperiences, homeSocials } from '@/utils/datas'
import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { FaChevronRight } from 'react-icons/fa'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('home.meta.title')}</title>
        <meta name='description' content={t('home.meta.description')} />
        <meta name='twitter:title' content={t('home.meta.title')} />
        <meta property='og:site_name' content={t('home.meta.title')} />
        <meta name='og:title' content={t('home.meta.title')} />
      </Head>

      <div className='pb-4'>
        <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito'>
          Nathan Caron
        </h1>

        <h2>{t('home.status')}</h2>
      </div>

      <h3 className='underline underline-offset-2 font-semibold text-xl'>
        {t('home.about.title')}
      </h3>

      <p className='mt-2 mb-6 px-1 indent-4 text-justify'>
        {t('home.about.text')}
      </p>

      <div className='flex items-end gap-x-3'>
        <h3 className='underline underline-offset-2 font-semibold text-xl'>
          {t('home.experience.title')}{' '}
        </h3>
        <NextLink
          link={{ href: '/professional' }}
          className='flex items-baseline gap-x-0.5 link-underline'
        >
          {t('home.experience.see-more')}{' '}
          <FaChevronRight className='text-[0.6rem]' />
        </NextLink>
      </div>

      <div className='mt-2 mb-6 px-1'>
        {homeExperiences.map((e, i) => (
          <div key={i} className='pl-[3.4rem] -indent-[3.4rem]'>
            <span className='font-semibold pr-4'>
              {e.year}
              {e.today && ` - ${t('today')}`}
            </span>
            {t(`home.experience.${e.slug}`)}
          </div>
        ))}
      </div>

      <h3 className='underline underline-offset-2 font-semibold text-xl'>
        {t('home.socials')}
      </h3>

      <div className='mt-2 mb-6 px-1 flex flex-col items-start'>
        {homeSocials.map((s, i) => (
          <a
            href={s.url}
            target='_blank'
            rel='noreferrer'
            key={i}
            className='flex items-center justify-center mb-2 gap-1 group focus-visible:outline-none'
          >
            {s.icon}
            <span className='group-hover:text-orange-400 group-focus-visible:text-orange-400'>
              {s.name}
            </span>
          </a>
        ))}
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

export default Home
