import { Box, MenuGroup } from '@chakra-ui/react'

import { EventsList } from '@/organisms/Calendar'
import { vars } from '@theme'
import { Event, ICalendarDropdown } from '../../types'

interface IEventsGroupProps {
  title: string
  events: Event[]
  text: string
  colors?: Record<string, string>
  clickEvent?: ICalendarDropdown['clickEvent']
}

export const EventsGroup = ({
  title,
  events,
  text,
  colors,
  clickEvent,
}: IEventsGroupProps): JSX.Element => {
  if (!events || (events && events.length === 0)) return <></>

  const handleClick = (event: Event): void => {
    clickEvent?.(event)
  }
  return (
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
      <MenuGroup title={title}>
        {events.map((event: Event) => {
          return (
            // Una vez que el evento se comporte como link, se debe cambiar Box a MenuItem y aplicar el efecto de focus
            <Box
              bg={vars('colors-neutral-white') ?? '#FFFFFF'}
              border="none"
              cursor="default"
              padding="0"
              key={event.id}
              _hover={{
                boxShadow: 'none !important',
                cursor: 'default !important',
                bg: 'none !important',
              }}
              _focus={{
                background: 'none !important',
                boxShadow: 'none !important',
              }}
            >
              <EventsList
                key={event.id}
                name={event.associated_resource.name || ''}
                courseName={event.course.name}
                date={event.formatedDate.start}
                hours={event.formatedDate.hours}
                color={
                  event.course_id && colors?.[event.course_id] ? colors[event.course_id] : '#82504A'
                }
                text={text}
                hasNotification={event.isNew}
                isDropdown
                clickEvent={() => handleClick(event)}
              />
            </Box>
          )
        })}
      </MenuGroup>
    </Box>
  )
}
