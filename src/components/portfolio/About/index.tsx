import React from 'react'
import { motion } from 'framer-motion'
import { VennDiagram } from '../../UI/VennDiagram'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export interface AboutProps {
  title?: string
}

export const About: React.FC<AboutProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full my-10 container p-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-1 col-start-1 md:col-span-3">
            <div className="flex flex-row mb-10">
              <Image
                src={'/images/me.jpg'}
                width="80px"
                height="80px"
                className="rounded-full m-10"
              />

              <div className="w-full md:w-3/5 ml-5 px-10 rounded-xl">
                <h1 className="text-4xl pt-3">
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
            </div>
          </div>
          <div className="col-start-1 col-span-3">
            <p className="text-xl">
              I am passionate about bringing peoples products and ideas to life
              on the web. I relish at the task of taking a concept and
              transforming it into a digital experience others can use and
              enjoy.
            </p>
          </div>
          <div className="col-span-1 col-start-1 md:col-end-7 md:col-span-2">
            <VennDiagram />
          </div>

          <motion.div
            className="col-start-1 col-span-3 p-5 bg-purp flex-col rounded-2xl hover:shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p className="font-bold text-white">UI</p>
            <p className="text-5xl py-3 text-purp-dark">Design &amp; Build</p>
            <p className="text-2xl text-white">
              The lines between designer and developer are definitely blurring
              when it comes to user interfaces, I welcome it with open arms!
            </p>
          </motion.div>
          <motion.div
            className="col-start-1 col-span-3 md:col-start-4 p-5 bg-mintee flex-col rounded-2xl hover:shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p className="font-bold text-white">UX</p>
            <p className="text-5xl py-3 text-mintee-dark">
              Intuitive &amp; Accessible
            </p>
            <p className="text-2xl text-thyme">
              I strive to always be adding value to my work by ensuring the end
              user experience is both performant and accessible across the
              entire spectrum of users and devices.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

function getGreeting() {
  return [
    // '<span class="text-3xl">Oi oi!</span>',
    '<span class="text-3xl">Hello!</span>',
    // '<span class="text-3xl">Worrrrrd</span>',
    // '<span class="text-3xl">G\'day!</span>',
    '<span class="text-3xl">Hi!</span>',
    '<span class="text-3xl">Bonjour!</span>',
    // '<span class="text-3xl">Wagwan</span>',
    // '<span class="text-3xl">Jambo!</span>',
    '<span class="text-3xl">Ello ello...</span>',
  ]
}
