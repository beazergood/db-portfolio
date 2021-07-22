import Image from 'next/image'
import { motion } from 'framer-motion'
import { Pill } from '../Pill'
import { Button } from '../Button'

interface ProjectProps {
  title: string
  client: string
  date: string
  description: string
  categories: Array<any>
  technologies: Array<any>
  problem: string
  solution: string
  coverImg: {
    url: string
  }
}

export interface ProjectCardProps {
  project: ProjectProps
}
export const ProjectCard = ({ project }) => {
  console.log('build project: ', project)

  return (
    <>
      <div className="mt-20 flex flex-row p-10 drop-shadow-sm border-2 border-mintee rounded-lg">
        <div className="text-left w-1/2 border-0 border-yellow-100">
          <p className=" text-sm">{project.client}</p>
          <p className="text-xl my-5 font-serif">{project.title}</p>
          <div className="my-1">
            <p className="font-medium uppercase text-xs my-3">Disciplines</p>
            {project.categories &&
              project.categories.map((category) => {
                return <Pill title={category.title} />
              })}
            <p className="font-medium uppercase text-xs my-3">Technologies</p>
            {project.technologies &&
              project.technologies.map((tech) => {
                return <Pill title={tech.title2} />
              })}
            <p className="my-4">
              <span className="text-xs font-medium uppercase block pb-2">
                Business Problem:
              </span>
              <span className="text-lg ">{project.problem}</span>
            </p>

            <p className="my-4">
              <span className="text-xs font-medium uppercase block pb-2">
                Software Solution:
              </span>
              <span className="text-lg ">{project.solution}</span>
            </p>
            <div className="w-1/2 mx-auto mt-10">
              <Button label={'Deeper dive'} href={'about'} />
            </div>
          </div>
        </div>
        <div className="w-1/2 border- border-yellow-200">
          <Image src={project.coverImage?.url} width="250" height="200" />
        </div>
      </div>
    </>
  )
}
