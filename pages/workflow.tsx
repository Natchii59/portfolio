import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { workflowLevels } from '@/lib/datas'
import WorkflowLevel from '@/components/workflow-level'

const Workflow: NextPage = () => {
  return (
    <>
      <Head>
        <title>Natchi - Workflow</title>
        <meta name='description' content="Natchi's Workflow" />
        <meta name='twitter:title' content='Natchi - Workflow' />
        <meta property='og:site_name' content='Natchi - Workflow' />
        <meta name='og:title' content='Natchi - Workflow' />
      </Head>

      <h1 className='text-orange-400 text-4xl font-bold tracking-wide font-nunito mb-4'>
        Workflow
      </h1>

      <div className='mb-6'>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mon parcours
        </h3>

        <div className='indent-4 text-justify'>
          <p className='mb-2'>
            J&apos;ai commencé la programmation en 2019 en créant un bot Discord
            en Javascript et Node.js. J&apos;ai continué longtemps et uniquement
            sur ce langage, le confinement en mars 2020 m&apos;a permis de
            m&apos;y consacré à plein temps. Puis après avoir bien appris de
            celui-ci, je me suis penché sur le développement web, côté
            navigateur. C&apos;est ici que j&apos;ai commencé avec Vuejs, puis
            je suis passé sur React.
          </p>

          <p>
            Longtemps plus tard, j&apos;ai découvert Typescript, et lorsque
            j&apos;ai vu que c&apos;était une version évolué du Javascript, qui
            était mon langage préféré, je m&apos;y suis exercé sur celui-ci.
            C&apos;est devenu mon langage principal que j&apos;utilise
            pratiquement tout le temps dans mes projets. J&apos;ai dû passer à
            React Typescript, puis je me suis intéressé à la création
            d&apos;API, où j&apos;ai commencé par des API GraphQL avec le
            framework NestJS.
          </p>
        </div>
      </div>

      <div>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mes niveaux
        </h3>

        <div>
          {workflowLevels.map((l, i) => (
            <WorkflowLevel level={l} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Workflow
