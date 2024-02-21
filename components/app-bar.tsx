import Image from 'next/image'
import Link from 'next/link'
import profileImage from '@/assets/images/profile.webp'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import { Icons } from './icons'
import { ThemeModeToggle } from './theme-mode-toggle'
import { buttonVariants } from './ui/button'

export function AppBar() {
  return (
    <header className='flex items-center gap-2 py-4'>
      <Image
        src={profileImage}
        alt='Profile'
        className='size-10 rounded-full'
      />

      <div className='flex h-10 flex-auto flex-col justify-between'>
        <h1 className='text-xl font-bold leading-6'>Natchi</h1>
        <span className='text-sm leading-4 text-muted-foreground'>
          Fullstack Developer
        </span>
      </div>

      <Link
        href={siteConfig.links.github}
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'size-8'
        )}
      >
        <Icons.github className='size-5' />
      </Link>

      <ThemeModeToggle className='size-8' classNameIcon='size-5' />
    </header>
  )
}
