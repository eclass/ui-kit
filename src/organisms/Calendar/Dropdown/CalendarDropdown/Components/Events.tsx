import { BtnSecondary } from '@/molecules'
import { Box, MenuGroup } from '@chakra-ui/react'
import { Key } from 'react'
import { vars } from '@theme'

import { EventsList } from '../../../EventsList/EventsList'
import { Text } from '../../types'

interface EventsProps {
  events: {
    today: Event[]
    tomorrow: Event[]
    next: Event[]
  }
  text?: Text
  redirecToCalendar: () => void
  isMobile: boolean
  colors: any
}

export const Events = ({
  events,
  text,
  redirecToCalendar,
  isMobile,
  colors,
}: EventsProps): JSX.Element => {
  const { today, tomorrow, next } = events
  return (
    <Box
      borderRadius="10px"
      color="#1C1818"
      h={isMobile ? 'auto' : '552px'}
      overflowY="scroll"
      pb="32px"
      sx={{
        '.calendar-events-group': {
          borderBottom: `1px solid ${vars('colors-neutral-platinum')}` ?? '1px solid #E8E8E8',
        },
      }}
    >
      {redirecToCalendar && (
        <Box
          sx={{
            button: {
              p: '8px ',
              fontSize: '14px',
              lineHeight: '14px',
              minW: 'fit-content',
              minH: 'fit-content',
            },
          }}
        >
          <BtnSecondary onClick={redirecToCalendar} m="72px 0 0 24px" id="RedirectButton">
            {text?.buttonCalendar ?? 'Ir a Mi Calendario'}
          </BtnSecondary>
        </Box>
      )}
      <EventsGroup
        colors={colors}
        text={text?.course ?? ''}
        title={text?.events?.today ?? 'Hoy'}
        events={today}
      />
      <EventsGroup
        colors={colors}
        text={text?.course ?? ''}
        title={text?.events?.tomorrow ?? 'Mañana'}
        events={tomorrow}
      />
      <EventsGroup
        colors={colors}
        text={text?.course ?? ''}
        title={text?.events?.next ?? 'Próximos'}
        events={next}
      />
    </Box>
  )
}
interface Event {
  id: Key | null | undefined
  associated_resource: { name: any }
  course: { name: string | undefined }
  formatedDate: { start: string; hours: string }
  course_id: string | number
  isNew: boolean | undefined
}

interface EventsGroupProps {
  title: string
  events: Event[]
  text: string
  colors: any
}

const EventsGroup = ({ title, events, text, colors }: EventsGroupProps): JSX.Element => {
  if (!events || (events && events.length === 0)) return <></>
  return (
    <Box
      className="calendar-events-group"
      _focus={{
        background: 'none !important',
        border: `1px solid ${vars('colors-icon-deepSkyBlue')}` ?? '1px solid #0189FF',
      }}
      sx={{
        '.chakra-menu__menuitem > div': {
          w: '100%',
        },
      }}
    >
      <MenuGroup title={title}>
        {events.map(
          (event: {
            id: Key | null | undefined
            associated_resource: { name: any }
            course: { name: string | undefined }
            formatedDate: { start: string; hours: string }
            course_id: string | number
            isNew: boolean | undefined
          }) => {
            return (
              <Box // Una vez que el evento se comporte como link, se debe cambiar Box a MenuItem y aplicar el efecto de focus
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
                // _focus={{
                //   background: 'none !important',
                //   boxShadow: `inset 0px 0.5px 0px 3px ${vars('colors-icon-deepSkyBlue')}`,
                // }}
              >
                <EventsList
                  key={event.id}
                  name={event.associated_resource.name || ''}
                  courseName={event.course.name}
                  date={event.formatedDate.start}
                  hours={event.formatedDate.hours}
                  color={event.course_id && colors?.[event.course_id]}
                  text={text}
                  hasNotification={event.isNew}
                  isDropdown
                />
              </Box>
            )
          }
        )}
      </MenuGroup>
    </Box>
  )
}
