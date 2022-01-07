import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Icon from './Icon';

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme(colorMode: string): void;
  }
}

type ThemeToggleType = {
  bulb: {
    publicURL: string;
  };
};

const ThemeToggle: FunctionComponent = () => {
  const data = useStaticQuery<ThemeToggleType>(graphql`
    query {
      bulb: file(name: { eq: "bulb" }) {
        publicURL
      }
    }
  `);

  const { publicURL: bulbImg } = data.bulb;

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

  return <Icon iconURL={bulbImg} alter='darkmode' className='bulb' onToggleClick={darkModeHandling} />;
};

export default ThemeToggle;
