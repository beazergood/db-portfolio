import React from 'react'
import { motion } from 'framer-motion'
import { VennDiagram } from '../../UI/VennDiagram'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import ReactTooltip from 'react-tooltip'
import useResponsive from '../../../hooks/responsive'

export interface AboutProps {
  title?: string
}

export const About: React.FC<AboutProps> = () => {
  const {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  } = useResponsive()

  return (
    <>
      <div className="my-10 px-4 container mx-auto flex-col">
        <div className="flex flex-col md:flex-row my-10">
          {isDesktopOrLaptop && (
            <img
              src={'/images/me.jpg'}
              width="90px"
              height="90px"
              className="rounded-full"
            />
          )}
          <div className="md:ml-10">
            <h1 className="text-6xl pt-3 text-left">
              <Typewriter
                options={{
                  strings: getGreeting(),
                  autoStart: true,
                  cursor: '<span class="text-3xl">|</span>',
                  cursorClassName: 'text-4xl',
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <ReactTooltip />
            <p className="text-xl">
              I'm Dave 👋 a <strong>UI/UX Designer &amp; Developer</strong> from{' '}
              <span
                className="text-yellow-400 font-medium"
                data-tip="Land of eternal sunshine &amp; sarcasm 😎"
              >
                England.
              </span>
              Welcome to my portfolio! This is something I've always wanted to
              build to showcase my work.
            </p>
            <p className="text-xl my-4">
              {' '}
              I'm passionate about bringing peoples products and ideas to life
              on the web and crafting well-rounded{' '}
              <strong>user experiences</strong>. I specialise in{' '}
              <strong>user interface</strong> design and development using{' '}
              <strong>web technologies</strong> I have an educational background
              in business, photography and design. I enjoy the tasks and
              challenges faced when taking a concept or idea and transforming it
              into a digital experience others can use and enjoy.
            </p>
            <p className="text-xl my-4">
              Recently I've been learning some new technologies and fully
              embracing the JAMstack to build <em>lightning fast web apps.</em>
            </p>
          </div>
          <div className="overflow-x-hiden md:w-1/4 mx-auto">
            <VennDiagram />{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="p-5 bg-purp flex-col rounded-2xl hover:shadow-lg col-span-1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p className="font-bold text-purp-dark">UI</p>
            <p className="text-4xl py-3" style={{ color: '#EEC2FA' }}>
              Design &amp; Build
            </p>
            <p className="text-2xl text-purp-dark">
              There's a lot of different hats to wear when traversing design and
              development. I am always working on improving my workflows between
              the two disciplines.
            </p>
          </motion.div>
          <motion.div
            className="p-5 bg-mintee flex-col rounded-2xl hover:shadow-lg col-span-1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p className="font-bold text-thyme">UX</p>
            <p className="text-4xl py-3 text-mintee-dark">
              Intuitive &amp; Accessible
            </p>
            <p className="text-2xl text-thyme">
              I strive to always be adding value to my work by ensuring the end
              user experience is both performant and accessible across the
              spectrum of users and devices.
            </p>
          </motion.div>
        </div>{' '}
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
