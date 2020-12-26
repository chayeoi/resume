import React from 'react'

import { Wrapper } from '../src/components'

function wrapRootElement({ element }: { element: React.ReactNode }) {
  return (
    <Wrapper>
      {element}
    </Wrapper>
  )
}

export default wrapRootElement
