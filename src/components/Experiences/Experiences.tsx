import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { showOnScroll } from '../../constants'
import { Experience } from '../../types'
import { splitParagraph } from '../../utils'

function Experiences() {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        experiences: {
          title: string
          content: Experience[]
        }
      }
    }
    allFile: {
      edges: {
        node: {
          name: string
          childImageSharp: any
        }
      }[]
    }
  }>(graphql`
    query {
      site {
        siteMetadata {
          experiences {
            title
            content {
              name
              position
              period
              value
              description
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/^toss$|^classting$/"}}) {
        edges {
          node {
            name
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const experiences: Experience[] = useMemo(() => data.site.siteMetadata.experiences.content, [data.site.siteMetadata.experiences.content])

  const childImageSharps: any = useMemo(() => data.allFile.edges.reduce((acc, cur) => ({
    ...acc,
    [cur.node.name]: cur.node.childImageSharp,
  }), {}), [data.allFile.edges])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2" className={showOnScroll}>
        {data.site.siteMetadata.experiences.title}
      </Heading>
      <ul>
        {experiences.map(experience => (
          <Flex
            key={experience.name}
            as="li"
            mb={[3, 0]}
            sx={{ flexDirection: ['column', 'column', 'row'] }}
          >
            <Box mb={[2, 0]} pr={[0, 0, 3]} sx={{ flexBasis: '25%' }}>
              <Heading as="h3" variant="h3" sx={{ display: 'flex', alignItems: 'center' }} className={showOnScroll}>
                <i sx={{ width: '20px', height: '20px', mr: 1, transform: 'translateY(-2px)' }}>
                  <Image fluid={childImageSharps[experience.value].fluid} alt={experience.name} />
                </i>
                {experience.name}
              </Heading>
              <div sx={{ my: 2, color: 'gray', fontStyle: 'italic' }} className={showOnScroll}>
                <Text as="em" sx={{ fontWeight: 'bold' }}>{experience.position}</Text>
                <span>⏤</span>
                <Text as="em">{experience.period}</Text>
              </div>
            </Box>
            <Box pl={[0, 0, 3]} sx={{ flexBasis: '75%' }}>
              {splitParagraph(experience.description).map((paragraph, index) => (
                <Text key={index} as="p" variant="p" dangerouslySetInnerHTML={{ __html: paragraph }} className={showOnScroll} />
              ))}
            </Box>
          </Flex>
        ))}
      </ul>
    </section>
  )
}

export default Experiences
