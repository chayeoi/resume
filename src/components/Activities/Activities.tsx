import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'

import { showOnScroll } from '../../constants'
import { Activity } from '../../types'
import { splitParagraph } from '../../utils'

function Activities() {
  const data = useStaticQuery(query)

  const activities: Activity[] = useMemo(() => data.site.siteMetadata.activities.content, [data.site.siteMetadata.activities.content])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2" className={showOnScroll}>
        {data.site.siteMetadata.activities.title}
      </Heading>
      <ul>
        {activities.map(activity => (
          <Flex
            key={activity.name}
            as="li"
            mb={[3, 0]}
            sx={{ flexDirection: ['column', 'column', 'row'] }}
          >
            <Box mb={[2, 0]} pr={[0, 0, 3]} sx={{ flexBasis: '25%' }}>
              <Heading as="h3" variant="h3" className={showOnScroll}>
                {activity.name}
              </Heading>
              <div sx={{ my: 2, color: 'gray', fontStyle: 'italic' }} className={showOnScroll}>
                <Text as="em" sx={{ fontWeight: 'bold' }}>{activity.role}</Text>
                <span>⏤</span>
                <Text as="em">{activity.period}</Text>
              </div>
            </Box>
            <Box pl={[0, 0, 3]} sx={{ flexBasis: '75%' }}>
              {splitParagraph(activity.description).map((paragraph, index) => (
                <Text
                  key={index}
                  as={paragraph.startsWith('<ul>') ? 'div' : 'p'}
                  variant="p"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  sx={{
                    '& ul': { pl: 4, listStyle: 'disc' },
                    '& li': { my: 2 },
                    '& a': { textDecoration: 'underline' },
                  }}
                  className={showOnScroll}
                />
              ))}
            </Box>
          </Flex>
        ))}
      </ul>
    </section>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        activities {
          title
          content {
            name
            role
            period
            description
          }
        }
      }
    }
  }
`

export default Activities
