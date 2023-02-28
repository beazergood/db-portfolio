import Head from 'next/head'
import React from 'react'

import { Hero } from '../components/portfolio/Hero'
import { About } from '../components/portfolio/About'
import { Experience } from '../components/portfolio/Experience'
import { HobbyProjects } from '../components/portfolio/HobbyProjects'
import { Skills } from '../components/portfolio/Skills'
import { Contact } from '../components/portfolio/Contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>
          Dave Beazer | UI/UX Software Engineer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        <About />
        <Experience/>
        <HobbyProjects />
        <Skills />
        <Contact />
    </>
  )
}
