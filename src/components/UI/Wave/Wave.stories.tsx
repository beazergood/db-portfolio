import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Wave } from '.'

export default {
  title: 'Component/Wave',
  component: Wave,
} as Meta

const Template: Story = (args) => <Wave />

// Default scenario
export const Default = Template.bind({})
