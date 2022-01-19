import { ComponentStory, Meta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

import { Ripples } from './Ripples'

const meta: Meta = {
  title: 'Atoms/Ripples',
  component: Ripples,
  argTypes: {
    children: { type: { name: 'symbol', required: true } },
    color: {
      defaultValue: 'rgba(204,204,204,0.2)',
      control: {
        type: 'color',
      },
    },
  },
}

export default meta

const Template: ComponentStory<typeof Ripples> = (args) => (
  <Box h="7rem" w="7rem" border="solid 1px #222" borderRadius=".5rem">
    <Ripples {...args} />
  </Box>
)

export const Simple = Template.bind({})
Simple.args = {
  children: <div />,
}
