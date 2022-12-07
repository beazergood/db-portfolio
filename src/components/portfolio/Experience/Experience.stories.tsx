import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { Experience } from '.'
import { experienceCards } from '../../../experience.data'

export default {
  title: 'Components/Experience',
  component: Experience,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story = (args) => <Experience {...args} />

const cards = experienceCards
// Default scenario
export const Default = Template.bind({})
Default.args = {
  cards: experienceCards,
}
