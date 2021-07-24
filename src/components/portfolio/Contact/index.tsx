import React from 'react'
import { motion } from 'framer-motion'

export interface ContactProps {
  title?: string
}

export const Contact: React.FC<ContactProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full border- mx-auto px-10  border-grey-200">
        <motion.div className="mt-10 container">
          <h1 className="text-2xl text-black payton-one">
            Let's work together
          </h1>
          <div className=" text-center mt-10 text-xl">
            You can reach me via email at hi[at]davebeazer.dev
          </div>
        </motion.div>
      </div>
      <div className="absolute right-0 w-100 border-2 border-red-50">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          width="1440px"
          height="300px"
          preserveAspectRatio="none"
          className="border- border-purp-dark "
          style={{ right: 0, position: 'absolute' }}
        >
          <motion.path
            d="M 0.249 291.84 L 26.944 291.84 C 53.54 291.84 107.23 291.84 160.221 264.784 C 213.512 238.133 267.203 183.413 320.194 172.976 C 373.484 162.133 427.175 194.56 480.166 194.56 C 533.457 194.56 587.147 162.133 640.138 178.347 C 693.429 194.56 747.12 259.413 800.111 237.829 C 853.401 215.84 907.092 108.427 960.083 81.067 C 1013.374 53.707 1067.065 108.427 1120.055 145.92 C 1173.346 183.413 1227.037 205.707 1280.028 178.347 C 1333.319 150.987 1387.009 76 1413.005 37.797 L 1440 0 L 1440 292 L 0 292 Z"
            fill="#C2F0CC"
          ></motion.path>
        </motion.svg>
      </div>
    </>
  )
}
