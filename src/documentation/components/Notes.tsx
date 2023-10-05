import { type ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

import { vars } from '@/theme'

export const Notes = ({ children }: { children: ReactElement }): JSX.Element => {
  return (
    <Box p="1rem" bg={vars('colors-alert-veryLightBlue')} borderRadius={vars('radii-big')}>
      {children}
    </Box>
  )
}
