import { Base, type BaseProps } from './Base'

export function PlusSign(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="plusSign">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8ZM9 9H12V7H9V4H7V7H4V9H7V12H9V9Z"
        fill="currentColor"
      />
    </Base>
  )
}

PlusSign.displayName = 'PlusSign'
