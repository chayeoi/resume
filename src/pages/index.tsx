import { Divider } from '@theme-ui/components'

import { About, Experiences, Layout, Projects, SEO, Skills } from '../components'

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
    </Layout>
  )
}

export default Home
