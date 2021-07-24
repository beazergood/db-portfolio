import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Skills, SkillsProps } from '.'

export default {
  title: 'Component/Skills',
  component: Skills,
  argTypes: {
    title: { control: 'string' },
  },
} as Meta

const Template: Story<SkillsProps> = (args) => <Skills {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}
