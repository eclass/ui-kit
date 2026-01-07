import { useEffect, useState } from 'react'
import { IFlashNotificationProps } from '../types'
import { handleTime } from './handleTime'

/**
 * Hook que actúa como trigger del componente FlashNotification,
 * usando los siguientes parámetros:
 * show: boolean que indica si la notificación se está mostrando o no,
 * active: función que modifica el estado de show,
 * config: contiene los valores de 'state' y message'
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

export const useFlashNotification = ({
  state,
  message,
  maxContent,
}: IFlashNotificationProps): any => {
  // Estado que maneja si la notificación debe mostrarse.
  const [show, setShow] = useState(false)

  // Effect que controla la visibilidad de la notificación basado en los cambios de estado
  useEffect(() => {
    // Si la notificación se está mostrando, se determina el tiempo tras el cual se ocultará.
    if (show) {
      const timeOut = setTimeout(() => {
        setShow(false)
      }, handleTime(message))
      return () => clearTimeout(timeOut)
    }
  }, [message, show])

  // Función que activa la notificación
  const active = (): any => {
    if (!show) {
      setShow(true)
    }
  }

  // Se retorna el estado de show, la función active y el objeto de config que contiene el estado y mensaje.
  return {
    show,
    active,
    config: {
      state,
      message,
      maxContent,
    },
  }
}
