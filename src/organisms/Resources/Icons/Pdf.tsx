import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

import { uniqueId } from 'services'

export const Pdf: FC = () => {
  const id = `clip${uniqueId()}`
  return (
    <Icon
      width="70px"
      height="70px"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3171_3625)">
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
          d="M28.7503 41.7923C28.7503 43.1879 28.3391 44.2664 27.5166 45.0276C26.6941 45.7889 25.5238 46.1673 24.0078 46.1673H23.0584V50.3126H19.6831V37.8198H24.0078C25.585 37.8198 26.7706 38.1633 27.5625 38.8545C28.3544 39.5458 28.7503 40.5214 28.7503 41.7923ZM23.0584 43.4176H23.6731C24.1806 43.4176 24.5831 43.2754 24.8828 42.9911C25.1825 42.7067 25.3312 42.313 25.3312 41.812C25.3312 40.9676 24.8653 40.5476 23.9291 40.5476H23.0584V43.4176Z"
          fill="white"
        />
        <path
          d="M41.3438 43.8005C41.3438 45.8851 40.7706 47.4929 39.6222 48.6195C38.4738 49.7461 36.8616 50.3126 34.7812 50.3126H30.7388V37.8198H35.0634C37.0694 37.8198 38.6181 38.3317 39.7075 39.3576C40.7969 40.3836 41.3438 41.8645 41.3438 43.8005ZM37.8416 43.9208C37.8416 42.7767 37.6141 41.9279 37.1613 41.3745C36.7084 40.8211 36.0216 40.5454 35.0984 40.5454H34.1162V47.5433H34.8687C35.8947 47.5433 36.645 47.2458 37.1241 46.6508C37.6031 46.0558 37.8416 45.1458 37.8416 43.9208Z"
          fill="white"
        />
        <path
          d="M46.9066 50.3126H43.5816V37.8198H50.9644V40.528H46.9066V42.9123H50.6494V45.6204H46.9066V50.3126Z"
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
