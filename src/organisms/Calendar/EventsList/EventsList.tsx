import { Box } from '@chakra-ui/react'
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
    display: 'inline',
    gap: '4px',
    lineHeight: 'normal',
  }

  return (
    <Box className="eventsList" borderTop={border} p="16px" display="flex" gap="12px">
      <Box
        bg={color}
        minW="108px"
        minH="80px"
        maxW="108px"
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
        <Box
          as="span"
          fontSize="14px"
          fontWeight="700"
          color={vars('colors-neutral-white')}
          lineHeight="normal"
        >
          {time}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="8px" w="100%">
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

        {showCourse && !initOrEnd && (
          <Box as="span" sx={detailTextStyle}>
            <strong>{text ? `${text}:` : 'Curso:'}</strong> {courseName}
          </Box>
        )}

        {showUnit && !initOrEnd && (
          <Box display="flex" gap="4px" alignItems="baseline">
            <Box as="span" sx={detailTextStyle}>
              {unitName}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
