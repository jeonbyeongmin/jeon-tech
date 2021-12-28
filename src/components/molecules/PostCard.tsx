import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import { GatsbyImage } from 'gatsby-plugin-image'

type PostCardProps = PostFrontmatterType & { link: string }

const PostCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 220px;

  @media (max-width: 767px) {
    height: 200px;
  }
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 767px) {
    padding: 5px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

const Date = styled.div`
  font-size: 14px;
  margin-bottom: 13px;
  opacity: 0.6;

  @media (max-width: 767px) {
    font-weight: 300;
    font-size: 11px;
  }
`

const Category = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 11px;
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
