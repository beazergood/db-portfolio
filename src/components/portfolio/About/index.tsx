import React from 'react'
import { motion } from 'framer-motion'

export interface AboutProps {
  title?: string
}

export const About: React.FC<AboutProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full border-0 my-32 border-blue-500 container">
        <h3 className="font-semibold font-sans text-black">About</h3>
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

        <h1 className="text-2xl text-black">Areas of Expertise</h1>
        <p className="mt-20 text-3xl">
          I am passionate about bringing products with a strong visual identity
          to life on the web. I find it helps digital brands and companies move
          their web experiences to the next level and increase user engagement
          and enjoyment.
        </p>
        <p className="text-3xl mt-10">
          The end user is the most important aspect to all of my creations and I
          endeavour to spark a little bit of joy into their day.
        </p>

        <div className="flex flex-row w-full border-0 border-purp mt-20">
          <div className="flex w-1/2 m-5 p-5 bg-mintee flex-col rounded-2xl">
            <p className=" font-bold text-white">UI</p>
            <p className="text-5xl py-3 text-mintee-dark">Simple & Snappy</p>
            <p className="text-3xl text-white">
              Striving for simplicity and speed helps direct my decision making
              when sketching ideas or prototyping. It's important to not get
              carried away!
            </p>
          </div>
          <div className="flex w-1/2 m-5 p-10 bg-purp flex-col rounded-2xl">
            <p className="font-bold text-white">UX</p>
            <p className="text-5xl py-3 text-purp-dark">
              Polished & Considered
            </p>
            <p className="text-3xl text-white">
              I try to learn as much as I can about the problems I solve in
              order to arrive at a solution that doesn't disappoint.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
