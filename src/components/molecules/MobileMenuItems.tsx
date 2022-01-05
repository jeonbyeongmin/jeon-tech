import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Text from 'components/atoms/Text'
import { Link } from 'gatsby'

type MobileMenuItemsProps = {
  className?: string
}

const MobileMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 150px;
`

const MobileMenuItems: FunctionComponent<MobileMenuItemsProps> = ({
  className,
}) => {
  const getInitialColorMode = () => {
    if (typeof window !== 'undefined') {
      return window.__theme
    } else {
      return 'light'
    }
  }

  const [colorMode, setColorMode] = useState(getInitialColorMode())

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode)
    window.localStorage.setItem('color-mode', colorMode)
  }, [colorMode])

  return (
    <MobileMenuItemsWrapper className={className}>
      <Link to="/">
        <Text className="mobile">글</Text>
      </Link>
      <Link to="/profile">
        <Text className="mobile">소개</Text>
      </Link>
      <Text className="mobile" onToggleClick={darkModeHandling}>
        모드 변경하기
      </Text>
    </MobileMenuItemsWrapper>
  )
}

export default MobileMenuItems
