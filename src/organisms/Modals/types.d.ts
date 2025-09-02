export interface IModal {
  children: React.ReactNode
  /** Por defecto esta activo y permite cerrar el modal haciendo click fuera del modal */
  closeOnOverlayClick?: boolean
  /** Si esta activo el subtitulo se fija en la parte superior */
  fixedSubtitle?: string
  isOpen: boolean
  onClose: () => void
  title?: string
  /** Si esta activo se quita el margin del contenido */
  withoutMargin?: boolean
  /** Como quiero el scroll, dentro del modal o el modal incluido (por defecto es el último) */
  scrollBehavior?: 'inside' | 'outside'
  /** Si esta activo se fija el footer */
  fixedButtons?: boolean
  autoFocus?: boolean
}

export interface IModalButtons {
  children: React.ReactNode
  buttonsCenter?: boolean
  px?: string | number
  py?: string | number
  buttonsColumn?: boolean
  isDesktop?: boolean
}

export interface IModalAlert {
  autoFocus?: boolean
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  type: 'info' | 'loading'
  status?: 'success' | 'error' | 'warning' | 'info'
}
