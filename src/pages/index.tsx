import { useEffect } from 'react'

import {
  About,
  Activities,
  Divider,
  Educations,
  Experiences,
  Layout,
  Projects,
  SEO,
  Skills,
} from '../components'
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

    return observer.disconnect
  }, [])

  return (
    <Layout>
      <SEO title="김찬연 기술 이력서" />
      <About />
      <Divider classes={{ hr: showOnScroll }} />
      <Experiences />
      <Divider classes={{ hr: showOnScroll }} />
      <Projects />
      <Divider classes={{ hr: showOnScroll }} />
      <Skills />
      <Divider classes={{ hr: showOnScroll }} />
      <Activities />
      <Divider classes={{ hr: showOnScroll }} />
      <Educations />
    </Layout>
  )
}

export default Home
