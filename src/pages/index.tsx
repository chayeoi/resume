import { Divider } from '@theme-ui/components'

import { About, Experiences, Layout, Projects, SEO } from '../components'

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Divider />
      <Experiences />
      <Divider />
      <Projects />
    </Layout>
  )
}

export default Home
