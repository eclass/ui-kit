import { useCallback, useEffect, useRef } from 'react'
import { toast, Toaster } from 'react-hot-toast'

import { IFlashNotificationProps } from './types.d'
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
  maxContent,
}: IFlashNotificationProps): null {
  const hasShownRef = useRef(false)

  const showToast = useCallback(() => {
    toast(
      (t) => (
        <Alert
          isFlash
          state={state}
          canDismiss
          onClick={() => toast.dismiss(t.id)}
          maxContent={maxContent}
        >
          {message}
        </Alert>
      ),
      {
        id: alertStates[state].id,
        duration: handleTime(message),
      }
    )
  }, [message, state, maxContent])

  useEffect(() => {
    if (show && !hasShownRef.current) {
      showToast()
      hasShownRef.current = true
    }

    if (!show) {
      hasShownRef.current = false
    }
  }, [show, showToast])

  return null
}

export const FlashNotificationGlobal = (): JSX.Element => (
  <Toaster
    position="top-center"
    toastOptions={{
      className: 'toastContainer',
      style: {
        background: 'transparent',
        boxShadow: 'none',
        zIndex: 1500,
      },
    }}
  />
)
