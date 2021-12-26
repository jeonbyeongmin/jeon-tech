import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type LogoImageProps = {
  logoImage: IGatsbyImageData
}

const Jeondev = styled(GatsbyImage)`
  width: 108px;

  @media (max-width: 768px) {
    width: 80px;
  }
`

const ImageWrapper = styled.div`
  padding: 30px;
`

const Logo: FunctionComponent<LogoImageProps> = ({ logoImage }) => {
  return (
    <ImageWrapper>
      <Jeondev image={logoImage} alt="JeonDev Logo" />
    </ImageWrapper>
  )
}

export default Logo
