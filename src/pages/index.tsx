import Head from 'next/head'
import React from 'react'
import packageInfo from '../../package.json'
import { motion, useViewportScroll } from 'framer-motion'

import { Hero } from '../components/portfolio/Hero'
import { Interests } from '../components/portfolio/Interests'
// import { Recommendations } from '../components/portfolio/Recommendations'
import { Experience } from '../components/portfolio/Experience'

// import { Me } from '../components/portfolio/Me'
// import { Eudaimonia } from '../components/portfolio/Eudaimonia'

import { Projects } from '../components/portfolio/Projects'
import { Skills } from '../components/portfolio/Skills'
import { About } from '../components/portfolio/About'
import { Contact } from '../components/portfolio/Contact'

const experienceCards = [
  {
    company: 'Pexip',
    role: 'Software Engineer',
    pills: [
      'Typescript',
      'Angular',
      'React',
      'Storybook',
      'Figma',
    ],
    dates: 'Jan 2022 - Present',
    img: '',
    side: 'right',
    description: 'Working in the clients team building Angular & React apps for the Inifinity video platform.',
  },
  {
    company: 'Beazer Software',
    role: 'Contract Web Developer',
    pills: [
      'Typescript',
      'Angular',
      'React',
      'NextJS',
      'Storybook',
      'JAM Stack'
    ],
    dates: 'Jan 2021 - Dec 2021',
    img: '',
    side: 'left',
    description: 'Contracted to work as part of a full-stack team building a bespoke web application',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Full Stack Web Developer',
    pills: ['Angular', 'MongoDB', 'Node', 'AWS', 'Sketch'],
    dates: 'Oct 2014 - Nov 2020',
    img: '',
    side: 'right',
    description:
      'Part of a team building a B2B SASS web app used at tradeshows & events globally'
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Frontend Web Developer',
    pills: ['HTML', 'CSS', 'Javascript', 'Sketch', 'Adobe'],
    dates: 'Sep 2012 - Sep 2014',
    img: '',
    side: 'right',
    description:
      'Built and maintained vanilla js web applications ',
  },
  {
    company: 'Marketpoint Europe Ltd',
    role: 'Graphic & Web Designer',
    pills: ['HTML', 'CSS', 'jquery', 'Adobe CS'],
    dates: 'Aug 2011 - Sep 2012',
    img: '',
    side: 'left',
    description:
    'Responsible for designing & building marketing websites for internal SASS products',
  },
]
export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const navProps = [
    { id: 1, label: 'Minimal', selected: true },
    { id: 2, label: 'Sporty', selected: false },
    { id: 3, label: 'Photographic', selected: false },
  ]

  return (
    <>
      <Head>
        <title>
          Dave Beazer | UI/UX Software Engineer for hire
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav props={navProps} /> */}

      <div>
        <Hero />
        <About />
        <Experience cards={experienceCards} />
        <Skills />
        <Contact />
      </div>
    </>
  )
}
