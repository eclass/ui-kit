import { uniqueId } from 'services'
import { Base, BaseProps } from './Base'

export function TinyAlertSuccess(props: BaseProps): JSX.Element {
  const id = `clip${uniqueId()}`
  return (
    <Base {...props} w="12px" h="12px" viewBox="0 0 12 12">
      <g clipPath={`url(#${id})`}>
        <circle cx="6" cy="6" r="6" fill="#28A745" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.41421 5.53549L2 6.94971L3.41421 8.36392L4.82843 9.77813L9.77817 4.82839L8.36396 3.41417L4.82843 6.94971L3.41421 5.53549Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </Base>
  )
}

TinyAlertSuccess.displayName = 'TinyAlertSuccess'
