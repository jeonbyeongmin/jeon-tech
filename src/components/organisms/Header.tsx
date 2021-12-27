import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from 'components/atoms/Logo'
import Icon from 'components/atoms/Icon'
import MobileMenu from './MobileMenu'
import MenuItems from 'components/molecules/MenuItems'

type HeaderProps = {
  logoImage: IGatsbyImageData
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

  @media (max-width: 768px) {
    font-size: 13px;
    height: 60px;
  }
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const Header: FunctionComponent<HeaderProps> = ({ logoImage }) => {
  const data = useStaticQuery(graphql`
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
    }
  `)

  const { gatsbyImageData: hamburgerImg } = data.hamburger.childImageSharp
  const { gatsbyImageData: letterXImg } = data.letterX.childImageSharp

  const [modalToggle, setModalToggle] = useState<boolean>(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Logo logoImage={logoImage} alter="jeon.dev logo" />
          <MenuItems />
          <Icon
            className="mobile-menu"
            iconImage={hamburgerImg}
            alter="hamburger icon"
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
