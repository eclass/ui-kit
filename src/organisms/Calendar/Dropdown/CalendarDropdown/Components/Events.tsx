import { BtnPrimary } from '@/molecules'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { Text, Event } from '../../types'
import { EventsGroup } from './EventsGroup'

interface IEventsProps {
  colors?: Record<string, string>
  events: {
    today: Event[]
    tomorrow: Event[]
    next: Event[]
  }
  hasMoreNext?: boolean
  isMobile: boolean
  onClickEvent?: (event?: Event) => void
  redirecToCalendar: () => void
  text?: Text
}

export const Events = ({
  colors,
  events,
  hasMoreNext,
  isMobile,
  onClickEvent,
  redirecToCalendar,
  text,
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
          <BtnPrimary onClick={redirecToCalendar} m="72px 0 0 16px" id="RedirectButton">
            {text?.buttonCalendar ?? 'Ir a Mi Calendario'}
          </BtnPrimary>
        </Box>
      )}
      <EventsGroup
        colors={colors}
        events={today}
        onClickEvent={onClickEvent}
        text={text?.course ?? ''}
        title={text?.events?.today ?? 'Hoy'}
      />
      <EventsGroup
        colors={colors}
        events={tomorrow}
        onClickEvent={onClickEvent}
        text={text?.course ?? ''}
        title={text?.events?.tomorrow ?? 'Mañana'}
      />
      <EventsGroup
        colors={colors}
        events={next}
        hasMoreNext={hasMoreNext}
        onClickEvent={onClickEvent}
        redirect={redirecToCalendar}
        textSeeMore={text?.seeMore.see ?? 'Ver más fechas en'}
        textLinkMore={text?.seeMore.link ?? 'Mi calendario'}
        text={text?.course ?? ''}
        title={text?.events?.next ?? 'Próximos'}
      />
    </Box>
  )
}
