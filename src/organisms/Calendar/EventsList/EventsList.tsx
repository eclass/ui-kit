import { Calendar } from '@/atoms/Icons/Calendar'
import { Clock } from '@/atoms/Icons/Clock'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { vars } from '@theme'

import { NotificationIcon } from './NotificationIcon'

// Nuevo componente que recibe el texto de día y hora en tres partes
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
  const [isMobile] = useMediaQuery('(max-width: 580px)')
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
      {!isMobile && (
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
      )}

      <Box display="flex" flexDirection="column" gap="8px">
        <Box
          lineHeight="21px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize="16px"
          fontWeight={isMobile ? '400' : '700'}
        >
          {name} {hasNotification && <NotificationIcon />}
        </Box>

        {isMobile && (
          <Box lineHeight="normal" sx={{ '>svg': { marginRight: '4px' } }}>
            <Calendar />
            <Box
              as="span"
              verticalAlign="middle"
              p="0 8px 0 0"
              borderRight={`1px solid ${vars('colors-neutral-platinum')}`}
              mr="8px"
            >
              {day} {date}
            </Box>
            <Clock />
            <Box as="span" verticalAlign="middle">
              {time}
            </Box>
          </Box>
        )}

        {showsCourseName && !initOrEnd && (
          <Box display="flex" gap="4px" alignItems="center">
            {isMobile && <Box height="10px" width="10px" bg={color} borderRadius="50%" />}

            <Box
              as="span"
              color={vars('colors-neutral-gray') ?? '#808080'}
              fontSize="14px"
              display="flex"
              alignItems="center"
              gap="4px"
              lineHeight="normal"
            >
              <strong>{text ? `${text}:` : 'Curso:'}</strong> {courseName}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
