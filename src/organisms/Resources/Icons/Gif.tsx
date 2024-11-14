import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Gif: FC = () => {
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
          d="M12.4 19.7H14.9V22.8C14.2 23 13.5 23.1 12.7 23.1C11.8 23.1 11.1 22.8 10.7 22.3C10.3 21.8 10 21.1 10 20.1C10 19.2 10.3 18.5 10.8 17.9C11.3 17.3 12.1 17.1 13 17.1C13.4 17.1 13.7 17.1 14 17.2C14.3 17.3 14.6 17.4 14.8 17.5L14.3 18.7C13.9 18.5 13.4 18.4 12.9 18.4C12.4 18.4 12.1 18.5 11.9 18.8C11.7 19.1 11.5 19.5 11.5 20.1C11.5 20.6 11.6 21 11.8 21.3C12 21.6 12.3 21.7 12.8 21.7C13 21.7 13.2 21.7 13.4 21.6V20.7H12.4V19.7Z"
          fill="#B0CFE0"
        />
        <path d="M16 23V17.3H17.6V23H16Z" fill="#B0CFE0" />
        <path d="M20.3 23H18.8V17.3H22.2001V18.5H20.3V19.6H22V20.8H20.3V23Z" fill="#B0CFE0" />
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
