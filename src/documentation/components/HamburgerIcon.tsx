import { Base, BaseProps } from '@/atoms/Icons/Base'

export function HamburgerIcon(props: BaseProps): JSX.Element {
  return (
    <Base {...props} viewBox="-0.5 0 25 25">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M2 12.32h20M2 18.32h20M2 6.32h20" />
      </g>
    </Base>
  )
}
