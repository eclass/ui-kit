import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from 'services'

export const Docx: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3752)">
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
          d="M21.6562 43.75C21.6562 45.9375 21 47.4688 19.9063 48.5625C18.8125 49.6563 17.0625 50.3125 15.0938 50.3125H10.9375V37.8438H15.3125C17.2812 37.8438 18.8125 38.2813 19.9063 39.375C21 40.4688 21.6562 41.7813 21.6562 43.75ZM18.1563 43.9688C18.1563 42.875 17.9375 42 17.5 41.3438C17.0625 40.6875 16.1875 40.4688 15.3125 40.4688H14.2188V47.4688H14.875C15.9688 47.4688 16.625 47.25 17.0625 46.5938C17.5 45.9375 18.1563 45.0625 18.1563 43.9688Z"
          fill="white"
        />
        <path
          d="M35.4375 43.9688C35.4375 46.1562 35 47.6875 33.9062 48.7812C32.8125 49.875 31.2812 50.5312 29.3125 50.5312C27.3437 50.5312 25.8125 49.875 24.7187 48.7812C23.625 47.6875 23.1875 46.1562 23.1875 43.9688C23.1875 41.7812 23.625 40.25 24.7187 39.1562C25.8125 38.0625 27.3437 37.4062 29.3125 37.4062C31.2812 37.4062 32.8125 37.8437 33.9062 38.9375C35 40.0312 35.4375 42 35.4375 43.9688ZM26.9062 43.9688C26.9062 46.375 27.7812 47.6875 29.5312 47.6875C30.4062 47.6875 31.0625 47.4687 31.5 46.8125C31.9375 46.1562 32.1562 45.2812 32.1562 43.9688C32.1562 42.6562 31.9375 41.7812 31.5 41.125C31.0625 40.4687 30.4062 40.25 29.5312 40.25C27.7812 40.4687 26.9062 41.5625 26.9062 43.9688Z"
          fill="white"
        />
        <path
          d="M43.3125 40.4687C42.4375 40.4687 41.7812 40.9062 41.3437 41.5625C40.9062 42.2187 40.6875 43.0938 40.6875 44.1875C40.6875 46.5938 41.5625 47.6875 43.5312 47.6875C44.1875 47.6875 44.625 47.6875 45.0625 47.4688C45.5 47.25 46.1562 47.0312 46.5937 46.8125V49.6562C45.5 50.0938 44.4063 50.3125 43.0938 50.3125C41.125 50.3125 39.8125 49.875 38.7188 48.5625C37.625 47.25 37.1875 46.1562 37.1875 44.1875C37.1875 42.875 37.4062 41.7812 37.8437 40.6875C38.2812 39.5937 38.9375 38.9375 40.0312 38.5C41.125 38.0625 42 37.625 43.3125 37.625C44.625 37.625 45.9375 37.8437 47.25 38.5L46.1563 41.125C45.7188 40.9062 45.2812 40.6875 44.8438 40.6875C44.4062 40.6875 43.75 40.4687 43.3125 40.4687Z"
          fill="white"
        />
        <path
          d="M60.375 50.3125H56.4375L54.0313 46.375L51.625 50.3125H47.9062L52.0625 43.9688L48.125 37.8438H51.8438L54.0313 41.7813L56.2188 37.8438H60.1563L56.2188 44.1875L60.375 50.3125Z"
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
