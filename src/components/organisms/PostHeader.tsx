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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;

  @media (max-width: 1024px) {
    height: 800px;
  }

  @media (max-width: 767px) {
    height: 450px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} />
))`
  width: 1024px;
  height: 600px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 787px) {
    width: 100%;
    height: 500px;
  }
`

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <PostHeaderWrapper>
      <PostHeaderInfo title={title} date={date} categories={categories} />
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeaderWrapper>
  )
}

export default PostHeader
