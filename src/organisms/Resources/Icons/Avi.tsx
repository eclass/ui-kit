import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Avi: FC = () => {
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
          d="M13 23L12.7 21.9H10.8L10.6 23H8.90002L10.8 17.3H12.9L14.8 23H13ZM12.4 20.7L12.2 19.8C12.1 19.6 12.1 19.3 12 19C11.9 18.7 11.9 18.4 11.8 18.3C11.8 18.4 11.7 18.7 11.7 19C11.7 19.3 11.5 19.9 11.2 20.8H12.4V20.7Z"
          fill="#B0CFE0"
        />
        <path
          d="M18.6 17.3H20.3L18.4 23H16.6L14.7 17.3H16.4L17.2 20.2C17.4 20.8 17.4 21.3 17.5 21.5C17.5 21.3 17.6 21.1 17.6 20.8C17.6 20.5 17.7 20.3 17.7 20.2L18.6 17.3Z"
          fill="#B0CFE0"
        />
        <path d="M20.9 23V17.3H22.5V23H20.9Z" fill="#B0CFE0" />
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
