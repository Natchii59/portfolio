import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Icons } from './icons'
import { ThemeModeToggle } from './theme-mode-toggle'
import { buttonVariants } from './ui/button'

export default function Navigation() {
  return (
    <div className='flex items-center justify-between border-b py-4'>
      <Link href='/' className='flex flex-col gap-1 text-sm leading-none'>
        <span className='text-lg font-bold'>Natchi</span>
        <span>Développeur Fullstack</span>
      </Link>

      <div className='flex items-center gap-2'>
        <Link
          href={siteConfig.links.twitter}
          target='_blank'
          rel='noreferer'
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'sm'
            }),
            ['h-7', 'w-7', 'p-0']
          )}
        >
          <Icons.twitter className='h-4 w-4' />
          <span className='sr-only'>@Natchi59</span>
        </Link>

        <Link
          href={siteConfig.links.github}
          target='_blank'
          rel='noreferer'
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'sm'
            }),
            ['h-7', 'w-7', 'p-0']
          )}
        >
          <Icons.github className='h-4 w-4' />
          <span className='sr-only'>@Natchii59</span>
        </Link>

        <ThemeModeToggle />
      </div>
    </div>
  )
}
