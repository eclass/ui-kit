import { Profile } from '@/atoms/Icons'
import { Box, HStack } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { BtnSecondary } from './BtnSecondary'

const meta: Meta = {
  title: 'Molecules/SecondaryButton',
  component: BtnSecondary,
  argTypes: {
    disabled: { type: { name: 'boolean', required: false } },
    isLoading: { type: { name: 'boolean', required: false } },
    isFullWidth: { type: { name: 'boolean', required: false } },
    size: {
      defaultValue: 'regular',
    },
  },
}

export default meta

const Template: ComponentStory<typeof BtnSecondary> = (args) => {
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
      <BtnSecondary {...args} />
      <br />
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Variations in regular size
      </Box>
      <HStack>
        <BtnSecondary size="regular" m="0 0 8px">
          Regular
        </BtnSecondary>
        <BtnSecondary size="regular" m="0 0 8px" leftIcon={<Profile />}>
          Regular with icon
        </BtnSecondary>
        <BtnSecondary size="regular" leftIcon={<Profile />} />
        <BtnSecondary size="regular" m="0 0 8px" isLoading>
          Regular Loading
        </BtnSecondary>
        <BtnSecondary size="regular" m="0 0 8px" disabled>
          Regular Disabled
        </BtnSecondary>
      </HStack>
      <BtnSecondary size="regular" isFullWidth>
        Stretched
      </BtnSecondary>
      <br />
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Variations in small size
      </Box>
      <HStack>
        <BtnSecondary size="small" m="0 0 8px">
          Small
        </BtnSecondary>
        <BtnSecondary size="small" m="0 0 8px" leftIcon={<Profile />}>
          Small with icon
        </BtnSecondary>
        <BtnSecondary size="small" leftIcon={<Profile />} />
        <BtnSecondary size="small" m="0 0 8px" isLoading>
          Small Loading
        </BtnSecondary>
        <BtnSecondary size="small" m="0 0 8px" disabled>
          Small Disabled
        </BtnSecondary>
      </HStack>
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  children: 'Demo Primary',
}
