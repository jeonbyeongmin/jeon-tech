import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  // currentTheme: string
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
  // currentTheme: string
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1044px;
  padding: 0 20px;
  margin: 100px auto 0;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 50px;
  }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;

  font-size: 18px;
  border-radius: 25px;
  font-weight: ${({ active }) => (active ? '500' : '300')};
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#000000' : '#ededed')};
  color: ${({ active }) => (active ? '#ffffff' : '#000000')};

  &:hover {
    color: ${({ active }) => (active ? '#ffffff' : '#000000')};
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 568px) {
    font-size: 14px;
  }
`
const CategoryList: FunctionComponent<CategoryListProps> = ({
  // currentTheme,
  selectedCategory,
  categoryList,
}) => {
  return (
    <CategoryListWrapper>
      {Object.keys(categoryList).map(name => (
        <CategoryItem
          to={`/?category=${name}`}
          // currentTheme={currentTheme}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
