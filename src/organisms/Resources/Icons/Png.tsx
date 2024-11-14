import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Png: FC = () => {
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
          d="M11.9 19.1C11.9 19.7 11.7 20.2 11.3 20.6C10.9 21 10.4 21.1 9.70005 21.1H9.30005V23H7.80005V17.3H9.80005C10.5 17.3 11.1 17.5 11.4 17.8C11.7 18.1 11.9 18.5 11.9 19.1ZM9.30005 19.8H9.60005C9.80005 19.8 10 19.7 10.2 19.6C10.4 19.5 10.4 19.3 10.4 19.1C10.4 18.7 10.2 18.5 9.80005 18.5H9.30005V19.8Z"
          fill="#B0CFE0"
        />
        <path
          d="M18.3 23H16.3L14.2 19C14.2 19.6 14.3 20.1 14.3 20.4V23H12.9V17.3H14.9L17 21.3C17 20.7 16.9 20.3 16.9 19.9V17.3H18.3V23Z"
          fill="#B0CFE0"
        />
        <path
          d="M21.8 19.7H24.3V22.8C23.6 23 22.9 23.1 22.1 23.1C21.2 23.1 20.5 22.8 20.1 22.3C19.7 21.8 19.4 21.1 19.4 20.1C19.4 19.2 19.7 18.5 20.2 17.9C20.7 17.3 21.5 17.1 22.4 17.1C22.8 17.1 23.1 17.1 23.4 17.2C23.7 17.3 24 17.4 24.2 17.5L23.7 18.7C23.3 18.5 22.8 18.4 22.3 18.4C21.8 18.4 21.5 18.5 21.3 18.8C21.1 19.1 20.9 19.5 20.9 20.1C20.9 20.6 21 21 21.2 21.3C21.4 21.6 21.7 21.7 22.2 21.7C22.4 21.7 22.6 21.7 22.8 21.6V20.7H21.8V19.7Z"
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
