import React from 'react'
import { ExperienceCard, ExperienceCardProps } from '../../UI/ExperienceCard'
import { motion, useMotionValue } from 'framer-motion'

export interface ExperienceProps {
  title?: string
  cards?: Array<ExperienceCardProps>
}

export const Experience: React.FC<ExperienceProps> = (
  { title, cards } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full border-  py-10 my-10  border-purple-200 container">
        <div>
          <h3 className="font-semibold font-sans text-black">Experience</h3>
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
          <h1 className="text-2xl text-black"></h1>
        </div>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            {cards.length &&
              cards.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    company={card.company}
                    role={card.role}
                    dates={card.dates}
                    pills={card.pills}
                    img={card.img}
                    side={card.side}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
