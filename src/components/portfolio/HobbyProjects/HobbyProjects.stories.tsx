import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { HobbyProjects } from '.'

export default {
  title: 'Components/HobbyProjects',
  component: HobbyProjects,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story = (args) => <HobbyProjects {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
