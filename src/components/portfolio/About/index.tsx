import React from 'react'

export interface HeroProps {
  title?: string
}

export const About: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="h-screen w-full border- border-blue-500 container">
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
        <h1 className="text-2xl text-black">About Subheader</h1>
      </div>
    </>
  )
}
