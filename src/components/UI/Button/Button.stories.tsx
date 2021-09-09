import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    label: { control: 'string' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  label: 'Click me',
  href: './about',
}
