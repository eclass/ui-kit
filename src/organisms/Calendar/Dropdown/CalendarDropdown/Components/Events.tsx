import { BtnSecondary } from '@/molecules'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { Text, Event, ICalendarDropdown } from '../../types'
import { EventsGroup } from './EventsGroup'

interface IEventsProps {
  events: {
    today: Event[]
    tomorrow: Event[]
    next: Event[]
  }
  text?: Text
  redirecToCalendar: () => void
  isMobile: boolean
  colors?: Record<string, string>
  clickEvent?: ICalendarDropdown['clickEvent']
}

export const Events = ({
  events,
  text,
  redirecToCalendar,
  isMobile,
  colors,
  clickEvent,
}: IEventsProps): JSX.Element => {
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
          borderBottom: `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`,
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
        clickEvent={clickEvent}
      />
      <EventsGroup
        colors={colors}
        text={text?.course ?? ''}
        title={text?.events?.tomorrow ?? 'Mañana'}
        events={tomorrow}
        clickEvent={clickEvent}
      />
      <EventsGroup
        colors={colors}
        text={text?.course ?? ''}
        title={text?.events?.next ?? 'Próximos'}
        events={next}
        clickEvent={clickEvent}
      />
    </Box>
  )
}
