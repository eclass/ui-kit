import { Icon, BaseProps } from './Icon'

export function CircularInformation(props: BaseProps): JSX.Element {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 12V7h2v5H7zm0-7c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1z"
        clipRule="evenodd"
      />
    </Icon>
  )
}

CircularInformation.displayName = 'CircularInformation'
