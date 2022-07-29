import { Base, BaseProps } from './Base'

export function VerticalLine(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="1px" h="15px" viewBox="0 0 1 15" title="verticalLine">
      <rect y="-1" width="1" height="16" fill="#D8D8D8" />
    </Base>
  )
}

VerticalLine.displayName = 'VerticalLine'
