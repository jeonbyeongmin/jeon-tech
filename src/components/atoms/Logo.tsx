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
  filter: var(--imageFilter);

  @media (max-width: 768px) {
    width: 80px;
  }
`

const Logo: FunctionComponent<LogoProps> = ({ logoURL, alter, className }) => {
  return (
    <Link to="/">
      <LogoImage src={logoURL} alt={alter} className={className} />
    </Link>
  )
}

export default Logo
