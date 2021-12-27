import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type LogoProps = {
  logoImage: IGatsbyImageData
  alter: string
  className?: string
}

const LogoImage = styled(GatsbyImage)`
  width: 108px;

  @media (max-width: 768px) {
    width: 80px;
  }
`

const LogoWrapper = styled.div`
  padding: 30px;
`

const Logo: FunctionComponent<LogoProps> = ({
  logoImage,
  alter,
  className,
}) => {
  return (
    <Link to="/">
      <LogoWrapper className={className}>
        <LogoImage image={logoImage} alt={alter} className={className} />
      </LogoWrapper>
    </Link>
  )
}

export default Logo
