import { Flex } from '@theme-ui/components'

import Navbar from '../Navbar'

function Header() {
  return (
    <Flex p={2} as="header">
      <Navbar sx={{ marginLeft: 'auto' }} />
    </Flex>
  )
}

export default Header
