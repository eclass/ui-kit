import { ComponentStory, Meta } from '@storybook/react'

import { Progress } from './Progress'

const meta: Meta = {
  title: 'Atoms/Progress',
  component: Progress,
  argTypes: {
    value: {
      defaultValue: 0,
      description: 'Valores entre 0 - 100',
      control: {
        type: 'number',
      },
    },
  },
}

export default meta

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export const Simple = Template.bind({})
Simple.args = {
  value: 64,
}
