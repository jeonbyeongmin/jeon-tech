import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type CategoryItemProps = {
  children: React.ReactNode
}

const Item = styled.div`
  border-radius: 3px;
  margin-right: 8px;
  font-size: 14px;
  font-weight: 500;
  color: gray;
`

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ children }) => {
  return <Item>{children}</Item>
}

export default CategoryItem
