import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { FaThLarge, FaThList } from 'react-icons/fa'
import NewsAPI, { INewsApiResponse } from 'ts-newsapi'

interface MonitoringProps {
  data: INewsApiResponse
}

const Monitoring: NextPage<MonitoringProps> = ({ data }) => {
  const [listMode, setListMode] = useState<boolean>(false)

  const setListModeHandler = (): void => {
    setListMode(!listMode)
  }

  return (
    <>
      <Head>
        <title>Natchi - Projects</title>
        <meta name='description' content="Natchi's Projects" />
        <meta name='twitter:title' content='Natchi - Projects' />
        <meta property='og:site_name' content='Natchi - Projects' />
        <meta name='og:title' content='Natchi - Projects' />
      </Head>

      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito'>
          Ma veille informatique
        </h1>

        <button
          onClick={setListModeHandler}
          className='hidden md:flex items-center gap-1 p-1 text-xl rounded-md border border-zinc-400 dark:border-zinc-700 transition-[border-color] duration-500'
        >
          <div
            className={`${listMode ? 'bg-orange-400' : ''} p-1.5 rounded-md`}
          >
            <FaThList />
          </div>
          <div
            className={`${listMode ? '' : 'bg-orange-400'} p-1.5 rounded-md`}
          >
            <FaThLarge />
          </div>
        </button>
      </div>

      <div
        className={
          listMode
            ? 'grid grid-cols-1 gap-4'
            : 'grid grid-cols-1 md:grid-cols-2 gap-4'
        }
      >
        {data.articles.map((article, i) => (
          <a
            key={i}
            href={article.url}
            className='p-4 border rounded-md border-zinc-400 dark:border-zinc-700 transition-[border-color] duration-500 group flex flex-col justify-between'
          >
            <div>
              <h2 className='text-xl font-semibold group-hover:text-orange-400'>
                {article.title}
              </h2>

              <p className='py-2'>{article.description}</p>
            </div>

            <p className='text-sm font-medium'>
              Source: {article.source.name} -{' '}
              {!!article.publishedAt &&
                new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                })}
            </p>
          </a>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const newsapi = new NewsAPI(process.env.MONITORING_API_KEY!)

  const data = await newsapi.getEverything({
    q: 'web development',
    language: 'en',
    sortBy: 'relevancy',
    pageSize: 20,
    page: 1
  })

  console.log(data)

  return {
    props: {
      data
    }
  }
}

export default Monitoring
