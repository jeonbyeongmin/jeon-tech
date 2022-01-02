// src/hooks/useTheme.js
import { useEffect, useState } from 'react'
import { ThemeTogglerType } from '../types/ThemeToggler.types'

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string>()

  useEffect(() => {
    if (currentTheme === undefined) {
      const prefersColorScheme = window.matchMedia(
        '(prefers-color-scheme : dark)',
      ).matches
        ? 'dark'
        : 'light'

      const localTheme = localStorage.getItem('theme')
      const initialTheme = localTheme || prefersColorScheme

      setCurrentTheme(initialTheme)
    }
  }, [])

  const setMode = (mode: string) => {
    localStorage.setItem('theme', mode)
    setCurrentTheme(mode)
  }

  const themeToggler: ThemeTogglerType = () => {
    currentTheme === 'light' ? setMode('dark') : setMode('light')
  }

  return { currentTheme, themeToggler }
}
export default useTheme
