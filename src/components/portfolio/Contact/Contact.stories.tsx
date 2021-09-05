import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Contact, ContactProps } from '.'

export default {
  title: 'Component/Contact',
  component: Contact,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<ContactProps> = (args) => <Contact {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
