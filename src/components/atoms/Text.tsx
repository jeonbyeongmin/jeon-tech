import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

type TextProps = {
  children: ReactNode
  className?: string
}

const TextStyle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.mobile {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;

    &:hover {
      border: none;
    }
  }
`

const Text: FunctionComponent<TextProps> = ({ children, className }) => {
  return <TextStyle className={className}>{children}</TextStyle>
}

export default Text
