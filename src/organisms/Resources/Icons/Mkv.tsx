import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Mkv: FC = () => {
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
          d="M9.69995 23L8.49995 18.9C8.59995 19.6 8.59995 20.1 8.59995 20.5V23H7.19995V17.3H9.29995L10.5 21.4L11.7 17.3H13.8V23H12.4V20.5C12.4 20.4 12.4 20.2 12.4 20.1C12.4 20 12.4 19.6 12.5 18.9L11.2 23H9.69995Z"
          fill="#B0CFE0"
        />
        <path
          d="M19.8 23H18.1L17 20.8L16.5 21.1V23H15V17.3H16.6V19.8C16.7 19.6 16.8 19.4 17.1 19.1L18.3 17.3H20L18.2 19.9L19.8 23Z"
          fill="#B0CFE0"
        />
        <path
          d="M23.7001 17.3H25.4L23.5 23H21.7001L19.8 17.3H21.5L22.3 20.2C22.5 20.8 22.5001 21.3 22.6 21.5C22.6 21.3 22.7001 21.1 22.7001 20.8C22.7001 20.5 22.8 20.3 22.8 20.2L23.7001 17.3Z"
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
