import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 787px;
  margin: 0 auto;
  padding: 60px 20px;
  color: black;

  @media (max-width: 767px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const PostData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 300;

  @media (max-width: 767px) {
    margin-top: 10px;
    font-size: 11px;
  }
`

const PostHeaderInfo: FunctionComponent<PostHeadInfoProps> = ({
  title,
  date,
  categories,
}) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeaderInfo
