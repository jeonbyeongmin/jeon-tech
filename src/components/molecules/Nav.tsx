import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Text from 'components/atoms/Text';
import ThemeToggle from 'components/atoms/ThemeToggle';

type NavProps = {
  className?: string;
};

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavInner = styled.div`
  display: flex;
  margin-right: 30px;
`;

const Nav: FunctionComponent<NavProps> = ({ className }) => {
  return (
    <NavWrapper className={className}>
      <NavInner>
        <Link to='/'>
          <Text>글</Text>
        </Link>
        <Link to='/profile'>
          <Text>소개</Text>
        </Link>
      </NavInner>
      <ThemeToggle />
    </NavWrapper>
  );
};

export default Nav;
