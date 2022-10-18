import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { FaChevronRight } from 'react-icons/fa'

import NextLink from '@/components/next-link'
import { homeExperiences, homeSocials } from '@/lib/datas'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Natchi - Homepage</title>
        <meta name='description' content="Natchi's Homepage" />
        <meta name='twitter:title' content='Natchi - Homepage' />
        <meta property='og:site_name' content='Natchi - Homepage' />
        <meta name='og:title' content='Natchi - Homepage' />
      </Head>

      <div className='pb-4'>
        <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito'>
          Nathan Caron
        </h1>

        <h2>Développeur/Étudiant en Alternance</h2>
      </div>

      <h3 className='underline underline-offset-2 font-semibold text-xl'>
        À propos de moi
      </h3>

      <p className='mt-2 mb-6 px-1 indent-4 text-justify'>
        Je suis étudiant en alternance et développeur FullStack. J&apos;habite
        en France, à côté de Lille. J&apos;ai commencé à programmer en 2019 et
        depuis, cela est devenu ma passion. J&apos;adore coder, pouvoir créer du
        contenu sur internet. Je suis développeur FullStack, même si je penche
        plutôt du côté Backend. J&apos;aime aussi faire du design même si ce
        n&apos;est pas mon point fort. En ligne, ou pas, j&apos;écoute beaucoup
        de musique. J&apos;ai réalisé plusieurs petits projets pour
        m&apos;exercer dans plusieurs technologies. Je ne suis jamais à court
        d&apos;idées.
      </p>

      <div className='flex items-end gap-x-3'>
        <h3 className='underline underline-offset-2 font-semibold text-xl'>
          Mon parcours{' '}
        </h3>
        <NextLink
          link={{ href: '/professional' }}
          className='flex items-baseline gap-x-0.5 link-underline'
        >
          Voir plus <FaChevronRight className='text-[0.6rem]' />
        </NextLink>
      </div>

      <div className='mt-2 mb-6 px-1'>
        {homeExperiences.map((exp, i) => (
          <div key={i} className='pl-[3.4rem] -indent-[3.4rem]'>
            <span className='font-semibold pr-4'>
              {exp.year}
              {exp.today && " - Aujourd'hui"}
            </span>
            {exp.name}
          </div>
        ))}
      </div>

      <h3 className='underline underline-offset-2 font-semibold text-xl'>
        Mes réseaux
      </h3>

      <div className='mt-2 mb-6 px-1 flex flex-col items-start'>
        {homeSocials.map((social, i) => (
          <a
            href={social.url}
            target='_blank'
            rel='noreferrer'
            key={i}
            className='flex items-center justify-center mb-2 gap-1 group focus-visible:outline-none'
          >
            {social.icon}
            <span className='group-hover:text-orange-400 group-focus-visible:text-orange-400'>
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

export default Home
