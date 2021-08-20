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

import { gql } from '@apollo/client'
import client from '../apollo-client'

const experienceCards = [
  {
    company: 'Beazer Software',
    role: 'UI/UX Designer & Developer',
    pills: [
      'UI/UX',
      'Design/Dev Workflows',
      'Angular',
      'React',
      'Framer',
      'Storybook',
      'NX',
    ],
    dates: 'Jan 2021 - Present',
    img: '',
    side: 'left',
    description: 'Upskilling on technologies and learning new stacks.',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Senior Full Stack Web Developer',
    pills: ['Angular', 'MongoDB', 'Node', 'AWS'],
    description:
      'Responsible for building, maintaining and developing Cloud web applications with new features. Design Lead.',
    dates: 'Oct 2017 - Oct 2020',
    img: '',
    side: 'right',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Full Stack Web Developer',
    pills: ['UI/UX Prototyping', 'AngularJS', 'MongoDB', 'Node'],
    dates: 'Oct 2014 - Sep 2017',
    img: '',
    side: 'right',
    description:
      'Built and maintained a new MEAN stack application to manage iOS app data. Designed the UI/UX for iOS and Web applications.',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Frontend Web Developer',
    pills: ['HTML', 'CSS', 'Javascript', 'Sketch', 'Adobe'],
    dates: 'Sep 2012 - Sep 2014',
    img: '',
    side: 'right',
    description:
      'Built and maintained vanilla js web application for managing HTML5 app.',
  },
  {
    company: 'Marketpoint Europe Ltd',
    role: 'Graphic & Web Designer',
    pills: ['HTML', 'CSS', 'Adobe'],
    dates: 'Aug 2011 - Sep 2012',
    img: '',
    side: 'left',
    description:
      'Designed & built a marketing website for new software product. Designed print material for marketing materials.',
  },
]
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

      {/* <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      /> */}

      {/* <div> */}
      <Hero />
      {/* <Interests /> */}
      <About />
      <Experience cards={experienceCards} />
      {/* <Projects data={projects} /> */}
      <Skills />
      <Contact />
      {/* </div> */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
