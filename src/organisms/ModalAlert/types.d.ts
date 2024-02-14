export interface ModalAlertProps {
  /** Muestra/Oculta el modal */
  showModal: boolean

  /** Tipo de alerta */
  typeAlert: 'success' | 'error' | 'warning' | 'info'

  /** Título del modal */
  title?: string

  /** Mensaje del modal */
  description?: string

  /** Opciones del boton */
  optionsButton: optionsButton[]
}

interface optionsButton {
  id: string
  label: string
  action: () => void
}
