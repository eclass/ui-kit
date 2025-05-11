import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { NotificationIcon } from './NotificationIcon'

//Nuevo componente que recibe el texto de día y hora en tres partes
export interface IEventList {
  color?: string
  courseName?: string
  day: string
  date: string
  hasNotification?: boolean
  showsCourseName?: boolean
  time: string
  name: string
  text: string
  type: string
}

export const EventsList = ({
  courseName,
  color,
  day,
  date,
  hasNotification,
  showsCourseName,
  time,
  name,
  text,
  type,
}: IEventList): JSX.Element => {
  const border = `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`

  const initOrEnd = [
    'end-course',
    'init-course',
    'init-course-flexible',
    'end-course-flexible',
  ].includes(type)

  const dateTextStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: vars('colors-neutral-white'),
    lineHeight: '100%',
  }

  return (
    <Box className="eventsList" borderTop={border} p="16px 24px" display="flex" gap="12px">
      <Box
        bg={color}
        minW="80px"
        minH="80px"
        maxW="80px"
        maxH="80px"
        borderRadius="4px"
        p="8px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box as="span" sx={dateTextStyle}>
          {day}
        </Box>
        <Box as="span" sx={dateTextStyle}>
          {date}
        </Box>
        <Box as="span" fontSize="14px" fontWeight="700" color={vars('colors-neutral-white')}>
          {time}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="8px">
        <Box
          lineHeight="21px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize="16px"
          fontWeight="700"
        >
          {name} {hasNotification && <NotificationIcon />}
        </Box>
        {showsCourseName && !initOrEnd && (
          <Box display="flex" alignItems="center" gap="4px" lineHeight="19px">
            <Box as="span" color={vars('colors-neutral-gray') ?? '#808080'} fontSize="14px">
              <strong>{text ? `${text}:` : 'Curso:'}</strong> {courseName}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
