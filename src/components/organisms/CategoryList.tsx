import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { useRecoilValue } from 'recoil'
import { initialColorMode } from 'contexts/ThemeRecoil'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
  colorMode: string
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

const CategoryItem = styled(
  ({ active, colorMode, ...props }: GatsbyLinkProps) => <Link {...props} />,
)<CategoryItemProps>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;

  font-size: 16px;
  border-radius: 25px;
  font-weight: ${({ active }) => (active ? '500' : '300')};
  cursor: pointer;
  background-color: ${({ active, colorMode }) =>
    colorMode === 'dark'
      ? active
        ? '#ffffff'
        : '#333333'
      : active
      ? '#000000'
      : '#e5e5e5'};

  color: ${({ active, colorMode }) =>
    colorMode === 'dark'
      ? active
        ? '#000000'
        : '#ffffff'
      : active
      ? '#ffffff'
      : '#000000'};

  &:hover {
    color: ${({ active, colorMode }) =>
      colorMode === 'dark'
        ? active
          ? '#000000'
          : '#ffffff'
        : active
        ? '#ffffff'
        : '#000000'};
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
  selectedCategory,
  categoryList,
}) => {
  const colorMode = useRecoilValue(initialColorMode)

  return (
    <CategoryListWrapper>
      {Object.keys(categoryList).map(name => (
        <CategoryItem
          to={`/?category=${name}`}
          colorMode={colorMode}
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
