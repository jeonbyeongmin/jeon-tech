import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import Icon from 'components/atoms/Icon'

const SocialIconsWrapper = styled.div`
  display: flex;
`

const SocialIcons: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
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
      <Icon
        className="footer-social-icon"
        iconImage={instaImg}
        alter="instagram icon"
      />
      <Icon
        className="footer-social-icon"
        iconImage={githubImg}
        alter="instagram icon"
      />
      <Icon
        className="footer-social-icon"
        iconImage={emailImg}
        alter="instagram icon"
      />
    </SocialIconsWrapper>
  )
}

export default SocialIcons
