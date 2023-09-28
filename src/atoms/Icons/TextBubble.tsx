import { Base, type BaseProps } from './Base'

export function TextBubble(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="textBubble">
      <path
        d="M1 0H15C15.552 0 16 0.448 16 1V11C16 11.552 15.552 12 15 12H10L4 16V12H1C0.448 12 0 11.552 0 11V1C0 0.448 0.448 0 1 0Z"
        fill="currentColor"
      />
    </Base>
  )
}

TextBubble.displayName = 'TextBubble'
