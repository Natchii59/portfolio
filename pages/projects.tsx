import Project from '@/components/project'
import { projects } from '@/lib/datas'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { FaThLarge, FaThList } from 'react-icons/fa'

const Projects: NextPage = () => {
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
          Mes projets
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
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </>
  )
}

export default Projects
