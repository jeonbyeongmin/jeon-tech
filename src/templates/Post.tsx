import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { PostFrontmatterType } from 'types/PostItem.types';

import Layout from './Layout';
import PostContent from 'components/organisms/PostContent';
import PostHeader from 'components/organisms/PostHeader';

export type PostPageItemType = {
  body: string;
  frontmatter: PostFrontmatterType;
};

type PostProps = {
  data: {
    allMdx: {
      nodes: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

const PostTemplate: FunctionComponent<PostProps> = ({
  data: {
    allMdx: { nodes },
  },
  location: { href },
}) => {
  const {
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
    body,
  } = nodes[0];

  return (
    <Layout title={title} description={summary} url={href} image={publicURL}>
      <PostHeader title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <PostContent body={body} />
    </Layout>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
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
        body
      }
    }
  }
`;
