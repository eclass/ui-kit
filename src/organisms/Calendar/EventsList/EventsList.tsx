import { TinyAlert } from '@/atoms'
import { Remote, Time } from '@/atoms/Icons'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { NotificationIcon } from './NotificationIcon'

export interface IEventList {
  color?: string
  courseName?: string
  day: string
  date: string
  duration?: number
  name: string
  hasNotification?: boolean
  onClick?: () => void
  showCourse?: boolean
  showUnit?: boolean
  time: string
  text: string
  type: string
  unitName?: string
  unavailableLabel?: string
  url?: string | null
}

export const EventsList = ({
  courseName,
  color,
  day,
  date,
  duration,
  name,
  hasNotification,
  onClick,
  showCourse,
  showUnit,
  time,
  text,
  type,
  unitName,
  unavailableLabel = 'Aún no disponible',
  url,
}: IEventList): JSX.Element => {
  const border = `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`
  const hoverBg = vars('colors-neutral-cultured2') ?? '#F8F8F8'
  const isAvailable = url === undefined ? true : Boolean(url)
  const isClickable = Boolean(onClick) && isAvailable
  const disabledOpacity = isAvailable ? 1 : 0.5

  const showEventDuration =
    ['online', 'in-person'].includes(type) && duration !== undefined && duration > 0

  const initOrEnd = [
    'end-course',
    'init-course',
    'init-course-flexible',
    'end-course-flexible',
  ].includes(type)

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

  const eventIconStyle = {
    alignItems: 'center',
    display: 'inline-flex',
    height: '24px',
    justifyContent: 'center',
    minWidth: '16px',
  }

  return (
    <Box
      className="eventsList"
      borderTop={border}
      display="flex"
      gap="12px"
      cursor={isClickable ? 'pointer' : 'default'}
      onClick={isClickable ? onClick : undefined}
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
        opacity={disabledOpacity}
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
        {!isAvailable && (
          <TinyAlert
            status="warning"
            text={unavailableLabel}
            sx={{
              padding: '4px 6px',
              '> span': {
                fontSize: '12px',
              },
            }}
          />
        )}

        <Box display="flex" flexDirection="column" gap="8px" opacity={disabledOpacity}>
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
            <Box as="span" sx={detailTextStyle}>
              {type === 'cv-events' ? <></> : <strong>{text ? `${text}:` : 'Curso:'}</strong>}{' '}
              {courseName}
            </Box>
          )}

          {showEventDuration && (
            <Box display="flex" flexDirection="row" gap="8px" flexWrap="wrap">
              <Box
                as="span"
                sx={detailTextStyle}
                paddingRight="8px"
                borderRight={`1px solid ${vars('colors-neutral-platinum')}`}
              >
                <Box as="span" sx={eventIconStyle}>
                  <Remote color={vars('colors-main-ziggurat')} />
                </Box>
                Link clase online
              </Box>
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
    </Box>
  )
}
