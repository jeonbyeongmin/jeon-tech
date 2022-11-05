import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Icon from 'components/atoms/Icon';

const SocialIconsWrapper = styled.div`
  display: flex;
  padding: 0 6px;
`;

const SocialIconsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

type SocialIconsStaticQueryType = {
  insta: {
    publicURL: string;
  };
  github: {
    publicURL: string;
  };
  email: {
    publicURL: string;
  };
};

const SocialIcons: FunctionComponent = () => {
  const data = useStaticQuery<SocialIconsStaticQueryType>(graphql`
    query {
      insta: file(name: { eq: "instagram" }) {
        publicURL
      }
      github: file(name: { eq: "github" }) {
        publicURL
      }
      email: file(name: { eq: "email" }) {
        publicURL
      }
    }
  `);

  const { publicURL: instaImgURL } = data.insta;
  const { publicURL: githubImgURL } = data.github;
  const { publicURL: emailImgURL } = data.email;

  return (
    <SocialIconsWrapper>
      <SocialIconsGrid>
        <a
          href='https://www.instagram.com/jeonbyeongm1n/?hl=ko'
          target='_blank'
          aria-label='github'
          rel='noopener noreferrer'
        >
          <Icon className='social-icon' iconURL={instaImgURL} alter='instagram icon' />
        </a>
        <a
          href='https://www.instagram.com/jeonbyeongm1n/?hl=ko'
          target='_blank'
          aria-label='instagram'
          rel='noopener noreferrer'
        >
          <Icon className='social-icon' iconURL={githubImgURL} alter='github icon' />
        </a>
        <a href='mailto:qudals7613@gmail.com' aria-label='mail'>
          <Icon className='social-icon' iconURL={emailImgURL} alter='email icon' />
        </a>
      </SocialIconsGrid>
    </SocialIconsWrapper>
  );
};

export default SocialIcons;
