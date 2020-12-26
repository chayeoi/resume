import { Divider } from '@theme-ui/components'

import { About, Experiences, Layout, SEO } from '../components'

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Divider />
      <Experiences />
    </Layout>
  )
}

export default Home
