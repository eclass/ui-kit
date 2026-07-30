import { Base, BaseProps } from '@/atoms/Icons/Base'

export function CustomCloseIcon(props: BaseProps): JSX.Element {
  return (
    <Base w="16px" h="16px" viewBox="0 0 16 16" color="none" {...props}>
      <path
        fill="#60798E"
        fillRule="evenodd"
        d="M13.694 0 7.876 5.818 2.057 0 0 2.057l5.818 5.819L0 13.694l2.057 2.057 5.819-5.818 5.818 5.818 2.057-2.057-5.818-5.818 5.818-5.819L13.694 0Z"
        clipRule="evenodd"
      />
    </Base>
  )
}
