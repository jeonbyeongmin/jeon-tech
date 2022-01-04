import { atom } from 'recoil'

declare global {
  interface Window {
    __theme: string
  }
}

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

    console.log(window.__theme)

    return window.__theme
  } else {
    console.log('!')
    return 'light'
  }
}

const initialColorMode = atom({
  key: 'initialColorMode',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  default: getInitialColorMode(),
})

export { initialColorMode }
