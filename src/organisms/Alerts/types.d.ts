import { CSSObject } from '@chakra-ui/react'

type TState = 'error' | 'info' | 'success' | 'warning'
export interface IAlertProps {
  /**
   * Mensaje de alerta
   */
  children?: React.ReactNode
  /**
   * Muestra el botón para cerrar
   */
  canDismiss?: boolean
  /**
   * Texto del botón
   */
  buttonText?: string
  /**
   * Ícono del botón
   */
  buttonIcon?: React.ReactElement
  /**
   * Boolean que determina si el botón es tipo link
   */
  buttonLink?: boolean
  /**
   * Ancho al 100% del contenedot
   */
  fullWidth?: boolean
  /**
   * Para notificación flash
   */
  isFlash?: boolean
  /**
   * Función del botón
   */
  onClick?: () => void
  /**
   * Estado que define color e ícono de la alerta
   * @exampe
   * 'error'
   * 'info'
   * 'success'
   * 'warning'
   */
  state: TState
  /**
   * Margen
   */
  m?: string

  // agrega el link al final del texto
  endTextLink?: string
  onClickLink?: () => void
  maxContent?: boolean
  sx?: CSSObject
}

export interface IFlashNotificationProps {
  /**
   * Margen
   */
  m?: string
  /**
   * Mensaje que muestra la notificación
   */
  message: string
  /**
   * Estado que define color e ícono de la alerta
   * @exampe
   * 'error'
   * 'info'
   * 'success'
   * 'warning'
   * @
   */
  state: TState
  show?: boolean
  maxContent?: boolean
}
