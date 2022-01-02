import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type IconProps = {
  iconURL: string
  alter: string
  className?: string
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined
}

const IconImage = styled.img`
  width: 20px;
  cursor: pointer;

  &.mobile-menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 16px;
  }
`

const IconWrapper = styled.div`
  &.mobile-menu {
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const Icon: FunctionComponent<IconProps> = ({
  iconURL,
  alter,
  onToggleClick,
  className,
}) => {
  return (
    <IconWrapper onClick={onToggleClick} className={className}>
      <IconImage src={iconURL} alt={alter} className={className} />
    </IconWrapper>
  )
}

export default Icon
