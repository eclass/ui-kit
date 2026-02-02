import { FlashNotification, useFlashNotification } from '@/organisms'
import { IFlashNotificationProps } from '@/organisms/Alerts/types'
import { Box, Button } from '@chakra-ui/react'

export default function FlashNotificationDemo({
  state,
  message,
  width,
}: IFlashNotificationProps): JSX.Element {
  const { show, active, config } = useFlashNotification({
    state: state,
    message: message,
    width,
  }) as { show: boolean; active: () => void; config: IFlashNotificationProps }
  return (
    <Box>
      <Button onClick={active}>{state}</Button>
      <FlashNotification
        show={show}
        state={config.state}
        message={config.message}
        width={config.width}
      />
    </Box>
  )
}
