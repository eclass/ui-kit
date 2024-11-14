import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from '@/services'

export const Pdf: FC = () => {
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
          d="M13.143 19.105C13.143 19.743 12.955 20.236 12.579 20.584C12.203 20.932 11.668 21.105 10.975 21.105H10.541V23H8.99805V17.289H10.975C11.696 17.289 12.238 17.446 12.6 17.762C12.962 18.078 13.143 18.524 13.143 19.105ZM10.541 19.848H10.822C11.054 19.848 11.238 19.783 11.375 19.653C11.512 19.523 11.58 19.343 11.58 19.114C11.58 18.728 11.367 18.536 10.939 18.536H10.541V19.848Z"
          fill="#B0CFE0"
        />
        <path
          d="M18.9 20.023C18.9 20.976 18.638 21.711 18.113 22.226C17.588 22.741 16.851 23 15.9 23H14.052V17.289H16.029C16.946 17.289 17.654 17.523 18.152 17.992C18.65 18.461 18.9 19.138 18.9 20.023ZM17.299 20.078C17.299 19.555 17.195 19.167 16.988 18.914C16.781 18.661 16.467 18.535 16.045 18.535H15.596V21.734H15.94C16.409 21.734 16.752 21.598 16.971 21.326C17.19 21.054 17.299 20.638 17.299 20.078Z"
          fill="#B0CFE0"
        />
        <path
          d="M21.443 23H19.923V17.289H23.298V18.527H21.443V19.617H23.154V20.855H21.443V23Z"
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
