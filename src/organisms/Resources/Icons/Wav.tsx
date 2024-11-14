import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Wav: FC = () => {
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
          d="M12.9 23H11.1L10.6 20.5C10.6 20.4 10.5 20.2 10.5 19.9C10.5 19.6 10.4 19.3 10.4 19.1C10.4 19.3 10.3 19.5 10.3 19.7C10.3 19.9 10.2 20.2 10.2 20.4C10.2 20.6 9.90005 21.5 9.50005 23H7.70005L6.30005 17.3H7.80005L8.40005 20.2C8.50005 20.8 8.60005 21.3 8.70005 21.7C8.70005 21.4 8.80005 21.1 8.90005 20.6C9.00005 20.1 9.10005 19.8 9.10005 19.5L9.60005 17.3H11L11.5 19.5C11.6 19.8 11.7 20.2 11.8 20.7C11.9 21.2 11.9 21.5 12 21.7C12 21.4 12.1 20.9 12.3 20.2L12.9 17.3H14.4L12.9 23Z"
          fill="#B0CFE0"
        />
        <path
          d="M18.6 23L18.3 21.9H16.4L16.2 23H14.5L16.4 17.3H18.5L20.4 23H18.6ZM18 20.7L17.8 19.8C17.7 19.6 17.7 19.3 17.6 19C17.5 18.7 17.5 18.4 17.4 18.3C17.4 18.4 17.3 18.7 17.3 19C17.3 19.3 17.1 19.9 16.8 20.8H18V20.7Z"
          fill="#B0CFE0"
        />
        <path
          d="M24.1 17.3H25.8L24 23H22.2001L20.3 17.3H22L22.8 20.2C23 20.8 23.0001 21.3 23.1 21.5C23.1 21.3 23.2001 21.1 23.2001 20.8C23.2001 20.5 23.3 20.3 23.3 20.2L24.1 17.3Z"
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
