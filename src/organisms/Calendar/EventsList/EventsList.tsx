import { Calendar } from '@/atoms/Icons/Calendar'
import { Clock } from '@/atoms/Icons/Clock'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { vars } from '@theme'

import { NotificationIcon } from './NotificationIcon'

export interface IEventList {
  color?: string
  courseName?: string
  day: string
  date: string
  name: string
  hasNotification?: boolean
  showCourse?: boolean
  showUnit?: boolean
  time: string
  text: string
  type: string
  unitName?: string
}

export const EventsList = ({
  courseName,
  color,
  day,
  date,
  name,
  hasNotification,
  showCourse,
  showUnit,
  time,
  text,
  type,
  unitName,
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

  const detailTextStyle = {
    color: vars('colors-neutral-gray') ?? '#808080',
    fontSize: '14px',
    display: 'flex',
    gap: '4px',
    lineHeight: 'normal',
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

      <Box display="flex" flexDirection="column" gap="8px" w="100%">
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

        {showCourse && !initOrEnd && (
          <Box display="flex" gap="4px" alignItems="baseline">
            {isMobile && <Box height="10px" width="10px" bg={color} borderRadius="50%" />}

            <Box as="span" sx={detailTextStyle}>
              <strong>{text ? `${text}:` : 'Curso:'}</strong> {courseName}
            </Box>
          </Box>
        )}

        {showUnit && !initOrEnd && (
          <Box display="flex" gap="4px" alignItems="baseline">
            {isMobile && <Box height="10px" width="10px" bg={color} borderRadius="50%" />}

            <Box as="span" sx={detailTextStyle}>
              {unitName}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
