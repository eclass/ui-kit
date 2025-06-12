import { Box } from '@chakra-ui/react'

import { CalendarButtonIcon } from '@/organisms/Calendar/Dropdown/CalendarDropdown/Icons/CalendarButtonIcon'
import { vars } from '@theme'

export const CalendarButton = (onClick: any): JSX.Element => {
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
      <CalendarButtonIcon />
    </Box>
  )
}
