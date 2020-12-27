import { useEffect } from 'react'
import { Divider } from '@theme-ui/components'

import { About, Activities, Educations, Experiences, Layout, Projects, SEO, Skills } from '../components'
import { showOnScroll, visible } from '../constants'

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visible)
        } else {
          entry.target.classList.remove(visible)
        }
      })
    })

    const targets = document.querySelectorAll(`.${showOnScroll}`)

    targets.forEach((target) => {
      observer.observe(target)
    })
  }, [])

  return (
    <Layout>
      <SEO title="김찬연 기술 이력서" />
      <About />
      <Divider className={showOnScroll} />
      <Experiences />
      <Divider className={showOnScroll} />
      <Projects />
      <Divider className={showOnScroll} />
      <Skills />
      <Divider className={showOnScroll} />
      <Activities />
      <Divider className={showOnScroll} />
      <Educations />
    </Layout>
  )
}

export default Home
