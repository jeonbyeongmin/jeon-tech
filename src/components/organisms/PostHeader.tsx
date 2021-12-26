import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeaderInfo from 'components/molecules/PostHeaderInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeaderProps = {
  title: string
  date: string
  categories: string[]
  thumbnail: IGatsbyImageData
}

const PostHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <PostHeaderWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeaderInfo title={title} date={date} categories={categories} />
    </PostHeaderWrapper>
  )
}

export default PostHeader
