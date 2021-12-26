import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type IconProps = {
  image: IGatsbyImageData
  alter: string
  onToggleClick: React.MouseEventHandler<HTMLImageElement> | undefined
}

const IconImage = styled(GatsbyImage)`
  display: none;
  width: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const IconWrapper = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  margin-right: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #ededed;
    transition: all ease-out 0.2s;
  }
`

const Icon: FunctionComponent<IconProps> = ({
  image,
  alter,
  onToggleClick,
}) => {
  return (
    <IconWrapper>
      <IconImage image={image} alt={alter} onClick={onToggleClick} />
    </IconWrapper>
  )
}

export default Icon
