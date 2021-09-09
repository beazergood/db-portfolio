import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ProjectCard, ProjectCardProps } from '.'

export default {
  title: 'Components/UI/ProjectCard',
  component: ProjectCard,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  project: {
    title: 'Project name',
    client: 'Foo Software Co',
    problem: 'This is broken',
    solution: 'Informed solution with upgrades',
    categories: [
      { title: 'Design' },
      { title: 'UI/UX' },
      { title: 'Full Stack Dev' },
      { title: 'Pair Programming' },
    ],
    technologies: [
      { title2: 'Angular' },
      { title2: 'MongoDB' },
      { title2: 'Node' },
    ],
    description:
      "We needed to update some external APIs and make some improvements in our data processing workflows. The result is a user interface that's faster and more informative. ",
    date: '20/07/2021',
    id: 1,
    coverImage: {
      url:
        'https://res.cloudinary.com/db-portfolio/image/upload/v1626777084/Screenshot_2021_07_20_at_11_09_04_0736dce478.png',
    },
  },
}
