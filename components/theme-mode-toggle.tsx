'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface ThemeModeToggleProps {
  className?: string
  classNameIcon?: string
}

export function ThemeModeToggle({
  className,
  classNameIcon
}: ThemeModeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className={cn(className)}>
          <Icons.sun
            className={cn('inset-0 size-1/2 dark:hidden', classNameIcon)}
          />
          <Icons.moon
            className={cn('inset-0 hidden size-1/2 dark:block', classNameIcon)}
          />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.sun className='mr-2 size-4' />
          <span>Clair</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.moon className='mr-2 size-4' />
          <span>Sombre</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.laptop className='mr-2 size-4' />
          <span>Système</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
