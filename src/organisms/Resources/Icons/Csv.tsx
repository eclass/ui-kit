import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Csv: FC = () => {
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
          d="M11.5 18.5C11.1 18.5 10.8 18.7 10.6 19C10.4 19.3 10.3 19.7 10.3 20.2C10.3 21.3 10.7 21.8 11.6 21.8C11.9 21.8 12.1 21.8 12.3 21.7C12.5 21.6 12.8 21.5 13 21.4V22.7C12.5 22.9 12 23 11.4 23C10.5 23 9.89995 22.8 9.39995 22.2C8.89995 21.6 8.69995 21 8.69995 20C8.69995 19.4 8.79995 18.9 8.99995 18.4C9.19995 17.9 9.49995 17.6 9.99995 17.4C10.5 17.2 10.9 17 11.5 17C12.1 17 12.7 17.1 13.3 17.4L12.8 18.6C12.6 18.5 12.4 18.4 12.2 18.4C12 18.4 11.7 18.5 11.5 18.5Z"
          fill="#B0CFE0"
        />
        <path
          d="M17.9 21.3C17.9 21.7 17.8 22 17.6 22.2C17.4 22.4 17.2 22.7 16.8 22.8C16.4 22.9 16.1 23 15.6 23C15.2 23 14.9 23 14.6 22.9C14.3 22.8 14.1 22.8 13.8 22.6V21.2C14.1 21.4 14.4 21.5 14.7 21.6C15 21.7 15.3 21.7 15.6 21.7C15.8 21.7 16 21.7 16.1 21.6C16.2 21.5 16.3 21.4 16.3 21.3C16.3 21.2 16.3 21.2 16.2 21.1C16.1 21 16.1 21.1 16 21C15.9 20.9 15.7 20.8 15.2 20.6C14.8 20.4 14.5 20.3 14.4 20.1C14.3 19.9 14.1 19.8 14 19.6C13.9 19.4 13.9 19.2 13.9 18.9C13.9 18.4 14.1 18 14.5 17.7C14.9 17.4 15.4 17.3 16.1 17.3C16.7 17.3 17.3 17.4 17.9 17.7L17.4 18.9C16.9 18.7 16.4 18.5 16 18.5C15.8 18.5 15.7 18.5 15.6 18.6C15.5 18.7 15.5 18.8 15.5 18.9C15.5 19 15.6 19.1 15.7 19.2C15.8 19.3 16.1 19.4 16.6 19.7C17.1 19.9 17.4 20.2 17.6 20.4C17.8 20.6 17.9 20.9 17.9 21.3Z"
          fill="#B0CFE0"
        />
        <path
          d="M22 17.3H23.7L21.8 23H20L18.1 17.3H19.8L20.6 20.2C20.8 20.8 20.8 21.3 20.9 21.5C20.9 21.3 21 21.1 21 20.8C21 20.5 21.1 20.3 21.1 20.2L22 17.3Z"
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
