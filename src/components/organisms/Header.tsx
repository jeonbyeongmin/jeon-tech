import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { useStaticQuery, graphql } from 'gatsby'

import Logo from 'components/atoms/Logo'
import Icon from 'components/atoms/Icon'
import MobileMenu from './MobileMenu'
import MenuItems from 'components/molecules/MenuItems'
import { ThemeStyleProps } from 'types/Theme.types'
import { initialColorMode } from 'contexts/ThemeRecoil'
import { useRecoilValue } from 'recoil'

type HeaderStaticQueryType = {
  hamburger: {
    publicURL: string
  }
  darkHamburger: {
    publicURL: string
  }
  letterX: {
    publicURL: string
  }
  logo: {
    publicURL: string
  }
  darkLogo: {
    publicURL: string
  }
}

const HeaderWrapper = styled.header<ThemeStyleProps>`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  z-index: 1000;
  background-color: ${props => props.theme.backgroundColor};

  @media (max-width: 767px) {
    font-size: 13px;
    height: 60px;
  }
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1044px;
  padding: 20px;
  margin: 0 auto;
`

const Header: FunctionComponent = () => {
  const data = useStaticQuery<HeaderStaticQueryType>(graphql`
    query {
      hamburger: file(name: { eq: "hamburger" }) {
        publicURL
      }
      darkHamburger: file(name: { eq: "dark-hamburger" }) {
        publicURL
      }
      logo: file(name: { eq: "logo-image" }) {
        publicURL
      }
      darkLogo: file(name: { eq: "dark-logo-image" }) {
        publicURL
      }
    }
  `)

  const { publicURL: logoURL } = data.logo
  const { publicURL: darkLogoURL } = data.darkLogo
  const { publicURL: hamburgerURL } = data.hamburger
  const { publicURL: darkHamburgerURL } = data.darkHamburger

  const [modalToggle, setModalToggle] = useState<boolean>(false)
  const colorMode = useRecoilValue(initialColorMode)

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo
          logoURL={colorMode === 'dark' ? darkLogoURL : logoURL}
          alter="jeon.dev logo"
        />
        <MenuItems />
        <Icon
          className="mobile-menu"
          iconURL={colorMode === 'dark' ? darkHamburgerURL : hamburgerURL}
          alter="menu"
          onToggleClick={() => setModalToggle(prev => !prev)}
        />
      </HeaderInner>
      {modalToggle ? (
        <MobileMenu onToggleClick={() => setModalToggle(prev => !prev)} />
      ) : null}
    </HeaderWrapper>
  )
}

export default Header
