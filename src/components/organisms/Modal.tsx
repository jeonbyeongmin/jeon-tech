import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import MobileNav from 'components/molecules/MobileNav';
import Icon from 'components/atoms/Icon';
import { graphql, useStaticQuery } from 'gatsby';

type ModalProps = {
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
};

type MobileMenuStaticQueryType = {
  letterX: {
    publicURL: string;
  };
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  background-color: var(--defaultBg);
  color: var(--defaultColor);
`;

const IconPosition = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const Modal: FunctionComponent<ModalProps> = ({ onToggleClick }) => {
  const data = useStaticQuery<MobileMenuStaticQueryType>(graphql`
    query {
      letterX: file(name: { eq: "letter-x" }) {
        publicURL
      }
    }
  `);

  const { publicURL: letterXURL } = data.letterX;

  return (
    <ModalWrapper>
      <MobileNav />
      <IconPosition>
        <Icon iconURL={letterXURL} alter='letter x image' onToggleClick={onToggleClick} />
      </IconPosition>
    </ModalWrapper>
  );
};

export default Modal;
