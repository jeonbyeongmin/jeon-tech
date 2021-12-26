import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Logo from 'components/atoms/Logo'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

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
`

const MenuText = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-right: 30px;
`

const Header: FunctionComponent<HeaderProps> = ({ logoImage }) => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo logoImage={logoImage} />
        </Link>
        <LowFlex>
          <MenuText>글</MenuText>
          <MenuText>소개</MenuText>
          <MenuText>다크모드</MenuText>
        </LowFlex>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
