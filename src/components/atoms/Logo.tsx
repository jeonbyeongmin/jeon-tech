import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type LogoProps = {
  logoURL: string
  alter: string
  className?: string
}

const LogoImage = styled.img`
  width: 108px;

  @media (max-width: 768px) {
    width: 80px;
  }
`

const LogoWrapper = styled.div`
  /* padding: 30px; */
`

const Logo: FunctionComponent<LogoProps> = ({ logoURL, alter, className }) => {
  return (
    <Link to="/">
      <LogoWrapper className={className}>
        <LogoImage src={logoURL} alt={alter} className={className} />
      </LogoWrapper>
    </Link>
  )
}

export default Logo
