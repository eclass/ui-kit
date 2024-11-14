import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Doc: FC = () => {
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
          d="M12.7 20C12.7 21 12.4 21.7 11.9 22.2C11.4 22.7 10.7 23 9.70002 23H7.90002V17.3H9.90002C10.8 17.3 11.5 17.5 12 18C12.5 18.5 12.7 19.1 12.7 20ZM11.1 20.1C11.1 19.6 11 19.2 10.8 18.9C10.6 18.6 10.3 18.5 9.90002 18.5H9.40002V21.7H9.70002C10.2 21.7 10.5 21.6 10.7 21.3C10.9 21 11.1 20.6 11.1 20.1Z"
          fill="#B0CFE0"
        />
        <path
          d="M19.1 20.1C19.1 21.1 18.9 21.8 18.4 22.3C17.9 22.8 17.2 23.1 16.3 23.1C15.4 23.1 14.7 22.8 14.2 22.3C13.7 21.8 13.5 21.1 13.5 20.1C13.5 19.1 13.7 18.4 14.2 17.9C14.7 17.4 15.4 17.1 16.3 17.1C17.2 17.1 17.9 17.3 18.4 17.8C18.9 18.3 19.1 19.2 19.1 20.1ZM15.2 20.1C15.2 21.2 15.6 21.8 16.4 21.8C16.8 21.8 17.1 21.7 17.3 21.4C17.5 21.1 17.6 20.7 17.6 20.1C17.6 19.5 17.5 19.1 17.3 18.8C17.1 18.5 16.8 18.4 16.4 18.4C15.6 18.5 15.2 19 15.2 20.1Z"
          fill="#B0CFE0"
        />
        <path
          d="M22.7 18.5C22.3 18.5 22 18.7 21.8 19C21.6 19.3 21.5 19.7 21.5 20.2C21.5 21.3 21.9 21.8 22.8 21.8C23.1 21.8 23.3 21.8 23.5 21.7C23.7 21.6 24 21.5 24.2 21.4V22.7C23.7 22.9 23.2 23 22.6 23C21.7 23 21.1 22.8 20.6 22.2C20.1 21.6 19.9 21 19.9 20C19.9 19.4 20 18.9 20.2 18.4C20.4 17.9 20.7 17.6 21.2 17.4C21.7 17.2 22.1 17 22.7 17C23.3 17 23.9 17.1 24.5 17.4L24 18.8C23.8 18.7 23.6 18.6 23.4 18.6C23.2 18.6 22.9 18.5 22.7 18.5Z"
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
