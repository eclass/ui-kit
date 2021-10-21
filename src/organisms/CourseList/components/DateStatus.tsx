import { Text } from '@chakra-ui/react'

import { vars } from '@theme'

interface DateStatusProps {
  date?: string
}

export function DateStatus({ date }: DateStatusProps): JSX.Element | null {
  if (date == null || date.length === 0) {
    return null
  }

  return (
    <Text fontSize=".75rem" color={vars('colors-neutral-darkCharcoal')} m="0">
      {date}
    </Text>
  )
}

DateStatus.displayName = 'DateStatus'
