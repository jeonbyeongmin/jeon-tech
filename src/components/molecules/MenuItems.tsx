import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import Text from 'components/atoms/Text'
import { graphql, useStaticQuery } from 'gatsby'

type MenuItemsProps = {
  className?: string
}

const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const ModeButton = styled(GatsbyImage)`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
`

const MenuItems: FunctionComponent<MenuItemsProps> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
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

  const { gatsbyImageData: moonImg } = data.moon.childImageSharp
  //   const { gatsbyImageData: sunImg } = data.sun.childImageSharp

  return (
    <MenuItemsWrapper className={className}>
      <Text>글</Text>
      <Text>소개</Text>
      <ModeButton image={moonImg} alt="moon" />
    </MenuItemsWrapper>
  )
}

export default MenuItems
