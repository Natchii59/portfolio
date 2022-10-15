import type { Dispatch, FC, SetStateAction } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import type { ExperienceType } from '@pages/professional'
import { FaTimes } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'
import { marked } from 'marked'

interface ProfessionalDetailsProps {
  details: ExperienceType | null
  setDetails: Dispatch<SetStateAction<ExperienceType | null>>
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const ProfessionalDetails: FC<ProfessionalDetailsProps> = ({
  details,
  setDetails,
  show,
  setShow
}) => {
  const { t } = useTranslation()

  return (
    <Transition show={show} as={Fragment} afterLeave={() => setDetails(null)}>
      <Dialog
        as='div'
        className='relative z-50 text-zinc-900 dark:text-zinc-300 break-words'
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='min-h-full flex items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-3xl rounded-lg bg-orange-50 dark:bg-zinc-800 p-5 shadow-xl'>
                <Dialog.Title
                  as='div'
                  className='flex items-center justify-between'
                >
                  <h2 className='text-2xl font-semibold'>
                    {details?.frontMatter.title}
                  </h2>

                  <button
                    onClick={() => setShow(false)}
                    className='text-2xl opacity-80 rounded-sm outline-focus'
                  >
                    <FaTimes />
                  </button>
                </Dialog.Title>

                <div className='text-lg font-medium'>
                  {details?.frontMatter.year}
                  {details?.frontMatter.today && ` - ${t('today')}`}
                </div>

                <div className='border-t border-zinc-400 my-4'></div>

                {details && (
                  <div
                    className='prose dark:prose-dark'
                    dangerouslySetInnerHTML={{
                      __html: marked(details.content)
                    }}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProfessionalDetails
