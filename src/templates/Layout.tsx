import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../../GlobalStyle'
import Footer from 'components/organisms/Footer'
import { Helmet } from 'react-helmet'
import Header from 'components/organisms/Header'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from 'hooks/useSiteMetadata'

type LayoutProps = {
  url?: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const HeaderBlank = styled.div`
  padding-top: 80px;
`

const Layout: FunctionComponent<LayoutProps> = ({ url, image, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-image" }) {
        childImageSharp {
          gatsbyImageData(width: 430, height: 120)
        }
        publicURL
      }
    }
  `)
  const { gatsbyImageData } = data.file.childImageSharp
  const { title, description, siteUrl } = useSiteMetadata()

  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={siteUrl || url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta
          name="google-site-verification"
          content="P9xLRN_gkqMD5mNlmXDmTAdOJZOXWk-efvPfiABO338"
        />

        <meta
          name="naver-site-verification"
          content="9ae8eb02f2eb031c1bb76597981ff0cca07e9d06"
        />

        <html lang="ko" />
      </Helmet>
      <Header logoImage={gatsbyImageData} />
      <GlobalStyle />
      <HeaderBlank />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
