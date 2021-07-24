import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Nav } from '.'

export default {
  title: 'Component/UI/Navigation',
  component: Nav,
} as Meta

const Template: Story<any> = (args) => <Nav {...args} />

const navProps = [
  { id: 1, label: 'Minimal', selected: true },
  { id: 2, label: 'Sporty', selected: false },
  { id: 3, label: 'Photographic', selected: false },
]
// Default scenario
export const Default = Template.bind({})
Default.args = navProps
