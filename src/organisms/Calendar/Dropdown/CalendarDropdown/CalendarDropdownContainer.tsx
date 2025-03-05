import { useEffect, useState } from 'react'
import { Box, Menu, MenuList, useMediaQuery } from '@chakra-ui/react'

import { useParseEvents } from './services/parseEvents'
import { GoToCalendar } from './Components/GoToCalendar'
import { Header } from './Components/Header'
import { Empty } from './Components/Empty'
import { Events } from './Components/Events'
import { ICalendarDropdown } from '../types'

export const CalendarDropdownContainer = ({
  events,
  loading,
  text,
  now,
  redirectToCalendar,
  courseColors: colors,
}: ICalendarDropdown): JSX.Element => {
  const [isMobile] = useMediaQuery('(max-width: 577px)')
  const { closeAndMarkSeen, empty, hasNew, ...all } = useParseEvents(events, now)

  const [isTooltipDisabled, setTooltipDisabled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  // Resuelve tooltip que se mantiene visible al cerrar el menu
  useEffect(() => {
    if (isMenuOpen) {
      setTooltipDisabled(true)
    } else {
      const timer = setTimeout(() => setTooltipDisabled(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const onClose = (): void => {
    closeAndMarkSeen()
    setMenuOpen(false)
  }

  return (
    <Box
      zIndex={4}
      className="calendarDropdown"
      mr="24px"
      position="relative"
      sx={{
        '>div': {
          position: isMobile ? 'fixed !important' : 'absolute',
          left: isMobile ? '0 !important' : 'auto',
          top: isMobile ? '62px !important' : 'auto',
          transform: isMobile ? 'none !important' : 'translate3d(-409px, 38px, 0px) !important',
        },

        '.chakra-menu__menu-list': {
          padding: '0',
          position: 'absolute',
          width: isMobile ? '100vw' : '500px',
          maxHeight: isMobile ? 'calc(100vh - 62px)' : 'auto',
          overflowY: isMobile ? 'auto' : 'hidden',
          borderRadius: isMobile ? '0' : '10px',
          boxShadow: isMobile ? 'none' : 'rgba(47, 47, 47, 0.2) -1px 6px 40px 0px',
          animation: 'none !important',
          transition: 'none !important',
          transform: 'none !important',
          opacity: '1 !important',
        },
        '.chakra-menu__group__title': {
          fontSize: '18px',
          lineHeight: '31px',
          margin: '32px 0 0',
          padding: '0 0 8px 24px',
        },
        '.react-ripples': {
          width: 'inherit',
        },
      }}
    >
      <Menu autoSelect={false} onOpen={() => setMenuOpen(true)} onClose={onClose}>
        <>
          <GoToCalendar
            hasNew={hasNew ?? false}
            text={text?.tooltip || 'Ir a Mi Calendario'}
            tooltipDisabled={isTooltipDisabled}
          />
          <MenuList>
            <Header
              text={text?.header || 'Próximas fechas importantes de tus cursos'}
              isMobile={isMobile}
            />
            {loading ? (
              <Loading text={text?.loading || 'Cargando'} />
            ) : events.length === 0 || empty ? (
              <Empty text={text?.empty || 'Aún no tienes eventos en tu calendario'} />
            ) : (
              <Events
                colors={colors}
                events={all}
                text={text}
                redirecToCalendar={redirectToCalendar}
                isMobile={isMobile}
              />
            )}
          </MenuList>
        </>
      </Menu>
    </Box>
  )
}

const Loading = ({ text }: { text?: string }): JSX.Element => {
  return <div>{text ?? 'Loading...'}</div>
}
