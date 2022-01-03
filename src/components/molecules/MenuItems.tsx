import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Text from 'components/atoms/Text'
import ModeButton from './ModeButton'

type MenuItemsProps = {
  className?: string
}

const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`

const TextWrapper = styled.div`
  display: flex;
  margin-right: 30px;
`

const MenuItems: FunctionComponent<MenuItemsProps> = ({ className }) => {
  return (
    <MenuItemsWrapper className={className}>
      <TextWrapper>
        <Link to="/">
          <Text>글</Text>
        </Link>
        <Link to="/profile">
          <Text>소개</Text>
        </Link>
      </TextWrapper>

      <ModeButton />
    </MenuItemsWrapper>
  )
}

export default MenuItems
