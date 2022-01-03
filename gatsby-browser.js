import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import { RecoilRoot } from 'recoil'

export const wrapRootElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
