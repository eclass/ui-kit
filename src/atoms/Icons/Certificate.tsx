import { Base, BaseProps } from './Base'

export function Certificate(props: BaseProps): JSX.Element {
  return (
    <Base {...props}>
      <path fill="currentColor" d="M7 4H9V6H7z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 8h2a1 1 0 011 1v6a1 1 0 01-1 1H9v-4H7v4H1a1 1 0 01-1-1V9a1 1 0 011-1h2V4.618l-.553.277a1 1 0 01-.894-1.79l6-3a1 1 0 01.894 0l6 3a1 1 0 11-.894 1.79L13 4.618V8zM3 13h2v-3H3v3zm2-5V4a.98.98 0 00-.07-.347L8 2.118l3.07 1.535A.98.98 0 0011 4v4H5zm6 5h2v-3h-2v3z"
        clipRule="evenodd"
      />
    </Base>
  )
}

Certificate.displayName = 'Certificate'
