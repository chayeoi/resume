import { useMemo } from 'react'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { showOnScroll } from '../../constants'
import { Project } from '../../types'
import { splitParagraph } from '../../utils'

function Projects() {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        projects: {
          title: string
          content: Project[]
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
          projects {
            title
            content {
              name
              period
              value
              description
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/classting-school|classting-ai|personal-blog|translation/"}}) {
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

  const projects: Project[] = useMemo(() => data.site.siteMetadata.projects.content, [data.site.siteMetadata.projects.content])

  const childImageSharps: any = useMemo(() => data.allFile.edges.reduce((acc, cur) => ({
    ...acc,
    [cur.node.name]: cur.node.childImageSharp,
  }), {}), [data.allFile.edges])

  return (
    <section sx={{ variant: 'styles.section' }}>
      <Heading as="h2" variant="h2" className={showOnScroll}>
        {data.site.siteMetadata.projects.title}
      </Heading>
      <ul>
        {projects.map(project => (
          <Flex
            key={project.name}
            as="li"
            mb={[3, 3, 0]}
            sx={{ flexDirection: ['column', 'column', 'row'] }}
          >
            <Box mb={[3, 3, 0]} pr={[0, 0, 3]} sx={{ flexBasis: '45%' }}>
              <Heading as="h3" variant="h3" className={showOnScroll}>
                {project.name}
              </Heading>
              <div sx={{ my: 2, color: 'gray', fontStyle: 'italic' }} className={showOnScroll}>
                <Text as="em">{project.period}</Text>
              </div>
              <Box>
                {splitParagraph(project.description).map((paragraph, index) => (
                  <Text
                    key={index}
                    as={paragraph.startsWith('<ul>') ? 'div' : 'p'}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                    variant="p"
                    sx={{
                      '& ul': { pl: 4, listStyle: 'disc' },
                      '& li': { my: 2 },
                      '& a': { textDecoration: 'underline' },
                    }}
                    className={showOnScroll}
                  />
                ))}
              </Box>
            </Box>
            <Box pl={[0, 0, 3]} my={[0, 0, 4]} sx={{ flexBasis: '55%' }}>
              <Image fluid={childImageSharps[project.value].fluid} alt={project.name} className={showOnScroll} />
            </Box>
          </Flex>
        ))}
      </ul>
    </section>
  )
}

export default Projects
