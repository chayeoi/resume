import { Divider } from '@theme-ui/components'

import { About, Activities, Experiences, Layout, Projects, SEO, Skills } from '../components'

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Divider />
      <Experiences />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Activities />
    </Layout>
  )
}

export default Home
