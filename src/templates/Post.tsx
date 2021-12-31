import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

import { PostFrontmatterType } from 'types/PostItem.types'

import Layout from './Layout'
import PostContent from 'components/organisms/PostContent'
import PostHeader from 'components/organisms/PostHeader'
import PostCard from 'components/molecules/PostCard'
import PostCardList from 'components/organisms/PostCardList'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

type PostProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<PostProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Layout title={title} description={summary} url={href} image={publicURL}>
      <PostHeader
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
