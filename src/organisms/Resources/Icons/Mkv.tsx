import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from 'services'

export const Mkv: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3710)">
        <path
          d="M43.75 2.1875V19.6875H61.25"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
        <path
          d="M8.75 59.0625V67.8125H61.25V59.0625"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
        <path
          d="M21.2188 50.3125L18.5938 41.3438C18.8125 42.875 18.8125 43.9688 18.8125 44.8438V50.3125H15.75V37.8438H20.3438L22.9688 46.8125L25.5938 37.8438H30.1875V50.3125H27.125V44.8438C27.125 44.625 27.125 44.1875 27.125 43.9688C27.125 43.75 27.125 42.875 27.3438 41.3438L24.5 50.3125H21.2188Z"
          fill="white"
        />
        <path
          d="M43.3125 50.3125H39.5938L37.1875 45.5L36.0938 46.1563V50.3125H32.8125V37.8438H36.3125V43.3125C36.5313 42.875 36.75 42.4375 37.4063 41.7813L40.0312 37.8438H43.75L39.8125 43.5313L43.3125 50.3125Z"
          fill="white"
        />
        <path
          d="M51.8438 37.8438H55.5625L51.4063 50.3125H47.4688L43.3125 37.8438H47.0313L48.7812 44.1875C49.2188 45.5 49.2188 46.5938 49.4375 47.0313C49.4375 46.5938 49.6563 46.1562 49.6563 45.5C49.6563 44.8438 49.875 44.4063 49.875 44.1875L51.8438 37.8438Z"
          fill="white"
        />
        <path
          d="M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="70px" height="70px" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}
