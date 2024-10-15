import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

interface CalendarProps {
  color?: string
}

export const Calendar: FC<CalendarProps> = ({ color = 'white' }) => {
  return (
    <Icon
      width="16px"
      height="17px"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2.5H13V0.5H11V2.5H9V0.5H7V2.5H5V0.5H3V2.5H1C0.447 2.5 0 2.947 0 3.5V15.5C0 16.053 0.447 16.5 1 16.5H15C15.553 16.5 16 16.053 16 15.5V3.5C16 2.947 15.553 2.5 15 2.5ZM14 14.5H2V5.5H14V14.5Z"
        fill={color}
      />
      <path d="M6 7.5H4V9.5H6V7.5Z" fill={color} />
      <path d="M9 7.5H7V9.5H9V7.5Z" fill={color} />
      <path d="M6 10.5H4V12.5H6V10.5Z" fill={color} />
      <path d="M9 10.5H7V12.5H9V10.5Z" fill={color} />
      <path d="M12 7.5H10V9.5H12V7.5Z" fill={color} />
      <path d="M12 10.5H10V12.5H12V10.5Z" fill={color} />
    </Icon>
  )
}
