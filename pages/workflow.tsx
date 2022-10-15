import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { workflowLevels } from '@utils/datas'
import WorkflowLevel from '@components/workflow-level'

const Workflow: NextPage = () => {
  const { t } = useTranslation()

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
          {t('workflow.experience.title')}
        </h3>

        <div className='indent-4 text-justify'>
          <p className='mb-2'>{t('workflow.experience.text-1')}</p>

          <p>{t('workflow.experience.text-2')}</p>
        </div>
      </div>

      <div>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          {t('workflow.levels.title')}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!))
    }
  }
}

export default Workflow
