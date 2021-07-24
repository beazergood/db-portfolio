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
      <div className="w-full border-0 my-32 border-blue-500 container p-4 mx-auto">
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

        <h1 className="text-2xl text-black">Raison d'etre</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="mt-10 text-3xl">
              I am passionate about bringing peoples products and ideas to life
              on the web. I relish at the task of taking a concept and
              transforming it into a digital experience millions of others can
              use and enjoy. ✌️
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-3xl mt-10"></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <div className="col-span-1 p-5 bg-mintee flex-col rounded-2xl">
            <p className=" font-bold text-white">UI</p>
            <p className="text-5xl py-3 text-mintee-dark">Simple & Snappy</p>
            <p className="text-3xl text-white">
              Striving for simplicity and speed helps direct my decision making
              when sketching ideas or prototyping. It's important to not get
              carried away!
            </p>
          </div>
          <div className="col-span-1 p-5 bg-purp flex-col rounded-2xl">
            <p className="font-bold text-white">UX</p>
            <p className="text-5xl py-3 text-purp-dark">
              Intuitive & Accessible
            </p>
            <p className="text-3xl text-white">
              I try to ensure my work is easy to use and accessible across all
              device dimensions
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
