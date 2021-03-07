import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

type Props = {
  description?: string
  image?: string
  lang?: string
  link?: { rel: string; href: string; }[]
  meta?: ({ name: string; content: string; } | { property: string; content: string; })[]
  title?: string
  type?: 'website' | 'article'
  url?: string
}

function SEO({
  description = '',
  image = '',
  lang = 'ko',
  link = [],
  meta = [],
  title,
  type = 'website',
  url = '',
}: Props) {
  const { site, favicon } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image
  const metaUrl = url || site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle={site.siteMetadata.title}
      title={title}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
        {
          rel: 'canonical',
          href: url,
        },
      ].concat(link)}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'author',
          content: site.siteMetadata.author,
        },
        // {
        //   property: 'fb:app_id',
        //   content: process.env.GATSBY_FB_APP_ID,
        // },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:locale',
          content: 'ko_KR',
        },
        {
          name: 'application-name',
          content: site.siteMetadata.title,
        },
        {
          name: ' apple-mobile-web-app-title',
          content: site.siteMetadata.title,
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
        {
          name: 'theme-color',
          content: '#fff',
        },
      ].concat(meta)}
    />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        author
        siteUrl
      }
    }
    favicon: file(relativePath: { eq: "logo.png" }) {
      publicURL
    }
  }
`

export default SEO
