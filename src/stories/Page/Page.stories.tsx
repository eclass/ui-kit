import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'
import * as HeaderStories from '../Header/Header.stories'

const Story: ComponentMeta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
}
export default Story

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
