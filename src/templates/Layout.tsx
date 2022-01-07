import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from '../../GlobalStyle';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import { Helmet } from 'react-helmet';

type LayoutProps = {
  url?: string;
  title: string;
  image: string;
  description: string;
  children: ReactNode;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background: var(--defaultBg);
  color: var(--defaultColor);
`;

const HeaderBlank = styled.div`
  padding-top: 80px;
`;

const BodyContent = styled.section`
  height: auto;
  min-height: 100%;
`;

const Layout: FunctionComponent<LayoutProps> = ({ url, title, description, image, children }) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content={title} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

        <meta name='google-site-verification' content='P9xLRN_gkqMD5mNlmXDmTAdOJZOXWk-efvPfiABO338' />

        <meta name='naver-site-verification' content='9ae8eb02f2eb031c1bb76597981ff0cca07e9d06' />

        <html lang='ko' />
      </Helmet>

      <GlobalStyle />
      <Header />
      <HeaderBlank />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </Container>
  );
};

export default Layout;
