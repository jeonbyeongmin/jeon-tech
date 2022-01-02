import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Text from 'components/atoms/Text'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { ThemeTogglerType } from 'types/Theme.types'

type MenuItemsProps = {
  className?: string
  currentTheme: string | undefined
  themeToggler: ThemeTogglerType
}

type MenuItemsStaticQueryType = {
  moon: {
    publicURL: string
  }

  sun: {
    publicURL: string
  }
}

const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const ModeButton = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  /* margin-right: 30px; */
  cursor: pointer;
`

const MenuItems: FunctionComponent<MenuItemsProps> = ({
  className,
  currentTheme,
  themeToggler,
}) => {
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

  return (
    <MenuItemsWrapper className={className}>
      <Link to="/">
        <Text>글</Text>
      </Link>
      <Link to="/profile">
        <Text>소개</Text>
      </Link>

      <ModeButton
        src={currentTheme === 'dark' ? sunImg : moonImg}
        alt="darkmode"
        onClick={themeToggler}
      />
    </MenuItemsWrapper>
  )
}

export default MenuItems
