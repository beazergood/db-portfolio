import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Nav, NavigationProps } from '.'

export default {
  title: 'Component/Navigation',
  component: Nav,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<NavigationProps> = (args) => <Nav {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}

// Title = "Hello World"
export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  label: 'Click me',
}
