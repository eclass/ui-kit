import { Base, BaseProps } from './Base'

export function CircularCheck(props: BaseProps): JSX.Element {
  return (
    <Base {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm3.6 0L7 11.4 12.4 6 11 4.6l-4 4-2-2L3.6 8z"
        clipRule="evenodd"
      />
    </Base>
  )
}

CircularCheck.displayName = 'CircularCheck'
