import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { join } from 'path'
import { useState } from 'react'

import ProfessionalDetails from '@components/professional-details'

interface FrontMatterType {
  title: string
  year: string
  today: boolean
  sort: number
  description: string
}

export interface ExperienceType {
  slug: string
  frontMatter: FrontMatterType
  content: string
}

interface ProfessionalProps {
  experiences: ExperienceType[]
}

const Professional: NextPage<ProfessionalProps> = ({ experiences }) => {
  const { t } = useTranslation()

  const [details, setDetails] = useState<ExperienceType | null>(null)
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const setDetailsHandle = (exp: ExperienceType) => {
    setDetails(exp)
    setShowDetails(true)
  }

  return (
    <>
      <Head>
        <title>Natchi - Professional</title>
        <meta
          name='description'
          content='My experiences in professional and education path'
        />
        <meta name='twitter:title' content='Natchi - Professional' />
        <meta property='og:site_name' content='Natchi - Professional' />
        <meta name='og:title' content='Natchi - Professional' />
      </Head>

      <h1 className='text-orange-400 text-4xl font-bold font-nunito'>
        {t('professional.title')}
      </h1>

      <div className='p-4'>
        {experiences
          .sort((a, b) => b.frontMatter.sort - a.frontMatter.sort)
          .map((exp, i) => (
            <button
              key={i}
              onClick={() => setDetailsHandle(exp)}
              className='relative pl-8 pb-8 border-l-2 border-orange-400 cursor-pointer text-left w-full group before:w-4 before:h-4 before:bg-orange-50 before:dark:bg-zinc-900 before:border before:border-orange-400 before:shadow before:absolute before:top-0 before:-left-[0.57rem] before:rounded-full before:transition-colors before:duration-500 last:border-transparent focus-visible:outline-none'
            >
              <div className='font-semibold'>
                {exp.frontMatter.year}
                {exp.frontMatter.today && ` - ${t('today')}`}
              </div>

              <div className='text-lg font-semibold group-hover:text-orange-400 group-focus-visible:text-orange-400'>
                {exp.frontMatter.title}
              </div>

              <p className='truncate'>{exp.frontMatter.description}</p>
            </button>
          ))}
      </div>

      <ProfessionalDetails
        details={details}
        setDetails={setDetails}
        show={showDetails}
        setShow={setShowDetails}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const files = readdirSync(join('markdown', 'professional', locale!))

  const experiences = files
    .filter((f) => f.includes('.md'))
    .map((f) => {
      const slug = f.replace('.md', '')

      const markdownWithMeta = readFileSync(
        join('markdown', 'professional', locale!, f),
        'utf-8'
      )

      const { data: frontMatter, content } = matter(markdownWithMeta)

      return {
        slug,
        frontMatter,
        content
      }
    })

  return {
    props: {
      experiences,
      ...(await serverSideTranslations(locale!))
    }
  }
}

export default Professional
