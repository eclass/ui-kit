import { EventsList } from '@/organisms/Calendar'
import { Box, MenuGroup } from '@chakra-ui/react'
import { vars } from '@theme'
import { Event } from '../../types'

interface IEventsGroupProps {
  title: string
  events: Event[]
  text: string
  colors?: Record<string, string>
}

export const EventsGroup = ({ title, events, text, colors }: IEventsGroupProps): JSX.Element => {
  if (!events || (events && events.length === 0)) return <></>
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
                day={event.formatedDate.day}
                date={event.formatedDate.date}
                time={event.formatedDate.time}
                color={
                  event.course_id && colors?.[event.course_id] ? colors[event.course_id] : '#82504A'
                }
                text={text}
                type={event.type}
                hasNotification={event.isNew}
                showsCourseName
              />
            </Box>
          )
        })}
      </MenuGroup>
    </Box>
  )
}
