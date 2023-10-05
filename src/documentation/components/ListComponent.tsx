import { type FC, type ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

interface IListComponent {
  children: ReactElement | any
  gap?: string
  m?: string
}

export const ListComponent: FC<IListComponent> = ({
  children,
  gap = '1rem',
  m = '0',
}): JSX.Element => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      m={m}
      gap={gap}
      sx={{ '>*': { marginInlineStart: '0 !important' } }}
    >
      {children}
    </Box>
  )
}
