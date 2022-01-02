import styled from '@emotion/styled'
import SocialIcons from 'components/molecules/SocialIcons'
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

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1044px;
  margin: 0 auto;
  padding: 50px 40px;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 70px;
  }
`

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    font-size: 15px;
    font-weight: 300;
  }
`

const InfoTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`

const InfoDescription = styled.div`
  margin-bottom: 50px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

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
      <ProfileWrapper>
        <ProfileImageWrapper>
          <GatsbyImage image={profileImage} alt="profile" />
        </ProfileImageWrapper>

        <InfoWrapper>
          <InfoTitle>안녕하세요. 전병민입니다.</InfoTitle>

          <InfoDescription>
            <p>프론트 엔드 개발자가 되기 위해 항상 성장에 대해 고민합니다.</p>
            <p>동료에게 더 편한 코드를 작성하기 위해 노력합니다.</p>
            <p>사용자에게 편리함을 주기 위해 노력합니다.</p>
          </InfoDescription>
          <SocialIcons />
        </InfoWrapper>
      </ProfileWrapper>
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
        gatsbyImageData(width: 350, height: 350)
      }
      publicURL
    }
  }
`

export default ProfilePage
