import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Xls: FC = () => {
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
          d="M14.7 23H13L11.9 21.2L10.7 23H9L10.9 20.1L9.1 17.3H10.8L11.8 19.1L12.8 17.3H14.6L12.8 20.2L14.7 23Z"
          fill="#B0CFE0"
        />
        <path d="M15.3999 23V17.3H16.8999V21.8H19.0999V23H15.3999Z" fill="#B0CFE0" />
        <path
          d="M23.8 21.3C23.8 21.7 23.7 22 23.5 22.2C23.3 22.4 23.1 22.7 22.7 22.8C22.3 22.9 22 23 21.5 23C21.1 23 20.8 23 20.5 22.9C20.2 22.8 20 22.8 19.7 22.6V21.2C20 21.4 20.3 21.5 20.6 21.6C20.9 21.7 21.2 21.7 21.5 21.7C21.7 21.7 21.9 21.7 22 21.6C22.1 21.5 22.2 21.4 22.2 21.3C22.2 21.2 22.2 21.2 22.1 21.1C22 21 22 21 21.9 20.9C21.8 20.8 21.6 20.7 21.1 20.5C20.7 20.3 20.4 20.2 20.3 20C20.2 19.8 20 19.7 19.9 19.5C19.8 19.3 19.8 19.1 19.8 18.8C19.8 18.3 20 17.9 20.4 17.6C20.8 17.3 21.3 17.2 22 17.2C22.6 17.2 23.2 17.3 23.8 17.6L23.3 18.8C22.8 18.6 22.3 18.4 21.9 18.4C21.7 18.4 21.6 18.4 21.5 18.5C21.4 18.6 21.4 18.7 21.4 18.8C21.4 18.9 21.5 19 21.6 19.1C21.7 19.2 22 19.3 22.5 19.6C23 19.8 23.3 20.1 23.5 20.3C23.7 20.5 23.8 20.9 23.8 21.3Z"
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
