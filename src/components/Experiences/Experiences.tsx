import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'

import { Experience } from '../../types'
import { splitParagraph } from '../../utils'

function Experiences() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          experiences {
            title
            content {
              name
              position
              period
              description
            }
          }
        }
      }
    }
  `)

  const experiences: Experience[] = useMemo(() => data.site.siteMetadata.experiences.content, [data.site.siteMetadata.experiences.content])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2">
        {data.site.siteMetadata.experiences.title}
      </Heading>
      <ul>
        {experiences.map(experience => (
          <Flex key={experience.name} as="li" mb={[3, 0]} sx={{ flexDirection: ['column', 'column', 'row'] }}>
            <Box mb={[2, 0]} pr={[0, 0, 3]} sx={{ flexBasis: '25%' }}>
              <Heading as="h3" variant="h3">
                {experience.name}
              </Heading>
              <div sx={{ my: 2, color: 'gray', fontStyle: 'italic' }}>
                <Text as="em" sx={{ fontWeight: 'bold' }}>{experience.position}</Text>
                <span>⏤</span>
                <Text as="em">{experience.period}</Text>
              </div>
            </Box>
            <Box pl={[0, 0, 3]} sx={{ flexBasis: '75%' }}>
              {splitParagraph(experience.description).map((paragraph, index) => (
                <Text key={index} as="p" variant="p" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </Box>
          </Flex>
        ))}
      </ul>
    </section>
  )
}

export default Experiences
