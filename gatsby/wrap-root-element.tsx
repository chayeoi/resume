import React from 'react'

import Wrapper from '../src/components/wrapper'

function wrapRootElement({ element }: { element: React.ReactNode }) {
  return (
    <Wrapper>
      {element}
    </Wrapper>
  )
}

export default wrapRootElement
