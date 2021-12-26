import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Logo from 'components/atoms/Logo'
import Icon from 'components/atoms/Icon'
import Modal from '../atoms/Modal'

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

const LowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuText = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.mobile {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;

    &:hover {
      border: none;
    }
  }
`

const ModeButton = styled(GatsbyImage)`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
`

const IconPosition = styled.div`
  position: fixed;
  top: 20px;
  right: 0px;
`

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 150px;
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

      moon: file(name: { eq: "moon" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }

      sun: file(name: { eq: "sun" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }
    }
  `)

  const { gatsbyImageData: hamburgerImg } = data.hamburger.childImageSharp
  const { gatsbyImageData: xImg } = data.letterX.childImageSharp
  const { gatsbyImageData: moonImg } = data.moon.childImageSharp
  const { gatsbyImageData: sunImg } = data.sun.childImageSharp

  const [modalToggle, setModalToggle] = useState<boolean>(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Link to="/">
            <Logo logoImage={logoImage} />
          </Link>
          <LowFlex>
            <MenuText>글</MenuText>
            <MenuText>소개</MenuText>
            <ModeButton image={moonImg} alt="moon" />
          </LowFlex>

          <Icon
            image={hamburgerImg}
            alter="hamburger icon"
            onToggleClick={() => setModalToggle(prev => !prev)}
          />
        </HeaderInner>
      </HeaderWrapper>
      {modalToggle ? (
        <Modal>
          <ColumnFlex>
            <MenuText className="mobile">글</MenuText>
            <MenuText className="mobile">소개</MenuText>
            <MenuText className="mobile">모드 변경하기</MenuText>
          </ColumnFlex>

          <IconPosition>
            <Icon
              image={xImg}
              alter="letter-x icon"
              onToggleClick={() => setModalToggle(prev => !prev)}
            />
          </IconPosition>
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}

export default Header
