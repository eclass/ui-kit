import { Base, type BaseProps } from './Base'

export function TinyAlertError(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="12px" h="12px" viewBox="0 0 12 12">
      <g clipPath="url(#clip0_2165_6683)">
        <circle cx="6" cy="6" r="6" fill="#CC0000" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.87867 2.46447L2.46446 3.87868L4.58578 6L2.46446 8.12132L3.87867 9.53553L5.99999 7.41421L8.12131 9.53553L9.53553 8.12132L7.41421 6L9.53553 3.87868L8.12131 2.46447L5.99999 4.58579L3.87867 2.46447Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2165_6683">
          <rect width="12px" height="12px" fill="white" />
        </clipPath>
      </defs>
    </Base>
  )
}

TinyAlertError.displayName = 'TinyAlertError'
