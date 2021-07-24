import React from 'react'

export interface ContactProps {
  title?: string
}

export const Contact: React.FC<ContactProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="w-full border- py-10 my-10 border-grey-200 container">
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
        <h1 className="text-2xl text-black">Let's work together</h1>
        <div className=" text-center mt-10 text-xl">
          You can reach me via email at hi[at]davebeazer.dev
        </div>
      </div>
    </>
  )
}
