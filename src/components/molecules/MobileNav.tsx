import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Text from 'components/atoms/Text';
import { Link } from 'gatsby';

type MobileNavProps = {
  className?: string;
};

const MobileNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 150px;
`;

const MobileNav: FunctionComponent<MobileNavProps> = ({ className }) => {
  const getInitialColorMode = () => {
    if (typeof window !== 'undefined') {
      return window.__theme;
    } else {
      return 'light';
    }
  };

  const [colorMode, setColorMode] = useState(getInitialColorMode());

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.__setPreferredTheme(colorMode);
  }, [colorMode]);

  return (
    <MobileNavWrapper className={className}>
      <Link to='/'>
        <Text className='mobile'>글</Text>
      </Link>
      <Link to='/profile'>
        <Text className='mobile'>소개</Text>
      </Link>
      <Text className='mobile' onToggleClick={darkModeHandling}>
        모드 변경하기
      </Text>
    </MobileNavWrapper>
  );
};

export default MobileNav;
