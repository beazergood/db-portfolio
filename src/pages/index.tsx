import Head from 'next/head'
import React from 'react'

import { Hero } from '../components/portfolio/Hero'
import { Experience } from '../components/portfolio/Experience'
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
    description: 'Working in a cross-functional team building Angular & React apps for the Pexip Inifinity video platform.',
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
    description: 'Contracted to work as part of a full-stack team migrating a bespoke web application to Angular',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Full Stack Web Developer',
    pills: ['Angular', 'MongoDB', 'Node', 'AWS', 'Sketch'],
    dates: 'Oct 2014 - Nov 2020',
    img: '',
    side: 'right',
    description:
      'Web developer building a B2B SASS platform used at tradeshows & events globally'
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Frontend Web Developer',
    pills: ['HTML', 'CSS', 'Javascript', 'Sketch', 'Adobe'],
    dates: 'Sep 2012 - Sep 2014',
    img: '',
    side: 'right',
    description:
      'Built and maintained vanilla js web applications for in-house and client usage',
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

  return (
    <>
      <Head>
        <title>
          Dave Beazer | UI/UX Software Engineer for hire
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
