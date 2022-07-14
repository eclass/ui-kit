import { Base, BaseProps } from './Base'

export function GoBack(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="goBack">
      <path d="M9.92593 2L4 8L9.92593 14L12 11.9L8.14815 8L12 4.1L9.92593 2Z" fill="currentColor" />
    </Base>
  )
}

GoBack.displayName = 'GoBack'
