import { atom } from 'recoil'

const getInitialColorMode = () => {
  if (typeof window !== 'undefined') {
    const persistedColorPreference = window.localStorage.getItem('color-mode')

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    return persistedColorPreference
      ? persistedColorPreference
      : systemPreference
  }

  return 'light'
}

const initialColorMode = atom({
  key: 'initialColorMode',
  default: getInitialColorMode(),
})

export { initialColorMode }
