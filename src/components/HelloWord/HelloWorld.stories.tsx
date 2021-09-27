import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HelloWorld } from './HelloWorld'

const Story: ComponentMeta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
}
export default Story

const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Alvaro [AAAA]',
}
