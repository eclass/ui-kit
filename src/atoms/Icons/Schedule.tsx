import { Icon, BaseProps } from './Icon'

export function Schedule(props: BaseProps): JSX.Element {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2h2a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h2V0h2v2h2V0h2v2h2V0h2v2zM2 14h12V5H2v9z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M4 7H6V9H4z" />
      <path fill="currentColor" d="M7 7H9V9H7z" />
      <path fill="currentColor" d="M4 10H6V12H4z" />
      <path fill="currentColor" d="M7 10H9V12H7z" />
      <path fill="currentColor" d="M10 7H12V9H10z" />
      <path fill="currentColor" d="M10 10H12V12H10z" />
    </Icon>
  )
}

Schedule.displayName = 'Schedule'
