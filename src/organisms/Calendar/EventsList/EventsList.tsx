import { Box } from '@chakra-ui/react'

import { vars } from '@theme'
import { MapIndicator, Remote, Time } from '@/atoms/Icons'
import { NotificationIcon } from './NotificationIcon'

export interface IEventList {
  color?: string
  courseName?: string
  day: string
  date: string
  duration?: number
  name: string
  hasNotification?: boolean
  locationSede?: string
  onClick?: () => void
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
  duration,
  name,
  hasNotification,
  locationSede,
  onClick,
  showCourse,
  showUnit,
  time,
  text,
  type,
  unitName,
}: IEventList): JSX.Element => {
  const border = `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`
  const hoverBg = vars('colors-neutral-cultured2') ?? '#F8F8F8'
  const isClickable = Boolean(onClick)
  const isInPersonPresencial = type === 'in-person-presencial'
  const showEventLocation = !isInPersonPresencial || Boolean(locationSede)

  const showEventDuration =
    ['online', 'in-person', 'in-person-presencial'].includes(type) &&
    duration !== undefined &&
    duration > 0

  const initOrEnd = [
    'end-course',
    'init-course',
    'init-course-flexible',
    'end-course-flexible',
  ].includes(type)

  return (
    <Box
      className="eventsList"
      borderTop={border}
      display="flex"
      gap="12px"
      cursor={isClickable ? 'pointer' : 'default'}
      onClick={onClick}
      p="16px"
      transition="background-color 0.2s ease"
      _hover={isClickable ? { bg: hoverBg } : undefined}
    >
      <Box
        bg={color}
        minW="88px"
        minH="74px"
        maxW="88px"
        maxH="72px"
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
        <Box sx={dateTextStyle}>{time}</Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="8px" w="100%">
        <Box
          alignItems="center"
          display="flex"
          fontSize="16px"
          fontWeight="700"
          justifyContent="space-between"
          lineHeight="21px"
          sx={{
            '>span': {
              width: 'calc(100% - 12px)',
            },
            '>svg': {
              alignSelf: 'flex-start',
            },
          }}
        >
          <span>{name}</span>
          {hasNotification && <NotificationIcon />}
        </Box>

        {showCourse && !initOrEnd && (
          <Box as="span" sx={courseDetailTextStyle}>
            {type === 'cv-events' ? <></> : <strong>{text ? `${text}:` : 'Curso:'}</strong>}{' '}
            {courseName}
          </Box>
        )}

        {showEventDuration && (
          <Box display="flex" flexDirection="row" gap="8px" flexWrap="wrap">
            {showEventLocation && (
              <Box
                as="span"
                sx={detailTextStyle}
                paddingRight="8px"
                borderRight={`1px solid ${vars('colors-neutral-platinum')}`}
              >
                <Box as="span" sx={eventIconStyle}>
                  {isInPersonPresencial ? (
                    <MapIndicator color={vars('colors-main-ziggurat')} />
                  ) : (
                    <Remote color={vars('colors-main-ziggurat')} />
                  )}
                </Box>
                {isInPersonPresencial ? locationSede : 'Link clase online'}
              </Box>
            )}
            <Box as="span" sx={detailTextStyle}>
              <Box as="span" sx={eventIconStyle}>
                <Time color={vars('colors-main-ziggurat')} />
              </Box>
              {duration} min
            </Box>
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

const dateTextStyle = {
  color: vars('colors-neutral-white'),
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '100%',
}

const detailTextStyle = {
  color: vars('colors-neutral-gray') ?? '#808080',
  fontSize: '14px',
  alignItems: 'center',
  display: 'flex',
  gap: '4px',
  lineHeight: 'normal',
}

const courseDetailTextStyle = {
  ...detailTextStyle,
  alignItems: 'flex-start',
}

const eventIconStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  height: '24px',
  justifyContent: 'center',
  minWidth: '16px',
}
