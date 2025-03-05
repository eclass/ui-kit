import { Box } from '@chakra-ui/react'

import { NoEventsIcon } from '../Icons/NoEventsIcon'

export const Empty = ({ text }: { text?: string }): JSX.Element => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="24px"
      padding="104px 0px 64px"
    >
      <NoEventsIcon />
      <Box fontSize="20px" fontWeight={700} color={'#2F2F2F'}>
        {text ?? 'Aún no tienes eventos en tu calendario'}
      </Box>
    </Box>
  )
}
