import { Base, type BaseProps } from './Base'

export function GoBack(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="8px" h="16px" viewBox="0 0 8 16" title="goBack">
      <path d="M5.92593 2L0 8L5.92593 14L8 11.9L4.14815 8L8 4.1L5.92593 2Z" fill="currentColor" />
    </Base>
  )
}

GoBack.displayName = 'GoBack'
