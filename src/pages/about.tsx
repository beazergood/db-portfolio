import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Button } from '../components/UI/Button'
import { version } from '../../package.json'
import { Nav } from '../components/UI/Nav'

export default function About() {
  const props = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: 'about' },
    { id: 3, label: 'Contact', href: 'contact' },
  ]

  return (
    <>
      <Nav props={props} />

      <div className="image-container overflow-hidden">
        <div className="container mx-auto my-40">
          <Head>
            <title>About {version}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <div className="w-full flex flex-row text-white">
            <div className="w-1/2">
              <div className="bg-purp p-5 bg-opacity-60 rounded-full">
                <h1 className="text-left">
                  With thanks to
                  <Typewriter
                    options={{
                      strings: getGreeting(),
                      autoStart: true,
                      cursor: '<span class="text-3xl">|</span>',
                      loop: true,
                    }}
                  />
                </h1>
              </div>
              {/* <motion.div className="bg-opacity-75 rect absolute bg-purp"></motion.div> */}
              
            </div>
          </div>
        </div>
        <style jsx>{`
          .rect {
            /* -webkit-box-shadow: 10px 10px 10px 141px rgb(38, 64, 100); */
            width: 1500px;
            height: 1000px;
            top: 130px;
            z-index: -1;
            /* box-shadow: 111px 111px 0px 111px rgb(38, 64, 100); */

            clip-path: polygon(0% 0%, 0% 0%, 10% 70%, 100% 100%);
          }
          .image-container {
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: -1;
            background: url('/images/me-ont-coast.jpg') top left / cover
              no-repeat;
          }
        `}</style>
      </div>
    </>
  )
}

function getGreeting() {
  return [
    '<span class="text-3xl">Chat GPT</span>',
    '<span class="text-3xl">Google</span>',
    '<span class="text-3xl">AI</span>',
    '<span class="text-3xl">Caffeine</span>',
    '<span class="text-3xl">Youtube</span>',
    '<span class="text-3xl">www</span>',
  ]
}
