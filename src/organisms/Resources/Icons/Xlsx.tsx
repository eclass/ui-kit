import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Xlsx: FC = () => {
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
          d="M11.3 23H9.59998L8.49998 21.2L7.29998 23H5.59998L7.49998 20.1L5.69998 17.3H7.39998L8.39998 19.1L9.39998 17.3H11.2L9.39998 20.2L11.3 23Z"
          fill="#B0CFE0"
        />
        <path d="M12 23V17.3H13.5V21.8H15.7V23H12Z" fill="#B0CFE0" />
        <path
          d="M20.4 21.3C20.4 21.7 20.3 22 20.1 22.2C19.9 22.4 19.7 22.7 19.3 22.8C18.9 22.9 18.6 23 18.1 23C17.7 23 17.4 23 17.1 22.9C16.8 22.8 16.6 22.8 16.3 22.6V21.2C16.6 21.4 16.9001 21.5 17.2001 21.6C17.5001 21.7 17.8001 21.7 18.1 21.7C18.3001 21.7 18.5001 21.7 18.6 21.6C18.7 21.5 18.8 21.4 18.8 21.3C18.8 21.2 18.8001 21.2 18.7001 21.1C18.6001 21 18.6 21 18.5 20.9C18.4 20.8 18.2001 20.7 17.7001 20.5C17.3001 20.3 17 20.2 16.9 20C16.8 19.8 16.6 19.7 16.5 19.5C16.4 19.3 16.4 19.1 16.4 18.8C16.4 18.3 16.6 17.9 17 17.6C17.4 17.3 17.9 17.2 18.6 17.2C19.2 17.2 19.8 17.3 20.4 17.6L19.9 18.8C19.4 18.6 18.9 18.4 18.5 18.4C18.3 18.4 18.2 18.4 18.1 18.5C18 18.6 18 18.7 18 18.8C18 18.9 18.1001 19 18.2001 19.1C18.3001 19.2 18.6 19.3 19.1 19.6C19.6 19.8 19.9 20.1 20.1 20.3C20.3 20.5 20.4 20.9 20.4 21.3Z"
          fill="#B0CFE0"
        />
        <path
          d="M26.4 23H24.6L23.5 21.2L22.4 23H20.7L22.6 20.1L20.7999 17.3H22.5L23.5 19.1L24.5 17.3H26.2999L24.5 20.2L26.4 23Z"
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
