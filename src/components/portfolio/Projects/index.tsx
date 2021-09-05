import React from 'react'
import { ProjectCard } from '../../UI/ProjectCard'

export interface ProjectsProps {
  title?: string
  data?: Array<any>
  props?: any
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  console.log('projects prop data is', data)
  return (
    <>
      <div className="w-full border-  py-10 my-10  border-blue-200 container">
        <h3 className="font-semibold font-sans text-black">Projects</h3>
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
        <h1 className="text-2xl text-black">Projects Subheader</h1>
        <div className="container">
          <h3 className="text-lg">Projects list</h3>
          {data &&
            data.map((project) => {
              return <ProjectCard project={project} key={project.id} />
            })}
        </div>
      </div>
    </>
  )
}
