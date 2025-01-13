import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Ppt: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3539)">
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
          d="M28.875 41.7813C28.875 43.0938 28.4375 44.1875 27.5625 45.0625C26.6875 45.9375 25.5938 46.1563 24.0625 46.1563H22.9688V50.3125H19.6875V37.8438H24.0625C25.5938 37.8438 26.9062 38.2812 27.5625 38.9375C28.2187 39.5938 28.875 40.4688 28.875 41.7813ZM22.9688 43.3125H23.625C24.0625 43.3125 24.5 43.0938 24.9375 42.875C25.375 42.6563 25.375 42.2188 25.375 41.7813C25.375 40.9063 24.9375 40.4688 24.0625 40.4688H22.9688V43.3125Z"
          fill="white"
        />
        <path
          d="M39.8122 41.7813C39.8122 43.0938 39.3747 44.1875 38.4997 45.0625C37.6247 45.9375 36.5309 46.1563 34.9997 46.1563H34.1247V50.3125H30.8434V37.8438H35.2184C36.7497 37.8438 38.0622 38.2812 38.7184 38.9375C39.3747 39.5938 39.8122 40.4688 39.8122 41.7813ZM34.1247 43.3125H34.7809C35.2184 43.3125 35.6559 43.0938 36.0934 42.875C36.5309 42.6563 36.5309 42.2188 36.5309 41.7813C36.5309 40.9063 36.0934 40.4688 35.2184 40.4688H34.3434V43.3125H34.1247Z"
          fill="white"
        />
        <path
          d="M47.2499 50.3125H43.9686V40.6875H40.9061V37.8438H50.3124V40.6875H47.2499V50.3125Z"
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
