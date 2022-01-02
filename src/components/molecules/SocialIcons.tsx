import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import Icon from 'components/atoms/Icon'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const SocialIconsWrapper = styled.div`
  display: flex;
  padding: 0 6px;
`

const SocialIconsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`

type SocialIconsStaticQueryType = {
  insta: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  github: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  email: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const SocialIcons: FunctionComponent = () => {
  const data = useStaticQuery<SocialIconsStaticQueryType>(graphql`
    query {
      insta: file(name: { eq: "instagram" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }

      github: file(name: { eq: "github" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }

      email: file(name: { eq: "email" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20)
        }
        publicURL
      }
    }
  `)

  const { gatsbyImageData: instaImg } = data.insta.childImageSharp
  const { gatsbyImageData: githubImg } = data.github.childImageSharp
  const { gatsbyImageData: emailImg } = data.email.childImageSharp

  return (
    <SocialIconsWrapper>
      <SocialIconsGrid>
        <a
          href="https://www.instagram.com/jeonbyeongm1n/?hl=ko"
          target="_blank"
        >
          <Icon
            className="social-icon"
            iconImage={instaImg}
            alter="instagram icon"
          />
        </a>
        <a href="https://github.com/jeonbyeongmin" target="_blank">
          <Icon
            className="social-icon"
            iconImage={githubImg}
            alter="instagram icon"
          />
        </a>
        <Icon
          className="social-icon"
          iconImage={emailImg}
          alter="instagram icon"
        />
      </SocialIconsGrid>
    </SocialIconsWrapper>
  )
}

export default SocialIcons
