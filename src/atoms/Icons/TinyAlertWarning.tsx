import { Base, type BaseProps } from './Base'

export function TinyAlertWarning(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="12px" h="12px" viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="6" fill="#F5A623" />
      <path d="M5 6L7 6L7 2L5 2L5 6Z" fill="white" />
      <path
        d="M6 8C5.44771 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z"
        fill="white"
      />
    </Base>
  )
}

TinyAlertWarning.displayName = 'TinyAlertWarning'
