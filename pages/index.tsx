import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { FaChevronRight, FaSpotify } from 'react-icons/fa'

import NextLink from '@/components/next-link'
import { homeExperiences, homeSocials } from '@/lib/datas'
import Image from 'next/image'

interface HomeProps {
  spotify: any
}

const Home: NextPage<HomeProps> = ({ spotify }) => {
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

      {spotify.is_playing ? (
        <>
          <h3 className='font-semibold text-xl flex items-center gap-2'>
            <FaSpotify />
            En écoute
          </h3>

          <div className='flex flex-col items-start'>
            <div className='p-3 border border-zinc-400 dark:border-zinc-700 rounded-md flex items-center gap-4 mt-2 mb-6'>
              <a
                href={spotify.item.external_urls.spotify}
                target='_blank'
                rel='noreferrer'
                className='flex'
              >
                <Image
                  src={spotify.item.album.images[0].url}
                  alt={spotify.item.name}
                  width={70}
                  height={70}
                  className='rounded-md'
                />
              </a>

              <div>
                <div className='flex items-center gap-2'>
                  <div className='song-animated'>
                    <span />
                    <span />
                    <span />
                  </div>

                  <a
                    href={spotify.item.external_urls.spotify}
                    target='_blank'
                    rel='noreferrer'
                    className='font-bold'
                  >
                    {spotify.item.name}
                  </a>
                </div>

                <p className='text-zinc-500 dark:text-zinc-400'>
                  {spotify.item.artists
                    .map((artist: any) => (
                      <a
                        key={artist.id}
                        href={artist.external_urls.spotify}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:underline hover:underline-offset-2'
                      >
                        {artist.name}
                      </a>
                    ))
                    .reduce((prev: any, curr: any) => [prev, ', ', curr])}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h3 className='font-semibold text-xl flex items-center gap-2 mb-6'>
          <FaSpotify />
          Hors ligne
        </h3>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
      }
    }
  )

  const data = await result.json()

  return {
    props: {
      spotify: data
    }
  }
}

export default Home
