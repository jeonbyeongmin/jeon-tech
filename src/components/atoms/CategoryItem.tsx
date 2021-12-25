import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type CategoryItemProps = {
  children: React.ReactNode
}

const Item = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ children }) => {
  return <Item>{children}</Item>
}

export default CategoryItem
