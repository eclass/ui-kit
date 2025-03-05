import { Base, BaseProps } from './Base'
export function Clock(props: BaseProps): JSX.Element {
  return (
    <Base {...props} title="Clock">
      <path
        fill="#B0CFE0"
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H7V4h2v3h3v2z"
      />
    </Base>
  )
}

Clock.displayName = 'Clock'
