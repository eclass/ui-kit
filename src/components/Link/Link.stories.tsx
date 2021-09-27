import { Story, Meta } from '@storybook/react'

import { Link, LinkProps } from './Link'

const meta: Meta = {
  title: 'Atoms/Navigation/Link',
  component: Link,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Great Simple Link!',
    },
  },
}

export default meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Simple = Template.bind({})
Simple.args = {
  textDecoration: 'none',
}

export const Underline = Template.bind({})
Underline.args = {
  textDecoration: 'underline',
  children: 'Now is a Underline Link',
}
