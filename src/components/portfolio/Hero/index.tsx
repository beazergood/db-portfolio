import React from 'react'
import { Wave } from '../../UI/Wave'

export interface HeroProps {
  title?: string
}

export const Hero: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="h-screen w-full border-0 border-yellow-200">
        <div className="container">
          <div className="mt-10">
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
      </div>

      <Wave />
    </>
  )
}
