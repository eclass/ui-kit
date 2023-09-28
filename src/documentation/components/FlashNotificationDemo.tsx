import { FlashNotification, useFlashNotification } from '@/organisms'
import { type IFlashNotificationProps } from '@/organisms/Alerts/types'
import { Box, Button } from '@chakra-ui/react'

export default function FlashNotificationDemo({
  state,
  message,
}: IFlashNotificationProps): JSX.Element {
  const { show, active, config } = useFlashNotification({
    state,
    message,
  })
  return (
    <Box>
      <Button
        onClick={() => {
          active()
        }}
      >
        {state}
      </Button>
      <FlashNotification {...config} show={show} />
    </Box>
  )
}
