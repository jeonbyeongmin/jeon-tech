import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import Layout from '../templates/Layout'

type ProfilePageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }

    profile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    profile: {
      childImageSharp: { gatsbyImageData: profileImage },
      publicURL: profileURL,
    },
  },
}) => {
  return (
    <Layout
      image={profileURL}
      title={title}
      description={description}
      url={siteUrl}
    >
      <GatsbyImage image={profileImage} alt="profile" />
      <div>about page</div>
    </Layout>
  )
}

export const getProfile = graphql`
  query getProfile {
    site {
      siteMetadata {
        title
        description
        siteUrl
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

export default ProfilePage
