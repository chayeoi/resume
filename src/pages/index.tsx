import { Divider } from '@theme-ui/components'

import { About, Activities, Educations, Experiences, Layout, Projects, SEO, Skills } from '../components'

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
      <Divider />
      <Educations />
    </Layout>
  )
}

export default Home
