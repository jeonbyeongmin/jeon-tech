import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type IconProps = {
  iconURL: string;
  alter: string;
  className?: string;
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
};

const IconImage = styled.img`
  width: 20px;
  filter: var(--imageFilter);
  cursor: pointer;

  &.mobile-menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &.bulb {
    width: 23px;
  }

  @media (max-width: 768px) {
    width: 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.mobile-menu {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const Icon: FunctionComponent<IconProps> = ({ iconURL, alter, onToggleClick, className }) => {
  return (
    <IconWrapper onClick={onToggleClick} className={className}>
      <IconImage src={iconURL} alt={alter} className={className} />
    </IconWrapper>
  );
};

export default Icon;
