import { Base, BaseProps } from './Base'

export function Multimedia(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="12px" viewBox="0 0 14 14" title="multimedia">
      <path
        d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
        fill="currentColor"
      />
      <path
        d="M11 6C12.6569 6 14 4.65685 14 3C14 1.34315 12.6569 0 11 0C9.34315 0 8 1.34315 8 3C8 4.65685 9.34315 6 11 6Z"
        fill="currentColor"
      />
      <path
        d="M3 14C4.65685 14 6 12.6569 6 11C6 9.34315 4.65685 8 3 8C1.34315 8 0 9.34315 0 11C0 12.6569 1.34315 14 3 14Z"
        fill="currentColor"
      />
      <path
        d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
        fill="currentColor"
      />
    </Base>
  )
}

Multimedia.displayName = 'Multimedia'
