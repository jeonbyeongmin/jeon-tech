import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostCard from 'components/molecules/PostCard'
import { PostType } from 'types/PostItem.types'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

type PostCardListProps = {
  selectedCategory: string
  posts: PostType[]
}

const PostCardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 1044px;
  margin: 0 auto;
  padding: 50px 20px 100px;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 40px;
  }
`

const PostCardList: FunctionComponent<PostCardListProps> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts)

  return (
    <PostCardListWrapper ref={containerRef}>
      {postList.map(({ id, slug, frontmatter }: PostType) => (
        <PostCard {...frontmatter} link={slug} key={id} />
      ))}
    </PostCardListWrapper>
  )
}

export default PostCardList
