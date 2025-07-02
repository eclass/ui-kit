export interface IModal {
  buttons?: Array<{ type?: 'primary' | 'secondary'; action: () => void; text: string }>
  /** Si es un solo botón tiene la opción de centrar este  */
  buttonsCenter?: boolean
  /** muestran en columna en mobile, por defecto es true */
  buttonsColumn?: boolean
  /** Si esta activo los botones se muestran dentro del contenido, le afecta el scroll */
  buttonsInside?: boolean
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
}

export interface IModalButtons {
  buttons: IModal['buttons']
  buttonsCenter?: IModal['buttonsCenter']
  buttonsColumn?: IModal['buttonsColumn']
  buttonsInside?: boolean
  isDesktop?: boolean
  px: string
  py: string
}

export interface IModalAlert {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  type: 'info' | 'loading'
  status?: 'success' | 'error' | 'warning' | 'info'
  buttons?: Array<{ action: () => void; text: string }>
}
