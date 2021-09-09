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

  // state
  const [state, setState] = useState(false)
  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, -300], [0, -200])
  const { isTabletOrMobile } = useResponsive()

  return (
    <>
      <div className="border-0 border-green-500 ">
        <motion.div
          layout
          className="container mt-10 "
          initial={{ y: -100, x: 0 }}
          animate={{ y: 30 }}
          style={{ y: y1, x: 0 }}
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
            <div className="">
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
        {!isTabletOrMobile && <Wave />}
      </div>
    </>
  )
}
