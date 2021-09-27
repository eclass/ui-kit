import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

const Story: ComponentMeta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
}
export default Story

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
