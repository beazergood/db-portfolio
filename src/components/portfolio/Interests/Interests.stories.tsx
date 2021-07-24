import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Interests, InterestsProps } from '.'

export default {
  title: 'Component/Interests',
  component: Interests,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<InterestsProps> = (args) => <Interests {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
