import { Base, BaseProps } from './Base'

export function Star(props: BaseProps): JSX.Element {
  return (
    <Base viewBox="0 0 16px 16px" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.464 12.255a1 1 0 0 0-.927 0l-2.452 1.282a1 1 0 0 1-1.45-1.053l.462-2.729a1 1 0 0 0-.286-.881L1.833 6.938a1 1 0 0 1 .554-1.704l2.738-.404a1 1 0 0 0 .75-.545l1.23-2.48a1 1 0 0 1 1.792 0l1.23 2.48a1 1 0 0 0 .75.545l2.738.404a1 1 0 0 1 .553 1.704l-1.977 1.936a1 1 0 0 0-.287.881l.462 2.73a1 1 0 0 1-1.45 1.053l-2.452-1.284Z"
        clipRule="evenodd"
      />
    </Base>
  )
}

Star.displayName = 'Star'
