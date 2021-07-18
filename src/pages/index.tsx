import Head from 'next/head'
import React from 'react'
import packageInfo from '../../package.json'
import { motion, useViewportScroll } from 'framer-motion'
import { Nav } from '../components/UI/Nav'

import { Hero } from '../components/portfolio/Hero'
import { Interests } from '../components/portfolio/Interests'
import { Recommendations } from '../components/portfolio/Recommendations'
import { Experience } from '../components/portfolio/Experience'
// import { Me } from '../components/portfolio/Me'
// import { Eudaimonia } from '../components/portfolio/Eudaimonia'

import { Skills } from '../components/portfolio/Skills'
import { About } from '../components/portfolio/About'
import { Contact } from '../components/portfolio/Contact'

export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const props = [
    { id: 1, label: 'Minimal', selected: true },
    { id: 2, label: 'Sporty', selected: false },
    { id: 3, label: 'Photographic', selected: false },
  ]

  return (
    <>
      <Head>
        <title>Home {packageInfo.version}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav props={props} />

      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />

      <div>
        <Hero />
        <Interests />
        <Skills />
        <Experience />
        <Recommendations />
        <About />
        <Contact />
      </div>
    </>
  )
}

function getGreeting() {
  return [
    '<span class="text-3xl">Oi oi!</span>',
    // '<span class="text-3xl">Hello!</span>',
    // '<span class="text-3xl">Worrrrrd</span>',
    // '<span class="text-3xl">G\'day!</span>',
    // '<span class="text-3xl">Hi!</span>',
    // '<span class="text-3xl">Bonjour!</span>',
    // '<span class="text-3xl">Wagwan</span>',
    // '<span class="text-3xl">Jambo!</span>',
    '<span class="text-3xl">Ello ello...</span>',
  ]
}
