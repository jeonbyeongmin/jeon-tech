import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from '../../GlobalStyle';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import SEO from 'components/atoms/SEO';

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

const BodyContent = styled.section`
  padding-top: 80px;
  height: auto;
  min-height: 100%;
`;

const Layout: FunctionComponent<LayoutProps> = ({ url, title, description, image, children }) => {
  return (
    <Container>
      <GlobalStyle />
      <SEO url={url} title={title} description={description} image={image} />
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </Container>
  );
};

export default Layout;
