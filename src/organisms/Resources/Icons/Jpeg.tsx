import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Jpeg: FC = () => {
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
          d="M7.8 24.8C7.5 24.8 7.3 24.8 7 24.7V23.5C7.1 23.5 7.2 23.5 7.3 23.6C7.4 23.7 7.5 23.6 7.6 23.6C7.9 23.6 8 23.5 8.1 23.4C8.2 23.3 8.3 23 8.3 22.6V17.3H9.9V22.5C9.9 23.3 9.7 23.9 9.4 24.3C9.1 24.7 8.4 24.8 7.8 24.8Z"
          fill="#B0CFE0"
        />
        <path
          d="M15.2001 19.1C15.2001 19.7 15.0001 20.2 14.6001 20.6C14.2001 21 13.7001 21.1 13.0001 21.1H12.6001V23H11.1001V17.3H13.1001C13.8001 17.3 14.4001 17.5 14.7001 17.8C15.0001 18.1 15.2001 18.5 15.2001 19.1ZM12.6001 19.8H12.9001C13.1001 19.8 13.3001 19.7 13.5001 19.6C13.7001 19.5 13.7001 19.3 13.7001 19.1C13.7001 18.7 13.5001 18.5 13.1001 18.5H12.7001V19.8H12.6001Z"
          fill="#B0CFE0"
        />
        <path
          d="M22.9 19.7H25.4V22.8C24.7 23 24 23.1 23.2 23.1C22.3 23.1 21.6 22.8 21.2 22.3C20.8 21.8 20.5 21.1 20.5 20.1C20.5 19.2 20.8 18.5 21.3 17.9C21.8 17.3 22.6 17.1 23.5 17.1C23.9 17.1 24.2 17.1 24.5 17.2C24.8 17.3 25.1 17.4 25.3 17.5L24.8 18.7C24.4 18.5 23.9 18.4 23.4 18.4C22.9 18.4 22.6 18.5 22.4 18.8C22.2 19.1 22 19.6 22 20.2C22 20.7 22.1 21.1 22.3 21.4C22.5 21.7 22.8 21.8 23.3 21.8C23.5 21.8 23.7 21.8 23.9 21.7V20.8H22.9V19.7Z"
          fill="#B0CFE0"
        />
        <path
          d="M19.4 23H16V17.3H19.4V18.5H17.6V19.4H19.3V20.6H17.6V21.7H19.4V23Z"
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
