import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HelloWorld } from './HelloWorld'

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>

const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Alvaro',
}
