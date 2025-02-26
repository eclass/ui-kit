import { Base, BaseProps } from "@/atoms/Icons/Base"
export function NotificationIcon (props: BaseProps): JSX.Element {
  return (
    <Base {...props} title="notification">
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={9} fill="none" className="notification">
      <circle cx={4} cy={4.5} r={4} fill="#FF7A14" />
    </svg>
    </Base>
  )
}

NotificationIcon .displayName = 'NotificationIcon '