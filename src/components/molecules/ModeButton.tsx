import React, { FunctionComponent, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useRecoilState } from 'recoil'
import { initialColorMode } from 'contexts/ThemeRecoil'
import Icon from 'components/atoms/Icon'

type MenuItemsStaticQueryType = {
  bulb: {
    publicURL: string
  }
}

const ModeButton: FunctionComponent = () => {
  const data = useStaticQuery<MenuItemsStaticQueryType>(graphql`
    query {
      bulb: file(name: { eq: "bulb" }) {
        publicURL
      }
    }
  `)

  const { publicURL: bulbImg } = data.bulb

  const [colorMode, setColorMode] = useRecoilState(initialColorMode)

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    window.__setPreferredTheme(colorMode)
  }, [colorMode])

  return (
    <Icon
      iconURL={bulbImg}
      alter="darkmode"
      className="bulb"
      onToggleClick={darkModeHandling}
    />
  )
}

export default ModeButton
