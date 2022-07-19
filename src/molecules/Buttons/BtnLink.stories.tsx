import { Box } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'
import { BtnLink } from './BtnLink'

const meta: Meta = {
  title: 'Molecules/LinkButton',
  component: BtnLink,
}

export default meta

const Template: ComponentStory<typeof BtnLink> = (args) => {
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
      <BtnLink {...args} />
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  children: 'Demo Link',
}
