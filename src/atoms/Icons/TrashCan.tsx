import { Base, type BaseProps } from './Base'

export function TrashCan(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="trashCan">
      <path d="M2 6V14C2 15.1 2.9 16 4 16H12C13.1 16 14 15.1 14 14V6H2Z" fill="currentColor" />
      <path
        d="M12 3V1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H0V5H16V3H12ZM10 3H6V2H10V3Z"
        fill="currentColor"
      />
    </Base>
  )
}

TrashCan.displayName = 'TrashCan'
