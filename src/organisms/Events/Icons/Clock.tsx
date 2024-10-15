import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

interface ClockProps {
  color?: string
}

export const Clock: FC<ClockProps> = ({ color = 'white' }) => {
  return (
    <Icon
      width="16px"
      height="17px"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5ZM7 9.5H12V7.5H9V4.5H7V9.5Z"
        fill={color}
      />
    </Icon>
  )
}
