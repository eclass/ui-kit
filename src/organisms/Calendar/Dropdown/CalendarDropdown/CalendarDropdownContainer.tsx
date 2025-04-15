import { useEffect, useState } from 'react'
import { Box, Menu, MenuList, useMediaQuery } from '@chakra-ui/react'
import { vars } from '@theme'

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
  courseColors,
  onlyToCalendar,
  m,
  clickEvent,
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

  // Función que oculta el contenido de fondo al abrir el menú en formato mobile.
  // Para el caso de v8 se usa el id del contenedor y para CV la clase.
  // En ambos casos es un cambio que se aplica sólo cuando el menú está abierto y en dispositivos móviles.
  useEffect(() => {
    if (!isMobile || onlyToCalendar) return // Si es mobile  o no abre menu no se ejecuta

    const viewContainer = document.getElementById('ViewContainer')

    if (viewContainer) {
      // Si existe #ViewContainer, lo ocultamos o mostramos
      viewContainer.style.display = isMenuOpen ? 'none' : ''
    } else {
      // Si #ViewContainer no existe, aplicamos la lógica de .main
      const mainElement = document.querySelector('.main')
      if (!mainElement) return

      const firstChild = mainElement.firstElementChild
      if (!firstChild || !(firstChild instanceof HTMLElement)) return

      const headerElement = firstChild.querySelector('header.header')
      if (!headerElement) return

      const targetElement = headerElement.nextElementSibling
      if (!targetElement || !(targetElement instanceof HTMLElement)) return

      targetElement.style.display = isMenuOpen ? 'none' : ''
    }
  }, [isMobile, isMenuOpen, onlyToCalendar])

  const onClose = (): void => {
    closeAndMarkSeen()
    setMenuOpen(false)
  }

  return (
    <Box
      zIndex={4}
      className={`calendarDropdown ${hasNew && !onlyToCalendar ? 'hasNew' : ''}`}
      width="30px"
      height="30px"
      m={m}
      position="relative"
      sx={{
        // Pseudo-elemento para la flecha
        '&::after': {
          borderColor: `transparent transparent ${
            vars('colors-neutral-davysGrey') ?? '#5C5C5C'
          } transparent`,
          borderStyle: 'solid',
          borderWidth: '0 11px 10px 11px',
          content: '""',
          display: isMenuOpen ? 'block' : 'none',
          height: '0',
          left: '50%',
          position: 'absolute',
          top: '30px',
          transform: 'translateX(-50%)',
          width: '0',
        },
        // Se genera pseudo elemento que actúa como ícono de notificación
        '&.hasNew::before': {
          background: vars('colors-secondary-pumpkin') ?? '#FF7A14',
          borderRadius: '50%',
          content: '""',
          display: 'block',
          height: '8px',
          width: '8px',
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: '1',
        },
        '>div': {
          left: isMobile ? '0 !important' : 'auto',
          position: isMobile ? 'fixed !important' : 'absolute',
          top: isMobile ? '62px !important' : 'auto',
          transform: isMobile ? 'none !important' : 'translate3d(-409px, 38px, 0px) !important',
        },

        '.chakra-menu__menu-list': {
          animation: 'none !important',
          background: 'transparent',
          border: 'none',
          borderRadius: isMobile ? '0' : '10px',
          boxShadow: isMobile ? 'none' : 'rgba(47, 47, 47, 0.2) -1px 6px 40px 0px',
          left: isMobile ? 'auto' : '-30px',
          maxHeight: isMobile ? 'calc(100vh - 62px)' : 'auto',
          opacity: '1 !important',
          overflowY: isMobile ? 'auto' : 'hidden',
          padding: '0',
          position: 'absolute',
          top: isMobile ? '-6px !important' : 'auto',
          transform: 'none !important',
          transition: 'none !important',
          width: isMobile ? '100vw' : '500px',
        },
        '.chakra-menu__group__title': {
          fontSize: '18px',
          fontWeight: '700',
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
            text={text?.tooltip ?? 'Ir a Mi Calendario'}
            tooltipDisabled={isTooltipDisabled}
            onlyToCalendar={onlyToCalendar}
            onClick={redirectToCalendar}
          />
          {!onlyToCalendar && (
            <MenuList>
              <Header
                text={text?.header ?? 'Próximas fechas importantes de tus cursos'}
                isMobile={isMobile}
              />
              <Box bg={vars('colors-neutral-white') ?? '#FFF'}>
                {loading ? (
                  <Loading text={text?.loading ?? 'Cargando'} />
                ) : events.length === 0 || empty ? (
                  <Empty text={text?.empty ?? 'Aún no tienes eventos en tu calendario'} />
                ) : (
                  <Events
                    colors={courseColors}
                    events={all}
                    text={text}
                    redirecToCalendar={redirectToCalendar}
                    isMobile={isMobile}
                    clickEvent={clickEvent}
                  />
                )}
              </Box>
            </MenuList>
          )}
        </>
      </Menu>
    </Box>
  )
}

const Loading = ({ text }: { text?: string }): JSX.Element => {
  return <div>{text ?? 'Loading...'}</div>
}
