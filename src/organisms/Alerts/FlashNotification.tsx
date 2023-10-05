import { Box } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'

import { type IFlashNotificationProps } from './types.d'
import { alertStates } from './utils/alertStates'
import { handleTime } from './utils/handleTime'
import { Alert } from './Alert'

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
  const showToast = useCallback(() => {
    toast(
      (t) => (
        <Alert
          isFlash
          state={state}
          canDismiss
          onClick={() => {
            toast.dismiss(t.id)
          }}
        >
          {message}
        </Alert>
      ),
      {
        duration: handleTime(message),
        id: alertStates[state].id,
      },
    )
  }, [message, state])

  useEffect(() => {
    if (show) {
      showToast()
    }
  }, [show, showToast])

  return (
    <Box>
      <Toaster
        toastOptions={{
          className: 'toastContainer',
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
    </Box>
  )
}
