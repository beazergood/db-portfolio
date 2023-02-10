import Head from 'next/head'
import React from 'react'

import { Hero } from '../components/portfolio/Hero'
import { Experience } from '../components/portfolio/Experience'
import { Skills } from '../components/portfolio/Skills'
import { About } from '../components/portfolio/About'
import { Contact } from '../components/portfolio/Contact'
import { Interests } from '../components/portfolio/Interests'

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
        <Skills />
        <Interests />
        <Contact />
    </>
  )
}
