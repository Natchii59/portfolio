import Project from '@/components/project'
import { projects } from '@/lib/datas'
import type { NextPage } from 'next'
import Head from 'next/head'

const Projects: NextPage = () => {
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
        Mes projets
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </>
  )
}

export default Projects
