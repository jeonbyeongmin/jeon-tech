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
  width: 768px;
  margin: 0 auto;
  padding: 60px 20px;
  color: black;

  @media (max-width: 767px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Title = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: keep-all;
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`

const PostData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 10px;
    font-size: 11px;
  }
`

const Info = styled.div`
  padding: 3px;

  @media (max-width: 767px) {
    padding: 2px;
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
        <Info>{categories.join(' / ')}</Info>
        <Info>{date}</Info>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeaderInfo
