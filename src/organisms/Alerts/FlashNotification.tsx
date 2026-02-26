import { useCallback, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

import { IFlashNotificationProps } from './types.d'
import { alertStates } from './utils/alertStates'
import { handleTime } from './utils/handleTime'
import { Alert } from './Alert'
import { useMediaQuery } from '@chakra-ui/react'

/**
 * Componente de notificación flash que se muestra centrada en la parte superior de la pantalla.
 * No requiere un contenedor <Toaster /> manual, ya que implementa un patrón Singleton.
 *
 * @example
 * const { show, active, config } = useFlashNotification({
 *   state: 'info',
 *   message: 'Respuesta guardada',
 * })
 *
 * return (
 *   <>
 *     <button onClick={active}>Trigger</button>
 *     <FlashNotification {...config} show={show} />
 *   </>
 * )
 */

// Usamos una variable en window para asegurar que sea un único Toaster
// incluso si la librería se carga en distintos bundles o proyectos.
const GLOBAL_TOASTER_FLAG = '_eclass_ui_kit_toaster_mounted'

export function FlashNotification({
  message,
  state,
  show,
  m,
}: IFlashNotificationProps): JSX.Element {
  const [shouldRenderToaster, setShouldRenderToaster] = useState(false)
  const [isMobile] = useMediaQuery('(max-width: 440px)')

  useEffect(() => {
    // Si no hay un Toaster registrado globalmente en la ventana, esta instancia lo toma.
    if (typeof window !== 'undefined' && !(window as any)[GLOBAL_TOASTER_FLAG]) {
      ;(window as any)[GLOBAL_TOASTER_FLAG] = true
      setShouldRenderToaster(true)
    }
  }, [])

  const showToast = useCallback(() => {
    toast(
      (t) => (
        <Alert
          isFlash
          state={state}
          canDismiss
          onClick={() => toast.dismiss(t.id)}
          m={m}
          sx={{
            w: 'initial',
            maxWidth: 'initial',
            ...(isMobile && {
              // La librería agrega un margin por defecto, que no pude quitar.
              margin: '-4px -10px',
              borderRadius: 0,
              w: '100vw!important',
            }),
          }}
        >
          {message}
        </Alert>
      ),
      {
        duration: ['success', 'info'].includes(state) ? handleTime(message) : Infinity,
        id: alertStates[state].id,
      }
    )
  }, [message, state, m])

  useEffect(() => {
    if (show) {
      showToast()
    }
  }, [show, showToast])

  return (
    <>
      {shouldRenderToaster && (
        <Toaster
          position="top-center"
          toastOptions={{
            className: 'toastContainer',
            style: {
              background: 'transparent',
              boxShadow: 'none',
              maxWidth: '100vw',
              padding: 0,
              margin: 0,
            },
          }}
          containerStyle={{
            left: 0,
            right: 0,
            ...(isMobile && {
              top: 0,
            }),
            padding: 0,
            margin: 0,
          }}
        />
      )}
    </>
  )
}
