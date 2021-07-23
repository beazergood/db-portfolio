import React, { useState, useEffect } from 'react'
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown'
import { Wave } from '../../UI/Wave'
import { VennDiagram } from '../../UI/VennDiagram'
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

export const Hero: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
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
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  })
  console.log(entry)

  return (
    <>
      <div className="h-screen w-full border-0 border-yellow-200">
        <motion.div
          className="container mt-10"
          initial={{ y: 0, x: -20 }}
          animate={{ y: 30 }}
          style={{ y: y1, x: 20 }}
          transition={{ type: 'spring', stiffness: 100, duration: 2 }}
        >
          <motion.h3 className="font-semibold font-sans text-black payton-one text-xl">
            Dave Beazer
          </motion.h3>
          <motion.svg height="10" width="100" className="my-2">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="hsl(287, 47%, 67%)"
              strokeWidth="6"
            />
          </motion.svg>
          <h1 className="text-2xl text-black ">
            UI/UX Designer &amp; Developer
          </h1>
        </motion.div>
        <motion.div
          className="absolute"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            translateY: up,
          }}
        >
          <Wave />
        </motion.div>
      </div>
      <motion.div
        className="-mt-20 text-center"
        initial={{ y: -10 }}
        animate={{ y: -3 }}
        transition={{
          type: 'spring',
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0.4,
        }}
      >
        <ArrowDown width="20" height="20" />
      </motion.div>

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
      {/* {state.toString()} */}
      {state && <VennDiagram />}
    </>
  )
}
