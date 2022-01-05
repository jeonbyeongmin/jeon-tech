import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import MobileMenuItems from 'components/molecules/MobileMenuItems'
import Icon from 'components/atoms/Icon'
import { graphql, useStaticQuery } from 'gatsby'
import { initialColorMode } from 'contexts/ThemeRecoil'
import { useRecoilValue } from 'recoil'

type MobileMenuProps = {
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined
}

type MobileMenuStaticQueryType = {
  letterX: {
    publicURL: string
  }
  darkLetterX: {
    publicURL: string
  }
}

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  background-color: var(--defaultBg);
  color: var(--defaultColor);
`

const IconPosition = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ onToggleClick }) => {
  const data = useStaticQuery<MobileMenuStaticQueryType>(graphql`
    query {
      letterX: file(name: { eq: "letter-x" }) {
        publicURL
      }
      darkLetterX: file(name: { eq: "dark-letter-x" }) {
        publicURL
      }
    }
  `)

  const { publicURL: letterXURL } = data.letterX
  const { publicURL: darkLetterXURL } = data.darkLetterX

  const colorMode = useRecoilValue(initialColorMode)

  return (
    <MobileMenuWrapper>
      <MobileMenuItems />
      <IconPosition>
        <Icon
          className="mobile-menu"
          iconURL={colorMode === 'dark' ? darkLetterXURL : letterXURL}
          alter="letter x image"
          onToggleClick={onToggleClick}
        />
      </IconPosition>
    </MobileMenuWrapper>
  )
}

export default MobileMenu
