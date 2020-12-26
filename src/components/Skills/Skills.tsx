import { useMemo } from 'react'
import { Box, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'

import { Skill } from '../../types'

function Skills() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          skills {
            title
            content {
              name
              items
            }
          }
        }
      }
    }
  `)

  const skills: Skill[] = useMemo(() => data.site.siteMetadata.skills.content, [data.site.siteMetadata.skills.content])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2">
        {data.site.siteMetadata.skills.title}
      </Heading>
      <ul>
        {skills.map(skill => (
          <Box key={skill.name} as="li" mb={[3, 0]}>
            <Heading as="h3" variant="h3">
              {skill.name}
            </Heading>
            <ul sx={{ pl: 4, listStyle: 'disc' }}>
              {skill.items.map((item, index) => (
                <Box key={index} as="li" my={2}>
                  <Text as="p" dangerouslySetInnerHTML={{ __html: item }} />
                </Box>
              ))}
            </ul>
          </Box>
        ))}
      </ul>
    </section>
  )
}

export default Skills
