import { Box } from '@chakra-ui/react'

import { vars } from '@theme'
import { HelpIcon } from '@/atoms/Icons/HelpIcon'

export const HelpButton = (onClick: any): JSX.Element => {
  return (
    <Box
      as="button"
      alignItems="center"
      bg={vars('colors-main-blueGrey')}
      borderRadius="100%"
      border="1px solid transparent"
      display="flex"
      height="30px"
      justifyContent="center"
      width="30px"
      _hover={{
        background: 'rgba(96, 121, 142, 0.8)',
      }}
      onClick={onClick}
    >
      <HelpIcon />
    </Box>
  )
}
