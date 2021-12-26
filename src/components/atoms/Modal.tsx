import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

type ModalProps = {
  children: ReactNode
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 1001;
`

const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>
}

export default Modal
