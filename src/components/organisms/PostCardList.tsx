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
  grid-gap: 25px;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 30px 100px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 50px 30px;
  }

  @media (max-width: 668px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 30px;
  }
`

const PostCardList: FunctionComponent<PostCardListProps> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts)
  return (
    <PostCardListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostType) => (
          <PostCard {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostCardListWrapper>
  )
}

export default PostCardList
