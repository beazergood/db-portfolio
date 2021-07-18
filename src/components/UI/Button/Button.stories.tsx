import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '.'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}

// Title = "Hello World"
export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  label: 'Click me',
}
