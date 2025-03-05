import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from 'services'

export const Mp4: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3682)">
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
          d="M22.75 50.3125L20.125 41.3438C20.3437 42.875 20.3438 43.9688 20.3438 44.8438V50.3125H17.2812V37.8438H21.875L24.5 46.8125L27.125 37.8438H31.7188V50.3125H28.4375V44.8438C28.4375 44.625 28.4375 44.1875 28.4375 43.9688C28.4375 43.75 28.4375 42.875 28.6563 41.3438L25.8125 50.3125H22.75Z"
          fill="white"
        />
        <path
          d="M43.3125 41.7813C43.3125 43.0938 42.875 44.1875 42 45.0625C41.125 45.9375 40.0313 46.1563 38.5 46.1563H37.625V50.3125H34.3438V37.8438H38.7188C40.25 37.8438 41.5625 38.2812 42.2187 38.9375C42.875 39.5938 43.3125 40.4688 43.3125 41.7813ZM37.625 43.3125H38.2813C38.7188 43.3125 39.1563 43.0938 39.5938 42.875C40.0313 42.6563 40.0312 42.2188 40.0312 41.7813C40.0312 40.9063 39.5938 40.4688 38.7188 40.4688H37.8437V43.3125H37.625Z"
          fill="white"
        />
        <path
          d="M53.8125 47.9063H52.5V50.3125H49.2187V47.9063H44.1875V45.5L49.4375 37.8438H52.5V45.5H53.8125V47.9063ZM49.2187 45.2813V43.75C49.2187 43.5313 49.2187 43.0938 49.2187 42.6563C49.2187 42.2188 49.2187 42 49.2187 42C49 42.4375 48.7812 42.875 48.5625 43.3125L47.25 45.2813H49.2187Z"
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
