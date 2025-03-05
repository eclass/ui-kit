import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from 'services'

export const Gif: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3597)">
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
          d="M27.125 43.0938H32.5937V49.875C31.0625 50.3125 29.5312 50.5312 27.7812 50.5312C25.8125 50.5312 24.2812 49.875 23.4062 48.7812C22.5312 47.6875 21.875 46.1562 21.875 43.9688C21.875 42 22.5313 40.4687 23.625 39.1562C24.7188 37.8437 26.4688 37.4062 28.4375 37.4062C29.3125 37.4062 29.9688 37.4063 30.625 37.625C31.2812 37.8438 31.9375 38.0625 32.375 38.2812L31.2812 40.9063C30.4062 40.4688 29.3125 40.25 28.2187 40.25C27.125 40.25 26.4687 40.4687 26.0312 41.125C25.5937 41.7812 25.1562 42.6562 25.1562 43.9688C25.1562 45.0625 25.375 45.9375 25.8125 46.5937C26.25 47.25 26.9063 47.4688 28 47.4688C28.4375 47.4688 28.875 47.4688 29.3125 47.25V45.2813H27.125V43.0938Z"
          fill="white"
        />
        <path d="M35 50.3125V37.8438H38.5V50.3125H35Z" fill="white" />
        <path
          d="M44.4062 50.3125H41.125V37.8438H48.5625V40.4688H44.4062V42.875H48.125V45.5H44.4062V50.3125Z"
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
