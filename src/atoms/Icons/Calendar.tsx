import { Base, BaseProps } from './Base'
export function Calendar(props: BaseProps): JSX.Element {
  return (
    <Base {...props} title="Calendar">
      <g fill="#B0CFE0">
        <path
          fill="#B0CFE0"
          d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z"
        />
        <path d="M4 7h2v2H4zM7 7h2v2H7zM4 10h2v2H4zM7 10h2v2H7zM10 7h2v2h-2zM10 10h2v2h-2z" />
      </g>
    </Base>
  )
}

Calendar.displayName = 'Calendar'
