import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { About, AboutProps } from '.'

export default {
  title: 'Component/About',
  component: About,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<AboutProps> = (args) => <About {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
