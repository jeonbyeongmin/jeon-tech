import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import SocialIcons from 'components/molecules/SocialIcons'

const FooterWrapper = styled.footer`
  height: 200px;
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: center;

  padding: 80px 0px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  padding: 0px 30px;
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        &copy; {new Date().getFullYear()} JEON.DEV
        <SocialIcons />
      </FooterInner>
    </FooterWrapper>
  )
}

export default Footer
