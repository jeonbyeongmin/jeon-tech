import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from 'components/atoms/Logo'
import Icon from 'components/atoms/Icon'
import MobileMenu from './MobileMenu'
import MenuItems from 'components/molecules/MenuItems'
import { ThemeTogglerType } from 'types/Theme.types'
import { ThemeStyleProps } from 'types/Theme.types'

type HeaderProps = {
  currentTheme: string | undefined
  themeToggler: ThemeTogglerType
}

type HeaderStaticQueryType = {
  hamburger: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }

  letterX: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }

  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }

  darkLogo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
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

const Header: FunctionComponent<HeaderProps> = ({
  currentTheme,
  themeToggler,
}) => {
  const data = useStaticQuery<HeaderStaticQueryType>(graphql`
    query {
      hamburger: file(name: { eq: "hamburger" }) {
        publicURL
      }
      letterX: file(name: { eq: "letter-x" }) {
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
  const { publicURL: letterXURL } = data.letterX

  const [modalToggle, setModalToggle] = useState<boolean>(false)

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo
          logoURL={currentTheme === 'dark' ? darkLogoURL : logoURL}
          alter="jeon.dev logo"
        />
        <MenuItems currentTheme={currentTheme} themeToggler={themeToggler} />
        <Icon
          className="mobile-menu"
          iconURL={hamburgerURL}
          alter="menu"
          onToggleClick={() => setModalToggle(prev => !prev)}
        />
      </HeaderInner>
      {modalToggle ? (
        <MobileMenu
          imageURL={letterXURL}
          alter="letter x image"
          onToggleClick={() => setModalToggle(prev => !prev)}
        />
      ) : null}
    </HeaderWrapper>
  )
}

export default Header
