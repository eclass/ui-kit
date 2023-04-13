import { Profile } from '@/atoms/Icons'
import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { BtnLink } from '../Buttons/BtnLink'
import { NewTooltip } from './NewTooltip'

const meta: Meta = {
  title: 'Molecules/Tooltip',
  component: NewTooltip,
  argTypes: {
    label: { type: { name: 'string', required: true } },
    isDisabled: { type: { name: 'boolean', required: false } },
    placement: { type: { name: 'string', required: false } },
    m: { type: { name: 'string', required: false } },
  },
}

export default meta

const Template: ComponentStory<typeof NewTooltip> = (args) => {
  return (
    <>
      <Box fontSize="14px" m=" 4px 16px">
        Demo default settings
      </Box>
      <HStack gap="20px" m="0 0 20px 16px">
        <NewTooltip label="Demo Tooltip">
          <Profile />
        </NewTooltip>
        <NewTooltip label="Demo Tooltip">
          <BtnLink>Demo</BtnLink>
        </NewTooltip>
      </HStack>

      <Box fontSize="14px" m="16px">
        Placement options
      </Box>
      <VStack alignItems="flex-start" m="16px" spacing={6}>
        <HStack spacing={6}>
          <NewTooltip label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </NewTooltip>

          <NewTooltip label="Auto" placement="auto">
            <Button>Auto</Button>
          </NewTooltip>

          <NewTooltip label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </NewTooltip>
        </HStack>

        <HStack spacing={6}>
          <NewTooltip label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </NewTooltip>

          <NewTooltip label="Top" placement="top">
            <Button>Top</Button>
          </NewTooltip>

          <NewTooltip label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </NewTooltip>
        </HStack>

        <HStack spacing={6}>
          <NewTooltip label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </NewTooltip>

          <NewTooltip label="Right" placement="right">
            <Button>Right</Button>
          </NewTooltip>

          <NewTooltip label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </NewTooltip>
        </HStack>

        <HStack spacing={6}>
          <NewTooltip label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </NewTooltip>

          <NewTooltip label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </NewTooltip>

          <NewTooltip label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </NewTooltip>
        </HStack>

        <HStack spacing={6}>
          <NewTooltip label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </NewTooltip>

          <NewTooltip label="Left" placement="left">
            <Button>Left</Button>
          </NewTooltip>

          <NewTooltip label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </NewTooltip>
        </HStack>
      </VStack>
    </>
  )
}

export const Simple = Template.bind({})
