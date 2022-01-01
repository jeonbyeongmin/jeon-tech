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
import { useSiteMetadata } from 'hooks/use-site-metadata'

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
    allMdx: {
      nodes: PostType[]
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
    allMdx: { nodes },
    profile: {
      childImageSharp: { gatsbyImageData: profileImage },
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
      nodes.reduce(
        (
          list: CategoryListProps['categoryList'],
          { frontmatter: { categories } }: PostType,
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

  console.log(nodes)

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
      <PostCardList selectedCategory={selectedCategory} posts={nodes} />
    </Layout>
  )
}

export const getPostList = graphql`
  query getPostList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
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
        slug
        id
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
