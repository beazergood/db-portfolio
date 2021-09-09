import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { VennDiagram } from '.'

export default {
  title: 'Components/UI/VennDiagram',
  component: VennDiagram,
} as Meta

const Template: Story = (args) => <VennDiagram />

// Default scenario
export const Default = Template.bind({})
