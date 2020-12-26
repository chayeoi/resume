import React from 'react'
import { Container } from '@theme-ui/components'

import Header from '../Header'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <main sx={{ px: [3, 4] }}>{children}</main>
    </Container>
  )
}

export default Layout
