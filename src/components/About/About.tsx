import { useMemo } from 'react'
import { Box, Flex, Heading, Link, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { Contact } from '../../types'
import { isEmail, splitParagraph } from '../../utils'

function About() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about {
            title
            content
            contacts {
              name
              emoji
              href
            }
          }
        }
      }
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const paragraphs: string[] = useMemo(() => splitParagraph(data.site.siteMetadata.about.content), [data.site.siteMetadata.about])

  const contacts: Contact[] = useMemo(() => data.site.siteMetadata.about.contacts, [data.site.siteMetadata.about.contacts])

  return (
    <Flex as="section" sx={{ flexDirection: ['column', 'column', 'row'], alignItems: ['center', 'center', 'flex-start'] }}>
      <Box sx={{ pr: [0, 0, 4] }}>
        <Heading as="h2" variant="h2" sx={{ mb: 4, color: 'text' }}>{data.site.siteMetadata.about.title}</Heading>
        {paragraphs.map((paragraph, index) => <Text key={index} as="p" variant="p" dangerouslySetInnerHTML={{ __html: paragraph }} />)}
        <ul sx={{ my: 3 }}>
          {contacts.map(contact => (
            <Flex key={contact.name} as="li" sx={{ my: 2 }}>
              <i sx={{ mr: 1 }}>{contact.emoji}</i>
              <strong>
                <Link variant="anchor" href={contact.href}>{isEmail(contact.href) ? contact.href : contact.name}</Link>
              </strong>
            </Flex>
          ))}
        </ul>
      </Box>
      <div
        sx={{
          order: [-1, -1, 0],
          overflow: 'hidden',
          width: 'full',
          maxWidth: '380px',
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
