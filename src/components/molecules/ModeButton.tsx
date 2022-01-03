import React, { FunctionComponent, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useRecoilState } from 'recoil'
import { initialColorMode } from 'contexts/ThemeRecoil'
import Icon from 'components/atoms/Icon'

type MenuItemsStaticQueryType = {
  moon: {
    publicURL: string
  }
  sun: {
    publicURL: string
  }
}

const ModeButton: FunctionComponent = () => {
  const data = useStaticQuery<MenuItemsStaticQueryType>(graphql`
    query {
      moon: file(name: { eq: "moon" }) {
        publicURL
      }
      sun: file(name: { eq: "sun" }) {
        publicURL
      }
    }
  `)

  const { publicURL: moonImg } = data.moon
  const { publicURL: sunImg } = data.sun

  const [colorMode, setColorMode] = useRecoilState(initialColorMode)

  console.log(colorMode)

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode)
    window.localStorage.setItem('color-mode', colorMode)
  }, [colorMode])

  return (
    <Icon
      iconURL={colorMode === 'dark' ? sunImg : moonImg}
      alter="darkmode"
      onToggleClick={darkModeHandling}
    />
  )
}

export default ModeButton
