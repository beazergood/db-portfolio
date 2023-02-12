import React from 'react'
import { motion } from 'framer-motion'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Csswizardry } from '@styled-icons/simple-icons/Csswizardry'
import { FileJson } from '@styled-icons/boxicons-solid/FileJson'
import { Figma } from '@styled-icons/boxicons-logos/Figma'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Angular } from '@styled-icons/boxicons-logos/Angular'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { Storybook } from '@styled-icons/simple-icons/Storybook'
import { Svelte } from '@styled-icons/simple-icons/Svelte'
import ReactTooltip from 'react-tooltip'

export interface SkillsProps {
  title?: string
}

export const Skills: React.FC<SkillsProps> = () => {
  const dialogStyles = {
    top: '50%',
  }

  return (
    <>
      <div className=" py-10 my-10 bg-ice-1">
        <motion.div className="w-full p-4 my-30 py-10 container ">
          <h1 className="text-2xl text-true-blue payton-one">
            Web technologies &amp; tools I work with
          </h1>
          {/* <p className="mt-8 font-medium">Actively engaged with web communities of designers and developers to share knowledge, learn best practices and trends for building web applications.</p> */}
          <div className="items-center justify-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20 mx-auto">
              <div className="mx-auto">
                <Typescript
                  width="64"
                  height="64"
                  data-tip="Typescript"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Html5 width="64" height="64" data-tip="HTML" fill="#5f709d"/>
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Csswizardry
                  width="64"
                  height="64"
                  data-tip="CSS"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Angular
                  width="64"
                  height="64"
                  data-tip="Angular"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <ReactLogo
                  width="64"
                  height="64"
                  data-tip="React"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <FileJson width="64" height="64" data-tip="JSON" fill="#5f709d" />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Mongodb
                  width="64"
                  height="64"
                  data-tip="Mongo DB"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Nodejs width="64" height="64" data-tip="NodeJS" fill="#5f709d" />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Storybook
                  width="64"
                  height="64"
                  data-tip="Storybook"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Svelte
                  width="64"
                  height="64"
                  data-tip="Svelte"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Tailwindcss
                  width="64"
                  height="64"
                  data-tip="Tailwind CSS"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Figma
                  width="64"
                  height="64"
                  data-tip="Figma"
                  fill="#5f709d"
                />
                <ReactTooltip />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
