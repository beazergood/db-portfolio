import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ExperienceCard, ExperienceCardProps } from '.'

export default {
  title: 'Component/UI/ExperienceCard',
  component: ExperienceCard,
  argTypes: {},
} as Meta

const Template: Story<ExperienceCardProps> = (args) => (
  <div className="bg-mintee p-10">
    <ExperienceCard {...args} />
  </div>
)

// Default scenario
export const Default = Template.bind({})
Default.args = {
  company: 'Beazer Software',
  role: 'Full-stack Web Developer',
  dates: 'Jan 2021 - Now',
  pills: ['NextJS', 'Storybook', 'Framer', 'JAM stack'],
  img: '/images/DSC02022.jpg',
  side: 'left',
}
