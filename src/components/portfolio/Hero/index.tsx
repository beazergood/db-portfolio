import React, { useState, useEffect } from 'react'
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'
import { Wave } from '../../UI/Wave'
import { motion, useSpring, useTransform } from 'framer-motion'
import { VennDiagram } from '../../UI/VennDiagram'

export interface HeroProps {
  title?: string
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

  // stae
  const [state, setState] = useState(false)
  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  return (
    <>
      <div className="h-screen w-full border-0 border-yellow-200">
        <div className="container mt-10">
          <h3 className="font-semibold font-sans text-black">Dave Beazer</h3>
          <svg height="10" width="100" className="my-2">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="hsl(287, 47%, 67%)"
              strokeWidth="6"
            />
          </svg>
          <h1 className="text-2xl text-black">
            UI/UX Designer &amp; Developer
          </h1>
        </div>
      </div>
      <motion.div
        className="absolute"
        style={{ top: 200, bottom: 100, translateY: up }}
      >
        <Wave />
      </motion.div>
      <motion.div
        className="-mt-20 text-center"
        style={{ opacity: fadeOut, x }}
      >
        <ArrowLeft width="20" height="20" />
        <p>Drag left</p>
      </motion.div>
      <motion.div
        style={{ opacity: fadeIn }}
        className="bg-purp absolute top-0 left-0 right-0 bottom-0 z-0"
      ></motion.div>
      <motion.div
        className="cursor-move relative mt-10 ml-10 w-1/2 p-10 z-10  bg-purp-dark bg-opacity-80 rounded-xl flex-col"
        style={{ top: -480, left: 240, x, scale }}
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
      </motion.div>
      {/* {state.toString()} */}
      {state && <VennDiagram />}
    </>
  )
}
