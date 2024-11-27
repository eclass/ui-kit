import { Base, BaseProps } from './Base'

export function DiagonalArrow(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16">
      <path
        d="M9.207 5.793L3 12L4.414 13.414L10.621 7.207L13.414 10V3H6.414L9.207 5.793Z"
        fill="#0189FF"
      />
    </Base>
  )
}

DiagonalArrow.displayName = 'Download'
