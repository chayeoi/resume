import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'

import { showOnScroll } from '../../constants'
import { Education } from '../../types'
import { splitParagraph } from '../../utils'

function Educations() {
  const data = useStaticQuery(query)

  const educations: Education[] = useMemo(() => data.site.siteMetadata.educations.content, [data.site.siteMetadata.educations.content])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2" className={showOnScroll}>
        {data.site.siteMetadata.educations.title}
      </Heading>
      <ul>
        {educations.map(education => (
          <Flex
            key={education.name}
            as="li"
            mb={[3, 0]}
            sx={{ flexDirection: ['column', 'column', 'row'] }}
            className={showOnScroll}
          >
            <Box mb={[2, 0]} pr={[0, 0, 3]} sx={{ flexBasis: '25%' }}>
              <Heading as="h3" variant="h3" className={showOnScroll}>
                {education.name}
              </Heading>
              <div sx={{ my: 2, color: 'gray', fontStyle: 'italic' }} className={showOnScroll}>
                <Text as="em">{education.period}</Text>
              </div>
            </Box>
            <Box pl={[0, 0, 3]} sx={{ flexBasis: '75%' }}>
              {splitParagraph(education.description).map((paragraph, index) => (
                <Text key={index} as="p" variant="p" dangerouslySetInnerHTML={{ __html: paragraph }} className={showOnScroll} />
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
        educations {
          title
          content {
            name
            period
            description
          }
        }
      }
    }
  }
`

export default Educations
