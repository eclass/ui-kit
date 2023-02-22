import { Profile } from '@/atoms/Icons'
import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { BtnLink } from '../Buttons/BtnLink'
import { TooltipLabel } from './Tooltip'

const meta: Meta = {
  title: 'Molecules/Tooltip',
  component: TooltipLabel,
  argTypes: {
    label: { type: { name: 'string', required: true } },
    isDisabled: { type: { name: 'boolean', required: false } },
    placement: { type: { name: 'string', required: false } },
    m: { type: { name: 'string', required: false } },
  },
}

export default meta

const Template: ComponentStory<typeof TooltipLabel> = (args) => {
  return (
    <>
      <Box fontSize="14px" m=" 4px 16px">
        Demo default settings
      </Box>
      <HStack gap="20px" m="0 0 20px 16px">
        <TooltipLabel label="Demo Tooltip">
          <Profile />
        </TooltipLabel>
        <TooltipLabel label="Demo Tooltip">
          <BtnLink>Demo</BtnLink>
        </TooltipLabel>
      </HStack>

      <Box fontSize="14px" m="16px">
        Placement options
      </Box>
      <VStack alignItems="flex-start" m="16px" spacing={6}>
        <HStack spacing={6}>
          <TooltipLabel label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </TooltipLabel>

          <TooltipLabel label="Auto" placement="auto">
            <Button>Auto</Button>
          </TooltipLabel>

          <TooltipLabel label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </TooltipLabel>
        </HStack>

        <HStack spacing={6}>
          <TooltipLabel label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </TooltipLabel>

          <TooltipLabel label="Top" placement="top">
            <Button>Top</Button>
          </TooltipLabel>

          <TooltipLabel label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </TooltipLabel>
        </HStack>

        <HStack spacing={6}>
          <TooltipLabel label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </TooltipLabel>

          <TooltipLabel label="Right" placement="right">
            <Button>Right</Button>
          </TooltipLabel>

          <TooltipLabel label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </TooltipLabel>
        </HStack>

        <HStack spacing={6}>
          <TooltipLabel label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </TooltipLabel>

          <TooltipLabel label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </TooltipLabel>

          <TooltipLabel label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </TooltipLabel>
        </HStack>

        <HStack spacing={6}>
          <TooltipLabel label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </TooltipLabel>

          <TooltipLabel label="Left" placement="left">
            <Button>Left</Button>
          </TooltipLabel>

          <TooltipLabel label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </TooltipLabel>
        </HStack>
      </VStack>
    </>
  )
}

export const Simple = Template.bind({})
