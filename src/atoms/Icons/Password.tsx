import { Base, BaseProps } from './Base'

export function Password(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="14px" h="16px" viewBox="0 0 14 16" title="password">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C4.95714 0 3.28571 1.67143 3.28571 3.71429V4.64286H1.42857C0.871429 4.64286 0.5 5.01429 0.5 5.57143V13.9286C0.5 14.4857 0.871429 14.8571 1.42857 14.8571H12.5714C13.1286 14.8571 13.5 14.4857 13.5 13.9286V5.57143C13.5 5.01429 13.1286 4.64286 12.5714 4.64286H10.7143V3.71429C10.7143 1.67143 9.04286 0 7 0ZM7.92857 10.8643V12.0714H6.07143V10.8643C5.51429 10.5857 5.14286 9.93571 5.14286 9.28571C5.14286 8.26429 5.97857 7.42857 7 7.42857C8.02143 7.42857 8.85714 8.26429 8.85714 9.28571C8.85714 9.93571 8.48571 10.5857 7.92857 10.8643ZM5.14286 3.71429V4.64286H8.85714V3.71429C8.85714 2.69286 8.02143 1.85714 7 1.85714C5.97857 1.85714 5.14286 2.69286 5.14286 3.71429Z"
        fill="currentColor"
      />
    </Base>
  )
}

Password.displayName = 'Password'