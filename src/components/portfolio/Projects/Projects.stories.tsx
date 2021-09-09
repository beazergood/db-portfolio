import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Projects, ProjectsProps } from '.'

export default {
  title: 'Components/Projects',
  component: Projects,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<ProjectsProps> = (args) => <Projects {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
