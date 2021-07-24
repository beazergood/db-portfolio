import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Pill, PillProps } from '.'

export default {
  title: 'Component/UI/Pill',
  component: Pill,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<PillProps> = (args) => <Pill {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  title: 'Pill name',
}
