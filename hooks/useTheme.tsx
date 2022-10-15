import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.localStorage !== 'undefined') {
        const theme = window.localStorage.getItem('theme')
        if (theme && (theme === 'dark' || theme === 'light')) return theme
      }

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  const setThemeHandle = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return { setTheme: setThemeHandle }
}
