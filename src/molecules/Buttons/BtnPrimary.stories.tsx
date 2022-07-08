import { Profile } from '@/atoms/Icons'
import { Box, HStack } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { BtnPrimary } from './BtnPrimary'

const meta: Meta = {
  title: 'Molecules/PrimaryButton',
  component: BtnPrimary,
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

const Template: ComponentStory<typeof BtnPrimary> = (args) => {
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
      <BtnPrimary {...args} />
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
        <BtnPrimary size="regular" m="0 0 8px">
          Regular
        </BtnPrimary>
        <BtnPrimary size="regular" m="0 0 8px" leftIcon={<Profile />}>
          Regular with icon
        </BtnPrimary>
        <BtnPrimary size="regular" leftIcon={<Profile />} />
        <BtnPrimary size="regular" m="0 0 8px" isLoading>
          Regular Loading
        </BtnPrimary>
        <BtnPrimary size="regular" m="0 0 8px" disabled>
          Regular Disabled
        </BtnPrimary>
      </HStack>
      <BtnPrimary size="regular" isFullWidth>
        Stretched
      </BtnPrimary>
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
        <BtnPrimary size="small" m="0 0 8px">
          Small
        </BtnPrimary>
        <BtnPrimary size="small" m="0 0 8px" leftIcon={<Profile />}>
          Small with icon
        </BtnPrimary>
        <BtnPrimary size="small" leftIcon={<Profile />} />
        <BtnPrimary size="small" m="0 0 8px" isLoading>
          Small Loading
        </BtnPrimary>
        <BtnPrimary size="small" m="0 0 8px" disabled>
          Small Disabled
        </BtnPrimary>
      </HStack>
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  children: 'Demo Primary',
}
