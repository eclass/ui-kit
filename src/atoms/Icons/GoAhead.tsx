import { Base, BaseProps } from './Base'

export function GoAhead(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="8px" h="16px" viewBox="0 0 8 16" title="goAhead">
      <path
        d="M2.07407 12L8 6L2.07407 5.18061e-07L-8.65485e-07 2.1L3.85185 6L-1.83588e-07 9.9L2.07407 12V12Z"
        fill="currentColor"
      />
    </Base>
  )
}

GoAhead.displayName = 'GoAhead'
