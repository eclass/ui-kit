import { Base, type BaseProps } from './Base'

export function TinyAlertInfo(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="12px" h="12px" viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="6" fill="#0189FF" />
      <path d="M7 6H5V10H7V6Z" fill="white" />
      <path
        d="M6 4C6.55228 4 7 3.55228 7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3C5 3.55228 5.44772 4 6 4Z"
        fill="white"
      />
    </Base>
  )
}

TinyAlertInfo.displayName = 'TinyAlertInfo'
