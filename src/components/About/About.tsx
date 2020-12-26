import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

function About() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about {
            title
            content
          }
        }
      }
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const paragraphs: string[] = useMemo(() => data.site.siteMetadata.about.content
    .split(/\n\s+/)
    .filter((value: string) => value),
  [data.site.siteMetadata.about])

  return (
    <Flex as="section" sx={{ flexDirection: ['column', 'column', 'row'], alignItems: ['center', 'center', 'flex-start'] }}>
      <Box sx={{ pr: [0, 0, 3] }}>
        <Heading as="h2" variant="h2">{data.site.siteMetadata.about.title}</Heading>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} as="p" variant="p" dangerouslySetInnerHTML={{ __html: paragraph }} />))}
      </Box>
      <div
        sx={{
          order: [-1, -1, 0],
          overflow: 'hidden',
          width: 'full',
          maxWidth: '420px',
          marginBottom: [5, 5, 0],
          borderRadius: 'full',
        }}
      >
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt={data.site.siteMetadata.author}
          sx={{ width: 'full', height: 'full' }}
        />
      </div>
    </Flex>
  )
}

export default About
