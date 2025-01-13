import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Avi: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3696)">
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
          d="M28.4375 50.3125L27.7812 47.9063H23.625L23.1875 50.3125H19.4688L23.625 37.8438H28.2188L32.375 50.3125H28.4375ZM27.125 45.2813L26.6875 43.3125C26.4688 42.875 26.4688 42.2188 26.25 41.5625C26.0313 40.9063 26.0313 40.25 25.8125 40.0312C25.8125 40.25 25.5938 40.9063 25.5938 41.5625C25.5938 42.2188 25.1563 43.5312 24.5 45.5H27.125V45.2813Z"
          fill="white"
        />
        <path
          d="M40.6875 37.8438H44.4062L40.25 50.3125H36.3125L32.1562 37.8438H35.875L37.625 44.1875C38.0625 45.5 38.0625 46.5938 38.2813 47.0313C38.2813 46.5938 38.5 46.1562 38.5 45.5C38.5 44.8438 38.7188 44.4063 38.7188 44.1875L40.6875 37.8438Z"
          fill="white"
        />
        <path d="M45.7188 50.3125V37.8438H49.2188V50.3125H45.7188Z" fill="white" />
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
