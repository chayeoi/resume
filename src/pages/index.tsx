import { Divider } from '@theme-ui/components'

import { About, Layout, SEO } from '../components'

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Divider />
    </Layout>
  )
}

export default Home
