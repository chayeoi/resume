import React from 'react'
import { Global } from '@emotion/core'

import { global } from '../styles'

type Props = {
  children: React.ReactNode;
}

function Wrapper({ children }: Props) {
  return (
    <>
      <Global styles={global} />
      {children}
    </>
  )
}

export default Wrapper
