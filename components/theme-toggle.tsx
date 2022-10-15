import { useTheme } from '@/hooks/useTheme'
import { Switch } from '@headlessui/react'
import type { FC } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle: FC = () => {
  const { setTheme } = useTheme()

  return (
    <Switch
      onClick={setTheme}
      className='w-[60px] h-[30px] px-px border-none bg-zinc-900 dark:bg-orange-50 flex items-center rounded-full relative cursor-pointer outline-focus'
    >
      <FaSun className='absolute left-2 top-2/4 -translate-y-1/2 text-zinc-300 dark:text-zinc-900' />

      <div
        aria-hidden='true'
        className='w-7 h-7 bg-orange-50 dark:bg-zinc-900 rounded-full z-10 dark:translate-x-0 translate-x-[29.5px] transition-transform duration-300'
      />

      <FaMoon className='absolute right-2 top-2/4 -translate-y-1/2 text-zinc-300 dark:text-zinc-900' />
    </Switch>
  )
}

export default ThemeToggle
