import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Navbar, NavbarProps } from '.'

export default {
  title: 'Components/UI/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<NavbarProps> = (args) => {
  return (
    <div>
      <Navbar {...args} />
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  theme: {
    logoFill: '#B3525E',
    navBtnFill: '#B3525E',
  },
}
