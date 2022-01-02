import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../../GlobalStyle'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { Helmet } from 'react-helmet'
import useTheme from 'hooks/useTheme'
import { ThemeProvider } from '@emotion/react'
import { lightTheme, darkTheme } from '../../GlobalStyle'
import { ThemeStyleProps } from 'types/Theme.types'

type LayoutProps = {
  url?: string
  title: string
  image: string
  description: string
  children: ReactNode
}

const Container = styled.main<ThemeStyleProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
`

const HeaderBlank = styled.div`
  padding-top: 80px;
`

const BodyContent = styled.div`
  height: auto;
  min-height: 100%;
`

const Layout: FunctionComponent<LayoutProps> = ({
  url,
  title,
  description,
  image,
  children,
}) => {
  const { currentTheme, themeToggler } = useTheme()
  const themeMode = currentTheme == 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <Helmet>
          <title>{title}</title>

          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
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

        <Header currentTheme={currentTheme} themeToggler={themeToggler} />

        <GlobalStyle />
        <HeaderBlank />
        <BodyContent>{children}</BodyContent>

        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
