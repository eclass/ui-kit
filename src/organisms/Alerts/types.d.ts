type TState = 'error' | 'info' | 'success' | 'warning'
export interface IAlertProps {
  /**
   * Mensaje de alerta
   */
  children?: React.ReactChild | React.ReactChild[]
  /**
   * Texto del botón
   */
  buttonText?: string
  /**
   * Ícono del botón
   */
  buttonIcon?: React.ReactElement
  /**
   * Función del botón
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
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
}
