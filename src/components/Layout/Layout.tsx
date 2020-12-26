import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../Header'

import '@fontsource/noto-sans-kr'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title={data.site.siteMetadata?.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, chayeoi
        </footer>
      </div>
    </>
  )
}

export default Layout
