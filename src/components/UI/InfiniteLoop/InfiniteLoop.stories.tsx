import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { InfiniteLoop } from '.'

export default {
  title: 'Component/InfiniteLoop',
  component: InfiniteLoop,
  argTypes: {},
} as Meta

const Template: Story = () => <InfiniteLoop />

// Default scenario
export const Default = Template.bind({})
