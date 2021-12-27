import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import MobileMenuItems from 'components/molecules/MobileMenuItems'
import Icon from 'components/atoms/Icon'

type MobileMenuProps = {
  image: IGatsbyImageData
  alter: string
  onToggleClick?: React.MouseEventHandler<HTMLImageElement> | undefined
}

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 1001;
`

const IconPosition = styled.div`
  position: fixed;
  top: 10px;
  right: 0px;
`

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  image,
  alter,
  onToggleClick,
}) => {
  return (
    <MobileMenuWrapper>
      <MobileMenuItems />
      <IconPosition>
        <Icon iconImage={image} alter={alter} onToggleClick={onToggleClick} />
      </IconPosition>
    </MobileMenuWrapper>
  )
}

export default MobileMenu
