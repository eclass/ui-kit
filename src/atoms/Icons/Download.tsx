import { Base, type BaseProps } from './Base'

export function Download(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16">
      <path
        d="M7.99998 12C8.29998 12 8.49998 11.9 8.69998 11.7L14.4 6L13 4.6L8.99998 8.6V0H6.99998V8.6L2.99998 4.6L1.59998 6L7.29998 11.7C7.49998 11.9 7.69998 12 7.99998 12Z"
        fill="currentColor"
      />
      <path d="M15 14H1V16H15V14Z" fill="currentColor" />
    </Base>
  )
}

Download.displayName = 'Download'
