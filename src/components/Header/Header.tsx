import { Box, Flex, Heading } from '@theme-ui/components'
import { graphql, useStaticQuery } from 'gatsby'

import { showOnScroll } from '../../constants'
import Navbar from '../Navbar'

type Props = {
  className?: string
}

function Header(props: Props) {
  const data = useStaticQuery(query)

  return (
    <header {...props}>
      <Flex
        px={[3, 4]}
        py={3}
        sx={{
          width: '100vw',
          position: 'relative',
          left: 'calc(-50vw + 50%)',
        }}
      >
        <Navbar sx={{ marginLeft: 'auto' }} />
      </Flex>
      <Box px={[3, 4]} py={3}>
        <i
          sx={{
            display: 'block',
            marginBottom: 2,
            fontSize: [6, 7, 8],
          }}
          className={showOnScroll}
        >
          👨🏻‍💻
        </i>
        <Heading as="h1" variant="h1" className={showOnScroll}>
          {data.site.siteMetadata.title}
        </Heading>
      </Box>
    </header>
  )
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
