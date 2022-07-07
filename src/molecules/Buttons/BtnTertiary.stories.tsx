import { Multimedia } from '@/atoms/Icons'
import { Box } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'
import { vars } from '@theme'

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

      <BtnTertiary m="0 0 8px" rightIcon={<Multimedia color={vars('colors-neutral-gray')} />}>
        Right icon gray
      </BtnTertiary>

      <BtnTertiary m="0 0 8px" leftIcon={<Multimedia color={vars('colors-neutral-gray')} />}>
        Left icon gray
      </BtnTertiary>

      <BtnTertiary m="0 0 8px" rightIcon={<Multimedia color={vars('colors-main-deepSkyBlue')} />}>
        Right icon blue
      </BtnTertiary>

      <BtnTertiary m="0 0 8px" leftIcon={<Multimedia color={vars('colors-main-deepSkyBlue')} />}>
        Left icon blue
      </BtnTertiary>
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  children: 'Demo Tertiary',
  leftIcon: <Multimedia color={vars('colors-neutral-gray')} />,
}
