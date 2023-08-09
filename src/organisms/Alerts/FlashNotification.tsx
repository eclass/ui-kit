import { Box, Button } from '@chakra-ui/react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { IAlertProps } from './types.d'
import { vars } from '@/theme'

export function FlashNotification({ children, state, position, m }: IAlertProps): JSX.Element {
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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const showToastMessage = () => {
    toast(
      <Box>
        {alertStates[state].icon} {children}
      </Box>,
      {
        position: position,
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
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
          padding: '24px 16px',
          width: 'auto',
          backgroundColor: alertStates[state].bg,
          boxShadow: 'none',
        },

        '.Toastify__close-button': {
          color: vars('colors-neutral-darkCharcoal'),
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
