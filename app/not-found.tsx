'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className='relative flex h-screen w-full items-center justify-center bg-background bg-grid-black/[0.2] dark:bg-grid-white/[0.2]'>
      <div className='pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

      <div className='container relative z-20 flex flex-col items-center gap-y-4'>
        <h1 className='bg-gradient-to-b from-zinc-400 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-zinc-200 dark:to-zinc-500 sm:text-7xl'>
          You are lost.
        </h1>

        <Link href='/' className={cn(buttonVariants({ variant: 'outline' }))}>
          Back to safety
        </Link>
      </div>
    </div>
  )
}
