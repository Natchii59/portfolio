import { FaGithubAlt } from 'react-icons/fa'
import type { FC } from 'react'

import Links from './links'
import BurgerMenu from './burger-menu'
import NextLink from './next-link'
import ThemeToggle from './theme-toggle'

const Appbar: FC = () => {
  return (
    <div className='p-4 w-full fixed inset-x-0 top-0 backdrop-blur-md z-40'>
      <div className='max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-5'>
        <NextLink
          link={{ href: '/' }}
          className='flex items-center gap-2 text-2xl group cursor-pointer focus-visible:outline-none'
        >
          <FaGithubAlt className='group-hover:-rotate-12 group-focus-visible:-rotate-12 transition-transform duration-300' />
          <h1 className='font-nunito font-bold'>Natchi</h1>
        </NextLink>

        <Links />

        <div className='flex-1' />

        <ThemeToggle />

        <BurgerMenu />
      </div>
    </div>
  )
}

export default Appbar
