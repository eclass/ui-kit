import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Pptx: FC = () => {
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
          d="M10.5 19.1C10.5 19.7 10.3 20.2 9.90005 20.6C9.50005 21 9.00005 21.1 8.30005 21.1H7.80005V23H6.30005V17.3H8.30005C9.00005 17.3 9.60005 17.5 9.90005 17.8C10.2 18.1 10.5 18.5 10.5 19.1ZM7.80005 19.8H8.10005C8.30005 19.8 8.50005 19.7 8.70005 19.6C8.90005 19.5 8.90005 19.3 8.90005 19.1C8.90005 18.7 8.70005 18.5 8.30005 18.5H7.80005V19.8Z"
          fill="#B0CFE0"
        />
        <path
          d="M15.5 19.1C15.5 19.7 15.3 20.2 14.9 20.6C14.5 21 14 21.1 13.3 21.1H12.9V23H11.4V17.3H13.4C14.1 17.3 14.7 17.5 15 17.8C15.3 18.1 15.5 18.5 15.5 19.1ZM12.9 19.8H13.2C13.4 19.8 13.6 19.7 13.8 19.6C14 19.5 14 19.3 14 19.1C14 18.7 13.8 18.5 13.4 18.5H13V19.8H12.9Z"
          fill="#B0CFE0"
        />
        <path d="M18.9 23H17.4V18.6H16V17.3H20.3V18.6H18.9V23Z" fill="#B0CFE0" />
        <path
          d="M26.3 23H24.5L23.4 21.2L22.3 23H20.6L22.5 20.1L20.7 17.3H22.4L23.4 19.1L24.4 17.3H26.2L24.4 20.2L26.3 23Z"
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
