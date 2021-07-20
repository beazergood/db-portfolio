import React from 'react'
import { motion } from 'framer-motion'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Csswizardry } from '@styled-icons/simple-icons/Csswizardry'
import { FileJson } from '@styled-icons/boxicons-solid/FileJson'
import { Framer } from '@styled-icons/feather/Framer'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Angular } from '@styled-icons/boxicons-logos/Angular'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { Storybook } from '@styled-icons/simple-icons/Storybook'
import { Vuejs } from '@styled-icons/boxicons-logos/Vuejs'
import { Graphql } from '@styled-icons/simple-icons/Graphql'
import ReactTooltip from 'react-tooltip'

export interface HeroProps {
  title?: string
}

export const Skills: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <motion.div className="w-full border-2  py-10 my-10  border-green-200 container">
        <h3 className="font-semibold font-sans text-black">Skills</h3>
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
        <h1 className="text-2xl text-black">Skills Subheader</h1>
        <div className="flex flex-col mx-auto border- border-red-300">
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <Typescript width="64" height="64" data-tip="Typescript" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Html5 width="64" height="64" data-tip="HTML" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Csswizardry width="64" height="64" data-tip="CSS" />
              <ReactTooltip />
            </div>
          </div>
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <FileJson width="64" height="64" data-tip="JSON" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Mongodb width="64" height="64" data-tip="Mongo DB" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Nodejs width="64" height="64" data-tip="NodeJS" />
              <ReactTooltip />
            </div>
          </div>
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <Angular width="64" height="64" data-tip="Angular" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <ReactLogo width="64" height="64" data-tip="React" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Vuejs width="64" height="64" data-tip="Vue" />
              <ReactTooltip />
            </div>
          </div>
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <Storybook width="64" height="64" data-tip="Storybook" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Framer width="64" height="64" data-tip="Framer" />
              <ReactTooltip />
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Graphql width="64" height="64" data-tip="Graph QL" />
              <ReactTooltip />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
