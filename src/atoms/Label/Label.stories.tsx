import { ComponentStory, Meta } from '@storybook/react'

import { Label } from './Label'

const meta: Meta = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    children: { type: { required: true } },
    bg: { defaultValue: 'icon.ripeMango', control: 'color' },
    color: { defaultValue: 'neutral.darkCharcoal', control: 'color' },
    size: {
      defaultValue: 'md',
      control: {
        type: 'text',
      },
    },
    m: {
      defaultValue: '0',
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Simple = Template.bind({})
Simple.args = {
  children: 'Etiqueta',
}

export const Color = Template.bind({})
Color.args = {
  children: 'Etiqueta',
  bg: 'neutral.darkCharcoal',
  color: 'neutral.cultured2',
}

export const Size = Template.bind({})
Size.args = {
  children: 'Etiqueta',
  size: 'sm',
}
