import React from 'react'
import { motion } from 'framer-motion'
import { Angular } from '@styled-icons/boxicons-logos'
import { DesignIdeas } from '@styled-icons/fluentui-system-regular/DesignIdeas'
import { WebAsset } from '@styled-icons/fluentui-system-regular/WebAsset'
import { DeveloperMode } from '@styled-icons/material/DeveloperMode'
import { UserGroup } from '@styled-icons/heroicons-solid/UserGroup'
import { Build } from '@styled-icons/ionicons-outline/Build'
import { Recycle } from '@styled-icons/remix-line/Recycle'

export interface HeroProps {
  title?: string
}

export const Interests: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }

  return (
    <>
      <motion.div className="h-screen w-full border- border-green-200 container">
        <h3 className="font-semibold font-sans text-black">Interests</h3>
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
        <h1 className="text-2xl text-black">Interests Subheader</h1>
        <div className="flex flex-col mx-auto border- border-red-300">
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <DesignIdeas width="64" height="64" />
              <p className="">Design Prototyping</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <WebAsset width="64" height="64" />
              <p className="">Web Apps</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <DeveloperMode width="64" height="64" />
              <p className="">Mobile Apps</p>
            </div>
          </div>
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <Recycle width="64" height="64" />
              <p className="">Iterate</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <Build width="64" height="64" />
              <p className="">Build</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <UserGroup width="64" height="64" />
              <p className="">User Research</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
