import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Wav: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3738)">
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
          d="M28.2187 50.3125H24.2812L23.1875 44.8438C23.1875 44.625 22.9688 44.1875 22.9688 43.5313C22.9688 42.875 22.75 42.2188 22.75 41.7813C22.75 42.2188 22.5312 42.6563 22.5312 43.0938C22.5312 43.5313 22.3125 44.1875 22.3125 44.625C22.3125 45.0625 21.6562 47.0313 20.7812 50.3125H16.8437L13.7812 37.8438H17.0625L18.375 44.1875C18.5937 45.5 18.8125 46.5938 19.0312 47.4688C19.0312 46.8125 19.25 46.1563 19.4687 45.0625C19.6875 43.9688 19.9063 43.3125 19.9063 42.6563L21 37.8438H24.0625L25.1562 42.6563C25.375 43.3125 25.5938 44.1875 25.8125 45.2813C26.0312 46.375 26.0312 47.0313 26.25 47.4688C26.25 46.8125 26.4688 45.7188 26.9062 44.1875L28.2187 37.8438H31.5L28.2187 50.3125Z"
          fill="white"
        />
        <path
          d="M40.6875 50.3125L40.0312 47.9063H35.875L35.4375 50.3125H31.7188L35.875 37.8438H40.4688L44.625 50.3125H40.6875ZM39.375 45.2813L38.9375 43.3125C38.7187 42.875 38.7188 42.2188 38.5 41.5625C38.2813 40.9063 38.2812 40.25 38.0625 40.0312C38.0625 40.25 37.8437 40.9063 37.8437 41.5625C37.8437 42.2188 37.4062 43.5312 36.75 45.5H39.375V45.2813Z"
          fill="white"
        />
        <path
          d="M52.7188 37.8438H56.4375L52.5 50.3125H48.5625L44.4062 37.8438H48.125L49.875 44.1875C50.3125 45.5 50.3125 46.5938 50.5313 47.0313C50.5313 46.5938 50.75 46.1562 50.75 45.5C50.75 44.8438 50.9688 44.4063 50.9688 44.1875L52.7188 37.8438Z"
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
