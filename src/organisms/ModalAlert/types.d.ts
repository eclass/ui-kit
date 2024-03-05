export interface ModalAlertProps {
  /** Muestra/Oculta el modal */
  showModal: boolean

  /** Tipo de alerta */
  typeAlert: 'success' | 'error' | 'warning' | 'info'

  /** Título del modal */
  title?: string

  /** Mensaje del modal */
  description?: string | any

  /** Opciones del boton */
  optionsButton: optionsButton[]

  /** Posición del modal */
  top?: string
}

interface optionsButton {
  id: string
  label: string
  action: () => void
}
