import { Box, MenuGroup } from '@chakra-ui/react'

import { BtnLink } from '@/molecules'
import { EventsList } from '@/organisms/Calendar'
import { vars } from '@theme'
import { Event } from '../../types'

interface IEventsGroupProps {
  colors?: Record<string, string>
  events: Event[]
  hasMoreNext?: boolean
  onClickEvent?: (event?: Event) => void
  redirect?: () => void
  text: string
  textSeeMore?: string
  textLinkMore?: string
  title: string
}

export const EventsGroup = ({
  colors,
  events,
  hasMoreNext,
  onClickEvent,
  title,
  redirect,
  text,
  textSeeMore,
  textLinkMore,
}: IEventsGroupProps): JSX.Element => {
  if (!events || (events && events.length === 0)) return <></>

  const eventItems: JSX.Element[] = events.map((event) => (
    // Una vez que el evento se comporte como link, se debe cambiar Box a MenuItem y aplicar el efecto de focus
    <Box
      bg={vars('colors-neutral-white') ?? '#FFFFFF'}
      border="none"
      cursor={onClickEvent ? 'pointer' : 'default'}
      padding="0"
      key={event.id}
      _hover={{
        boxShadow: 'none !important',
        cursor: onClickEvent ? 'pointer !important' : 'default !important',
        bg: 'none !important',
      }}
      _focus={{
        background: 'none !important',
        boxShadow: 'none !important',
      }}
    >
      <EventsList
        name={event.translatedTitle}
        courseName={event.course.name}
        day={event.formatedDate.day}
        date={event.formatedDate.date}
        duration={event.duration_in_minutes}
        time={event.formatedDate.time}
        color={event.course_id && colors?.[event.course_id] ? colors[event.course_id] : '#82504A'}
        text={text}
        type={event.type}
        locationSede={event.location_sede}
        hasNotification={event.isNew}
        onClick={onClickEvent ? () => onClickEvent(event) : undefined}
        showCourse
      />
    </Box>
  ))

  return (
    <>
      <Box
        className="calendar-events-group"
        _focus={{
          background: 'none !important',
          border: `1px solid ${vars('colors-icon-deepSkyBlue') ?? '#0189FF'}`,
        }}
        sx={{
          '.chakra-menu__menuitem > div': {
            w: '100%',
          },
        }}
      >
        <MenuGroup title={title}>{eventItems}</MenuGroup>
      </Box>
      {hasMoreNext && (
        <Box display="flex" alignItems="center" padding="16px 0 0 16px">
          <Box as="span" fontSize="14px">
            {textSeeMore}
          </Box>{' '}
          <BtnLink onClick={redirect} target="_self">
            {textLinkMore}
          </BtnLink>
        </Box>
      )}
    </>
  )
}
