import { FlashNotification, useFlashNotification } from '@/organisms'
import { IFlashNotificationProps } from '@/organisms/Alerts/types'
import { Box, Button } from '@chakra-ui/react'

export default function FlashNotificationDemo({
  state,
  message,
  maxContent,
}: IFlashNotificationProps): JSX.Element {
  const { show, active, config } = useFlashNotification({
    state: state,
    message: message,
    maxContent: maxContent,
  })
  return (
    <Box>
      <Button onClick={active}>{state}</Button>
      <FlashNotification {...config} show={show} />
    </Box>
  )
}
