import React, { useState, useEffect } from 'react'
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown'
import { Wave } from '../../UI/Wave'
import Image from 'next/image'
import useResponsive from '../../../hooks/responsive'

import {
  useViewportScroll,
  motion,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export interface HeroProps {
  title?: string
}

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50,
  },
}

export const Hero: React.FC<HeroProps> = () => {
  const x = useSpring(0, { stiffness: 300, damping: 200 })
  const width = useTransform(x, [-500, 200], [350, 0])
  const scale = useTransform(x, [-100, 0], [1.25, 1])
  const fadeIn = useTransform(x, [-100, 0], [1, 0])
  const fadeOut = useTransform(x, [-60, 0], [0, 1])
  const up = useTransform(x, [-100, 0], [-100, 0])
  const down = useTransform(x, [-100, 0], [100, 0])

  // state
  const [state, setState] = useState(false)
  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, -300], [0, -200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  })

  const { isTabletOrMobile } = useResponsive()

  return (
    <>
      <div className="border-0 border-green-500 ">
        <motion.div
          layout
          className="container mt-10 "
          initial={{ y: -100, x: 20 }}
          animate={{ y: 30 }}
          style={{ y: y1, x: 50 }}
          transition={{ type: 'spring', stiffness: 100, duration: 2 }}
        >
          <div className="flex flex-col md:flex-row text-center">
            <div className="mb-5 mx-auto md:mx-1">
              {isTabletOrMobile && (
                <div>
                  <img
                    src={'/images/me.jpg'}
                    width="90px"
                    height="90px"
                    className="rounded-full"
                  />
                </div>
              )}
            </div>
            <div className="md:ml-10">
              <motion.h3 className="font-semibold font-sans text-gray-2B2B2B payton-one text-3xl md:text-left">
                Dave Beazer
              </motion.h3>
              <motion.svg
                height="10"
                width="100"
                className="my-3 md:mx-1 mx-auto"
              >
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  stroke="hsl(287, 47%, 67%)"
                  strokeWidth="6"
                />
              </motion.svg>
              <h1 className="text-2xl text-gray-2B2B2B md:text-left">
                UI/UX Designer &amp; Developer
              </h1>
            </div>
          </div>
        </motion.div>

        {/* <!-- WAVE HERO GRAPHIC WITH IMAGE--> */}
        {/* <Tablet> */}
        <Wave />
        {/* </Tablet> */}
      </div>
      {/* <motion.div
        className="mt-20 text-center"
        initial={{ y: 10 }}
        animate={{ y: -3 }}
        transition={{
          type: 'spring',
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0.4,
        }}
      >
        <ArrowDown width="20" height="20" fill="#eoeoeo" />
      </motion.div> */}

      {/* <motion.div
        style={{ opacity: fadeIn }}
        className="bg-purp absolute top-0 left-0 right-0 bottom-0 z-0"
      ></motion.div>
      <motion.div
        className="cursor-move relative mt-10 ml-10 w-1/2 p-10 z-10  bg-purp-dark bg-opacity-80 rounded-xl flex-col"
        style={{ top: -80, left: 240, x, scale }}
        drag={'x'}
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.05}
      >
        <h1 className="text-7xl text-purp">
          Hi, I'm Dave. A full-stack web developer from the eternally sunny isle
          of England 🌞
        </h1>
        <motion.div
          className="product-drag-progress block h-2 bg-blue-200 mt-20"
          style={{ width, translateY: down }}
        ></motion.div>
      </motion.div> */}
    </>
  )
}
