import { Calendar } from '@/atoms/Icons/Calendar'
import { Clock } from '@/atoms/Icons/Clock'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { NotificationIcon } from './NotificationIcon'

export interface IEventList {
  hasNotification?: boolean
  isDropdown?: boolean
  name: string
  color?: string
  courseName?: string
  text: string
  date: string
  hours: string
}

export const EventsList = ({
  hasNotification,
  isDropdown,
  name,
  courseName,
  color,
  text,
  date,
  hours,
}: IEventList): JSX.Element => {
  const border = `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`

  return (
    <Box className="eventsList" borderTop={border} padding="16px 24px">
      <Box display="flex" flexDirection="column" gap="8px">
        <Box
          lineHeight="21px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize="16px"
        >
          {name} {hasNotification && <NotificationIcon />}
        </Box>
        <Box
          display="flex"
          lineHeight="19px"
          fontSize="14px"
          sx={{
            svg: {
              marginRight: '4px',
            },
            span: {
              verticalAlign: 'middle',
            },
          }}
        >
          <Box paddingRight="8px" borderRight={border}>
            <Calendar />
            <span>{date}</span>
          </Box>
          <Box paddingLeft="8px">
            <Clock />
            <span>{hours}</span>
          </Box>
        </Box>
        {isDropdown && (
          <Box display="flex" alignItems="center" gap="4px" lineHeight="19px">
            <Box
              h="10px"
              w="10px"
              bg={color}
              borderRadius="50%"
              display="block"
              alignSelf="flex-start"
              mt="4px"
            />
            <Box as="span" color={vars('colors-neutral-gray') ?? '#808080'} fontSize="14px">
              <strong>{text ?? 'Curso'}:</strong> {courseName}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
