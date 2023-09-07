import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { vars } from '@/theme'

export const Notes: FC = ({ children }): JSX.Element => {
  return (
    <Box p="1rem" bg={vars('colors-alert-veryLightBlue')} borderRadius={vars('radii-big')}>
      {children}
    </Box>
  )
}
