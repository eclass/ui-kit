import { Box } from '@chakra-ui/react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { useCallback, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { IFlashNotificationProps } from './types.d'
import { vars } from '@/theme'
import { alertStates } from './utils/alertStates'
import { handleTime } from './utils/handleTime'

/**
 * Componente de notificación flash que se muestra centrada en la parte superior de la pantalla.
 * Para implementarlo, se usa en conjunto con el hook useFlashNotification.
 * @example Llamado useFlashNotification y asignación de props
 * const { show, active, config } = useFlashNotification({
 *  state: 'info',
 *   message: 'Respuesta guardada',
 *})
 * @example Definición de trigger que activa la notificación
 * <button onClick={() => { active()}}> Activar notificación </button>
 * @example Componente FlashNotification recibiendo argumentos
 * <FlashNotification {...config} show={show} />
 */

export function FlashNotification({
  message,
  state,
  show,
  m,
}: IFlashNotificationProps): JSX.Element {
  const showToastMessage = useCallback(() => {
    toast(
      <Box display="flex" alignItems="center">
        {alertStates[state].icon} {message}
      </Box>,
      {
        position: 'top-center',
        autoClose: handleTime(message),
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      }
    )
  }, [message, state])

  useEffect(() => {
    if (show) {
      showToastMessage()
    }
  }, [show, showToastMessage])

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
      <ToastContainer transition={Slide} />
    </Box>
  )
}
