import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import ProfessionalDetails from '@/components/professional-details'
import { DetailsSerialize, getAllDetails } from '@/lib/professional'

interface ProfessionalProps {
  details: DetailsSerialize[]
}

const Professional: NextPage<ProfessionalProps> = ({ details }) => {
  const [detail, setDetail] = useState<DetailsSerialize | null>(null)
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const setDetailHandle = (det: DetailsSerialize) => {
    setDetail(det)
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
        Mon parcours professionnel
      </h1>

      <div className='p-4'>
        {details.map((det, i) => (
          <button
            key={i}
            onClick={() => setDetailHandle(det)}
            className='relative pl-8 pb-8 border-l-2 border-orange-400 cursor-pointer text-left w-full group before:w-4 before:h-4 before:bg-orange-50 before:dark:bg-zinc-900 before:border before:border-orange-400 before:shadow before:absolute before:top-0 before:-left-[0.57rem] before:rounded-full before:transition-colors before:duration-500 last:border-transparent focus-visible:outline-none'
          >
            <div className='font-semibold'>
              {det.meta.year}
              {det.meta.today && " - Aujourd'hui"}
            </div>

            <div className='text-lg font-semibold group-hover:text-orange-400 group-focus-visible:text-orange-400'>
              {det.meta.title}
            </div>

            <p className='truncate'>{det.meta.description}</p>
          </button>
        ))}
      </div>

      <ProfessionalDetails
        details={detail}
        setDetails={setDetail}
        show={showDetails}
        setShow={setShowDetails}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const details = await getAllDetails()

  return {
    props: {
      details
    }
  }
}

export default Professional
