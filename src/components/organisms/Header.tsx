import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';

import { useStaticQuery, graphql } from 'gatsby';

import Logo from 'components/atoms/Logo';
import Icon from 'components/atoms/Icon';
import Modal from './Modal';
import Nav from 'components/molecules/Nav';

type HeaderStaticQueryType = {
  hamburger: {
    publicURL: string;
  };
  logo: {
    publicURL: string;
  };
};

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  z-index: 1000;
  background: var(--defaultBg);
  color: var(--defaultColor);

  @media (max-width: 767px) {
    font-size: 13px;
    height: 60px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1044px;
  padding: 20px;
  margin: 0 auto;
`;

const Header: FunctionComponent = () => {
  const data = useStaticQuery<HeaderStaticQueryType>(graphql`
    query {
      hamburger: file(name: { eq: "hamburger" }) {
        publicURL
      }
      logo: file(name: { eq: "logo-image" }) {
        publicURL
      }
    }
  `);

  const { publicURL: logoURL } = data.logo;
  const { publicURL: hamburgerURL } = data.hamburger;

  const [modalToggle, setModalToggle] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo logoURL={logoURL} alter='jeon.dev logo' />
        <Nav />
        <Icon
          className='mobile-menu'
          iconURL={hamburgerURL}
          alter='menu'
          onToggleClick={() => setModalToggle((prev) => !prev)}
        />
      </HeaderInner>
      {modalToggle ? <Modal onToggleClick={() => setModalToggle((prev) => !prev)} /> : null}
    </HeaderWrapper>
  );
};

export default Header;
