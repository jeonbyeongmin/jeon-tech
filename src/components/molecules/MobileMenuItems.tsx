import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Text from 'components/atoms/Text'

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
  return (
    <MobileMenuItemsWrapper className={className}>
      <Text className="mobile">글</Text>
      <Text className="mobile">소개</Text>
      <Text className="mobile">모드 변경하기</Text>
    </MobileMenuItemsWrapper>
  )
}

export default MobileMenuItems
