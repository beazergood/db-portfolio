import React from 'react'

export interface HeroProps {
  title?: string
}

export const Experience: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full border-2  py-10 my-10  border-purple-200 container">
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
        <h1 className="text-2xl text-black">Experience Subheader</h1>
      </div>
    </>
  )
}
