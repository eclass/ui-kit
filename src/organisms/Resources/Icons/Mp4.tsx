import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Mp4: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${id})`}>
        <path d="M20 1V9H28" stroke="#B0CFE0" strokeWidth="2" strokeMiterlimit="10" />
        <path
          d="M28 13V9L20 1H4V13"
          stroke="#B0CFE0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
        <path
          d="M4 27V31H28V27"
          stroke="#B0CFE0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
        <path
          d="M10.4 23L9.20002 18.9C9.30002 19.6 9.30002 20.1 9.30002 20.5V23H7.90002V17.3H10L11.2 21.4L12.4 17.3H14.5V23H13V20.5C13 20.4 13 20.2 13 20.1C13 20 13 19.6 13.1 18.9L11.8 23H10.4Z"
          fill="#B0CFE0"
        />
        <path
          d="M19.8 19.1C19.8 19.7 19.6 20.2 19.2 20.6C18.8 21 18.3 21.1 17.6 21.1H17.2V23H15.7V17.3H17.7C18.4 17.3 19 17.5 19.3 17.8C19.6 18.1 19.8 18.5 19.8 19.1ZM17.2 19.8H17.5C17.7 19.8 17.9 19.7 18.1 19.6C18.3 19.5 18.3 19.3 18.3 19.1C18.3 18.7 18.1 18.5 17.7 18.5H17.3V19.8H17.2Z"
          fill="#B0CFE0"
        />
        <path
          d="M24.6 21.9H24V23H22.5V21.9H20.2V20.8L22.6 17.3H24V20.8H24.6V21.9ZM22.5 20.7V20C22.5 19.9 22.5 19.7 22.5 19.5C22.5 19.3 22.5 19.2 22.5 19.2C22.4 19.4 22.3 19.6 22.2 19.8L21.6 20.7H22.5Z"
          fill="#B0CFE0"
        />
        <path
          d="M31 13H1V27H31V13Z"
          stroke="#B0CFE0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}
