import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Pptx: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3553)">
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
          d="M22.9688 41.7813C22.9688 43.0938 22.5312 44.1875 21.6562 45.0625C20.7812 45.9375 19.6875 46.1563 18.1562 46.1563H17.0625V50.3125H13.7812V37.8438H18.1562C19.6875 37.8438 21 38.2812 21.6562 38.9375C22.3125 39.5938 22.9688 40.4688 22.9688 41.7813ZM17.0625 43.3125H17.7188C18.1563 43.3125 18.5937 43.0938 19.0312 42.875C19.4687 42.6563 19.4687 42.2188 19.4687 41.7813C19.4687 40.9063 19.0312 40.4688 18.1562 40.4688H17.0625V43.3125Z"
          fill="white"
        />
        <path
          d="M33.9063 41.7813C33.9063 43.0938 33.4688 44.1875 32.5938 45.0625C31.7188 45.9375 30.625 46.1563 29.0938 46.1563H28.2188V50.3125H24.9375V37.8438H29.3125C30.8438 37.8438 32.1563 38.2812 32.8125 38.9375C33.4688 39.5938 33.9063 40.4688 33.9063 41.7813ZM28.2188 43.3125H28.875C29.3125 43.3125 29.75 43.0938 30.1875 42.875C30.625 42.6563 30.625 42.2188 30.625 41.7813C30.625 40.9063 30.1875 40.4688 29.3125 40.4688H28.4375V43.3125H28.2188Z"
          fill="white"
        />
        <path
          d="M41.3437 50.3125H38.0625V40.6875H35V37.8438H44.4062V40.6875H41.3437V50.3125Z"
          fill="white"
        />
        <path
          d="M57.5312 50.3125H53.5937L51.1875 46.375L48.7812 50.3125H45.0625L49.2187 43.9688L45.2813 37.8438H49L51.1875 41.7813L53.375 37.8438H57.3125L53.375 44.1875L57.5312 50.3125Z"
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
