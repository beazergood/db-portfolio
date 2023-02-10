import React from 'react'
import { motion } from 'framer-motion'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Csswizardry } from '@styled-icons/simple-icons/Csswizardry'
import { FileJson } from '@styled-icons/boxicons-solid/FileJson'
import { Figma } from '@styled-icons/fa-brands/Figma'
import { Github } from '@styled-icons/simple-icons/github'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Angular } from '@styled-icons/boxicons-logos/Angular'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
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
      <div className="bg-mintee py-10 my-10">
        <motion.div className="w-full border- p-4 my-30 py-10  border-green-200 container ">
          <h1 className="text-2xl text-purp-dark payton-one">
            Technologies &amp; tools I like to work with 👾
          </h1>
          <div className="items-center justify-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20 mx-auto">
              <div className="mx-auto">
                <Typescript
                  width="64"
                  height="64"
                  data-tip="Typescript"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Html5 width="64" height="64" data-tip="HTML" fill="white" />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Csswizardry
                  width="64"
                  height="64"
                  data-tip="CSS"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Angular
                  width="64"
                  height="64"
                  data-tip="Angular"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <ReactLogo
                  width="64"
                  height="64"
                  data-tip="React"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <FileJson width="64" height="64" data-tip="JSON" fill="white" />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Mongodb
                  width="64"
                  height="64"
                  data-tip="Mongo DB"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Nodejs width="64" height="64" data-tip="NodeJS" fill="white" />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Storybook
                  width="64"
                  height="64"
                  data-tip="Storybook"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Svelte
                  width="64"
                  height="64"
                  data-tip="Storybook"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Figma
                  width="64"
                  height="64"
                  data-tip="Figma"
                  fill="white"
                />
                <ReactTooltip />
              </div>
              <div className="mx-auto">
                <Github
                  width="64"
                  height="64"
                  data-tip="Figma"
                  fill="white"
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
