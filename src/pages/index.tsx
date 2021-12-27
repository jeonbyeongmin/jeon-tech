import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string' // URL을 통해 카테고리를 파싱

import { PostType } from 'types/PostItem.types'

import CategoryList, {
  CategoryListProps,
} from 'components/organisms/CategoryList'
import PostCardList from 'components/organisms/PostCardList'
import Layout from '../templates/Layout'
import { useSiteMetadata } from 'hooks/useSiteMetadata'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostType[]
    }
    profile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    profile: {
      // childImageSharp: { gatsbyImageData: profileImage },
      publicURL: profileURL,
    },
  },
}) => {
  const { title, description, siteUrl } = useSiteMetadata()

  // 📌 URL에서 카테고리 파싱해서 selectedCategory를 정함
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Layout
      image={profileURL}
      title={title}
      description={description}
      url={siteUrl}
    >
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostCardList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  )
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    profile: file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`

export default IndexPage
