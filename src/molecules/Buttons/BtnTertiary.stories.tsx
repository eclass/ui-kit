import { Box } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { BtnTertiary } from './BtnTertiary'

const meta: Meta = {
  title: 'Molecules/TertiaryButton',
  component: BtnTertiary,
  argTypes: {
    size: {
      defaultValue: 'small',
    },
  },
}

export default meta

const Template: ComponentStory<typeof BtnTertiary> = (args) => {
  return (
    <>
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Demo
      </Box>
      <BtnTertiary {...args} />
      <br />

      <br />
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Variations
      </Box>

      <BtnTertiary m="0 0 8px" rightIcon withoutColor>
        Right icon gray
      </BtnTertiary>

      <BtnTertiary m="0 0 8px" withoutColor>
        Left icon gray
      </BtnTertiary>

      <BtnTertiary m="0 0 8px" rightIcon>
        Right icon blue
      </BtnTertiary>

      <BtnTertiary m="0 0 8px">Left icon blue</BtnTertiary>
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Other icons
      </Box>
      <BtnTertiary iconStatus="answer">Answer</BtnTertiary>
      <BtnTertiary iconStatus="edit">Edit</BtnTertiary>
      <BtnTertiary iconStatus="eliminate">Eliminate</BtnTertiary>
      <BtnTertiary iconStatus="password">Password</BtnTertiary>
      <BtnTertiary iconStatus="more">More</BtnTertiary>
      <BtnTertiary iconStatus="back">Go back</BtnTertiary>
      <BtnTertiary>Default</BtnTertiary>
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  children: 'Demo Tertiary',
}
