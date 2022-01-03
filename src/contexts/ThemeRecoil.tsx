import { atom } from 'recoil'

const getInitialColorMode = () => {
  if (typeof window !== 'undefined') {
    // const persistedColorPreference = window.localStorage.getItem('color-mode')

    // const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
    //   .matches
    //   ? 'dark'
    //   : 'light'

    // return persistedColorPreference
    //   ? persistedColorPreference
    //   : systemPreference

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return window.__theme
  } else {
    return 'light'
  }
}

const initialColorMode = atom({
  key: 'initialColorMode',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  default: getInitialColorMode(),
})

export { initialColorMode }
