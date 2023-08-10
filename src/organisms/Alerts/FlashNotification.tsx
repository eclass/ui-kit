import { Box, Button } from '@chakra-ui/react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { IFlashNotificationProps } from './types.d'
import { vars } from '@/theme'

export function FlashNotification({
  message,
  duration = 3000,
  state,
  position = 'top-center',
  m,
}: IFlashNotificationProps): JSX.Element {
  const alertStates = {
    success: {
      icon: <SuccessWhite />,
      bg: vars('colors-alert-ice'),
    },
    error: {
      icon: <ErrorWhite />,
      bg: vars('colors-alert-veryLightPinkThree'),
    },
    info: {
      icon: <InfoWhite />,
      bg: vars('colors-alert-veryLightBlue'),
    },
    warning: {
      icon: <WarningWhite />,
      bg: vars('colors-alert-pale'),
    },
  }

  function countWords(input: string): number {
    const wordCount = input.match(/(\w+)/g)?.length ?? 0
    return wordCount
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const showToastMessage = () => {
    if (message && countWords(message) > 5) {
      duration = 6000
    } else {
      duration = 3000
    }

    console.log(countWords(message))
    toast(
      <Box display="flex" alignItems="center">
        {alertStates[state].icon} {message}
      </Box>,
      {
        position: position,
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      }
    )
  }
  return (
    <Box
      width="max-content"
      maxWidth="796px"
      margin={m}
      sx={{
        '.Toastify__toast-container': {
          width: 'auto',
        },

        '.Toastify__toast': {
          borderRadius: '8px',
          padding: '16px',
          width: 'auto',
          backgroundColor: alertStates[state].bg,
          boxShadow: 'none',
        },

        '.Toastify__close-button': {
          color: vars('colors-main-blueGrey'),
          position: 'absolute',
          top: '16px',
          right: '12px',
        },

        '.Toastify__toast-body': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '28px',
          color: vars('colors-neutral-darkCharcoal'),
          margin: '0 12px 0 0',
          padding: '0',
          svg: {
            width: 'auto',
            marginRight: '10px',
          },
        },
      }}
    >
      <Button onClick={showToastMessage}>hola</Button>

      <ToastContainer transition={Slide} />
    </Box>
  )
}

FlashNotification.displayName = 'FlashNotification'
