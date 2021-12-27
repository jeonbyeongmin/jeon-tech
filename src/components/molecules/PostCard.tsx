import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import { GatsbyImage } from 'gatsby-plugin-image'

type PostCardProps = PostFrontmatterType & { link: string }

const PostCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: 0.3s box-shadow;
  cursor: pointer;
`
const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 568px) {
    height: 150px;
  }
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 18px;
  }
  @media (max-width: 568px) {
    font-size: 16px;
  }
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 13px;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 13px;
  }
  @media (max-width: 568px) {
    font-size: 12px;
  }
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 12px;
  }
  @media (max-width: 568px) {
    font-size: 12px;
  }
`

const RowFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 14px;
  }
`

const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <PostCardWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

      <PostItemContent>
        <RowFlex>
          <Category>{categories.join(' / ')}</Category>
          <Date>{date}</Date>
        </RowFlex>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostCardWrapper>
  )
}

export default PostCard
