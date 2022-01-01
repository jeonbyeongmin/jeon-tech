import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from 'components/atoms/Logo'
import Icon from 'components/atoms/Icon'
import MobileMenu from './MobileMenu'
import MenuItems from 'components/molecules/MenuItems'

type HeaderStaticQueryType = {
  hamburger: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }

  letterX: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }

  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const HeaderWrapper = styled.header`
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
  background-color: #fff;

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
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }

      letterX: file(name: { eq: "letter-x" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }

      logo: file(name: { eq: "logo-image" }) {
        childImageSharp {
          gatsbyImageData(width: 430, height: 120)
        }
        publicURL
      }
    }
  `)

  const { gatsbyImageData: logo } = data.logo.childImageSharp
  const { gatsbyImageData: hamburgerImg } = data.hamburger.childImageSharp
  const { gatsbyImageData: letterXImg } = data.letterX.childImageSharp

  const [modalToggle, setModalToggle] = useState<boolean>(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Logo logoImage={logo} alter="jeon.dev logo" />
          <MenuItems />
          <Icon
            className="mobile-menu"
            iconImage={hamburgerImg}
            alter="menu"
            onToggleClick={() => setModalToggle(prev => !prev)}
          />
        </HeaderInner>
      </HeaderWrapper>
      {modalToggle ? (
        <MobileMenu
          image={letterXImg}
          alter="letter x image"
          onToggleClick={() => setModalToggle(prev => !prev)}
        />
      ) : null}
    </>
  )
}

export default Header
