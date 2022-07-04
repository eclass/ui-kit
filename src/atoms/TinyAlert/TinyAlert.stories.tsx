import { Box } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'

import { TinyAlert } from './TinyAlert'

const meta: Meta = {
  title: 'Atoms/TinyAlert',
  component: TinyAlert,
  argTypes: {
    status: {
      type: 'string',
      required: 'true',
    },
    text: {
      type: 'string',
    },
    margin: {
      type: 'string',
      defaultValue: '0',
    },
  },
}

export default meta

const Template: ComponentStory<typeof TinyAlert> = (args) => {
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
      <TinyAlert {...args} />
      <br />
      <Box
        fontSize=".75rem"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0 0 4px"
      >
        Default text examples
      </Box>
      <TinyAlert status="info" margin="0 0 8px" />

      <TinyAlert status="success" margin="0 0 8px" />

      <TinyAlert status="warning" margin="0 0 8px" />

      <TinyAlert status="error" margin="0 0 8px" />

      <TinyAlert status="pending" margin="0 0 8px" />

      <TinyAlert status="omitted" margin="0 0 8px" />

      <TinyAlert status="answered" margin="0 0 8px" />

      <TinyAlert status="new" margin="0 0 8px" />
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  status: 'success',
}
