import { atom } from 'recoil'

declare global {
  interface Window {
    __theme: string
    __setPreferredTheme(colorMode: string): void
  }
}

const getInitialColorMode = () => {
  if (typeof window !== 'undefined') {
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
