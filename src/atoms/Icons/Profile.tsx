import { Base, BaseProps } from './Base'

export function Profile(props: BaseProps): JSX.Element {
  return (
    <Base {...props} viewBox="0 0 12 12" w=".625rem" h=".75rem" title="profile">
      <path
        fill="currentColor"
        d="M5 6a3 3 0 100-6 3 3 0 000 6zM5 7c-3.375 0-5 2.106-5 3.333V11a1 1 0 001 1h8a1 1 0 001-1v-.667C10 9.106 8.375 7 5 7z"
      />
    </Base>
  )
}

Profile.displayName = 'Profile'
