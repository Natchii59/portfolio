import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { FC } from 'react'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'

import { links } from '@utils/datas'
import NextLink from './next-link'

const BurgerMenu: FC = () => {
  const { t } = useTranslation()

  return (
    <Menu as='div' className='relative z-50 md:hidden'>
      <Menu.Button className='flex items-center text-lg p-2 border rounded-md border-zinc-400 dark:border-zinc-700 hover:bg-orange-200 dark:hover:bg-zinc-800 shadow-sm transition-[background-color] duration-200 outline-focus'>
        <FaBars />
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
            <div className='py-2 px-3 uppercase font-semibold'>
              {t('nav.menu')}
            </div>

            {links.map((l, i) => (
              <Menu.Item key={i}>
                <NextLink
                  link={{ href: `/${l.slug}` }}
                  className='w-full flex items-center gap-2 px-4 py-2 ui-active:bg-orange-200 ui-active:dark:bg-zinc-700'
                >
                  {t(`nav.links.${l.slug}`)}
                </NextLink>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default BurgerMenu
