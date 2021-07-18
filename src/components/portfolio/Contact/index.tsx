import React from 'react'

export interface HeroProps {
  title?: string
}

export const Contact: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="h-screen w-full border- border-grey-200 container">
        <h3 className="font-semibold font-sans text-black">Contact</h3>
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
        <h1 className="text-2xl text-black">Contact Subheader</h1>
      </div>
    </>
  )
}
