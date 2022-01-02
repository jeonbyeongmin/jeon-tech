import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type IconProps = {
  iconImage: IGatsbyImageData
  alter: string
  className?: string
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined
}

const IconImage = styled(GatsbyImage)`
  width: 20px;
  cursor: pointer;

  &.mobile-menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
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
  iconImage,
  alter,
  onToggleClick,
  className,
}) => {
  return (
    <IconWrapper onClick={onToggleClick} className={className}>
      <IconImage image={iconImage} alt={alter} className={className} />
    </IconWrapper>
  )
}

export default Icon
