import { Text } from '@chakra-ui/react'

import { vars } from '../../../'

interface DateStatusProps {
  date?: string
}

export function DateStatus({ date }: DateStatusProps): JSX.Element | null {
  /* eslint-disable-next-line */
  if (!date || date.length === 0) {
    return null
  }

  return (
    <Text fontSize=".75rem" color={vars('colors-neutral-darkCharcoal')} m="0">
      {date}
    </Text>
  )
}

DateStatus.displayName = 'DateStatus'
