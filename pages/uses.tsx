import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { uses } from '@/lib/datas'

const Uses: NextPage = () => {
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
        Ce que j&apos;utilise
      </h1>

      <p className='mb-2'>
        Voici la liste du matériel que j&apos;utilise tous les jours pour
        développer mes applications:
      </p>

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
                {u.name}
              </a>
            </li>
          ))}
      </ul>

      {uses.filter((u) => !u.has).length ? (
        <>
          <h3 className='text-2xl mb-2'>Bientôt...</h3>

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
                    {u.name}
                  </a>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Uses
