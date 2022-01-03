import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

type TextProps = {
  children: ReactNode
  className?: string
  onToggleClick?: React.MouseEventHandler<HTMLImageElement>
}

const TextWrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.mobile {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;

    &:hover {
      border: none;
    }
  }
`

const Text: FunctionComponent<TextProps> = ({
  children,
  className,
  onToggleClick,
}) => {
  return (
    <TextWrapper className={className} onClick={onToggleClick}>
      {children}
    </TextWrapper>
  )
}

export default Text
