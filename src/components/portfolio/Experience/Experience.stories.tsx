import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Experience, ExperienceProps } from '.'

export default {
  title: 'Components/Experience',
  component: Experience,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<ExperienceProps> = (args) => <Experience {...args} />

const experienceCards = [
  {
    company: 'Beazer Software',
    role: 'UI/UX Designer & Developer',
    pills: [
      'UI/UX',
      'Angular',
      'Next',
      'Framer',
      'Basic Principles',
      'Storybook',
    ],
    dates: 'Jan 2021 - Present',
    img: '',
    side: 'left',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Full Stack Web Developer',
    pills: ['UI/UX Prototyping', 'Angular', 'MongoDB', 'Node', 'AWS'],
    dates: 'Jan 2015 - Oct 2020',
    img: '',
    side: 'right',
  },
  {
    company: 'High Performance Software Ltd',
    role: 'Frontend Web Developer',
    pills: ['HTML', 'CSS', 'Javascript', 'Sketch', 'Adobe'],
    dates: 'Sep 2012 - Sep 2015',
    img: '',
    side: 'right',
  },
  {
    company: 'Marketpoint Europe Ltd',
    role: 'Web Designer',
    pills: ['HTML', 'CSS', 'Mockups'],
    dates: 'Aug 2011 - Sep 2012',
    img: '',
    side: 'left',
  },
]
// Default scenario
export const Default = Template.bind({})
Default.args = {
  cards: experienceCards,
}
