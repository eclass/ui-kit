import { Base, BaseProps } from './Base'

export function Remote(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="remote">
      <path
        d="M15 11V4C15 2.864 14.136 2 13 2H3C1.864 2 1 2.864 1 4V11H0V12C0 13.105 0.895 14 2 14H14C15.105 14 16 13.105 16 12V11H15ZM3 4H13V11H3V4Z"
        fill="currentColor"
      />
    </Base>
  )
}

Remote.displayName = 'Remote'
