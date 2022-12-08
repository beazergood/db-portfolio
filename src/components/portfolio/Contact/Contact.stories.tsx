import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Contact } from '.'

export default {
  title: 'Components/Contact',
  component: Contact,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story = (args) => <Contact {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
