import { LANG_NAME } from '@/utils/datas'
import { Menu, Transition } from '@headlessui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { Fragment } from 'react'
import { FaCheck, FaGlobe } from 'react-icons/fa'

import NextLink from './next-link'

const LangToggle: FC = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <Menu as='div' className='relative z-50'>
      <Menu.Button className='flex items-center rounded-full outline-focus text-2xl'>
        <FaGlobe />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 -translate-y-2'
        enterTo='transform opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='transform opacity-100 translate-y-0'
        leaveTo='transform opacity-0 -translate-y-2'
      >
        <Menu.Items className='outline-none'>
          <div className='absolute right-0 w-40 mt-2 py-1 rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-lg text-sm'>
            <div className='uppercase py-2 px-3 font-semibold'>
              {t('nav.languages')}
            </div>

            {router.locales?.map((l, i) => (
              <Menu.Item key={i}>
                <NextLink
                  link={{ href: router.asPath, locale: l }}
                  className='w-full flex items-center gap-2 px-4 py-2 ui-active:bg-orange-200 ui-active:dark:bg-zinc-700 cursor-pointer'
                >
                  {LANG_NAME[l as keyof typeof LANG_NAME]}{' '}
                  {l === router.locale && <FaCheck />}
                </NextLink>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LangToggle
