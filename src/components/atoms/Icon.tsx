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
  margin-right: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`

const Icon: FunctionComponent<IconProps> = ({
  image,
  alter,
  onToggleClick,
}) => {
  return <IconImage image={image} alt={alter} onClick={onToggleClick} />
}

export default Icon
