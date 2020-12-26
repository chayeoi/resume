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
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, chayeoi
        </footer>
      </div>
    </Container>
  )
}

export default Layout
