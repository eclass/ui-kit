import { Base, BaseProps } from './Base'

export function MapIndicator(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="mapIndicator">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      />
    </Base>
  )
}

MapIndicator.displayName = 'MapIndicator'
