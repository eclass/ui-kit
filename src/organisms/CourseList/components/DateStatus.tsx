import { Text } from '@chakra-ui/react'

interface DateStatusProps {
  date: string
}

export function DateStatus({ date }: DateStatusProps): JSX.Element | null {
  if (date.length === 0) {
    return null
  }

  return (
    <Text fontSize=".75rem" color="neutral.darkCharcoal" m="0">
      {date}
    </Text>
  )
}

DateStatus.displayName = 'DateStatus'
