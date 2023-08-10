export interface IAlertProps {
  children?: React.ReactChild | React.ReactChild[]
  buttonText?: string
  buttonIcon?: React.ReactElement
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  state: 'error' | 'info' | 'success' | 'warning'
  m?: string
}

export interface IFlashNotificationProps {
  duration?: number
  m?: string
  message: string
  state: 'error' | 'info' | 'success' | 'warning'
  position?:
    | 'top-center'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-right'
    | 'bottom-left'
}
