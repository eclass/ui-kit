import { Box, Menu, MenuButton, MenuGroup, MenuItem, MenuList, useMediaQuery, forwardRef } from '@chakra-ui/react'
import { addDays, isAfter, isTomorrow, parseISO, startOfDay } from 'date-fns'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'

import { CalendarButtonIcon } from './CalendarButtonIcon'
import { BtnSecondary, NewTooltip } from '@/molecules'
import { NotificationIcon } from './NotificationIcon'
import { NoEventsIcon } from './NoEventsIcon'
import { EventsList } from './EventList'

  
interface ICalendarDropdownProps {
  courseText: string
  onClick: () => void
  m?: string
  menuPosition?: string
  events?: any
}

const HiddenBackground = createGlobalStyle`
  #ViewContainer {
    display: none;
  }
`

export const CalendarDropdown = ({
  m,
  events,
  onClick,
  menuPosition,
  courseText
}: ICalendarDropdownProps) => {
  const [isMobile] = useMediaQuery('(max-width: 577px)')
  const [isTooltipDisabled, setTooltipDisabled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const today = startOfDay(new Date())
  const tomorrow = addDays(today, 1)
  const todayEvents = events?.filter(
      (event: { start: string }) => startOfDay(parseISO(event.start)).getTime() === today.getTime())
  const tomorrowEvents = events?.filter((event: { start: string }) => isTomorrow(parseISO(event.start)))
  const upcomingEvents = events?.filter((event: { start: string }) => isAfter(startOfDay(parseISO(event.start)), tomorrow))
  const noEvents = events?.length === 0

  useEffect(() => {
    if (isMenuOpen) {
      setTooltipDisabled(true)
    } else {
      const timer = setTimeout(() => setTooltipDisabled(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])


  return (
    <Box
      zIndex={4}
      className="calendarDropdown"
      m={m}
      sx={{
        '>div': {
          transform: menuPosition ? menuPosition : 'translate3d(6px, 40px, 0px) !important',
        },
        '.chakra-menu__menu-list': {
          borderRadius: isMobile ? '0' : '10px',
          boxShadow: isMobile ? 'none' : 'rgba(47, 47, 47, 0.2) -1px 6px 40px 0px',
          ml: isMobile ? '-22px' : '0',
          left: isMobile ? '-22px' : 'unset',
          width: isMobile ? '100vw' : '500px',
          height: isMobile ? 'auto' : 'auto',
          maxHeight: '560px',
          animation: 'none !important',
          transition: 'none !important',
          transform: 'none !important',
          opacity: '1 !important',
        },
      }}>
      <Menu onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)} computePositionOnMount placement="bottom-end">
        {({ isOpen }) => (
          <>
            {isOpen && isMobile && <HiddenBackground />}
            <NewTooltip label="Calendario" isDisabled={isTooltipDisabled} m="8px 0 0 0">
              <MenuButton
                background="#60798E"
                border="1px solid transparent"
                borderRadius="100%"
                height="30px"
                width="30px"
                sx={{
                  '>span': {
                    alignSelf: 'baseline',
                    justifyItems: 'center',
                  },
                  '.notification': {
                    position: 'absolute'
                  }
                }}
              >
                <CalendarButtonIcon />
                <NotificationIcon />
              </MenuButton>
            </NewTooltip>
            <MenuList
              color="black"
              fontSize="18px"
              fontWeight="700"
              height={noEvents ? 'auto' : '560px'}
              lineHeight="31px"
              overflow="auto"
              padding="0"
              sx={{
                '.chakra-menu__group': {
                  borderBottom: `1px solid #E8E8E8`,

                  '.chakra-menu__group__title': {
                    fontSize: '18px',
                    lineHeight: '31px',
                    margin: '0',
                    padding: '32px 0 8px 24px',
                  },
                },
                '.react-ripples': {
                  width: 'inherit',
                },
              }}>
              <Box
                className="arrow"
                width="0"
                height="0"
                borderLeft="14px solid transparent"
                borderRight="14px solid transparent"
                borderBottom={`12px solid #5C5C5C`} 
                position="absolute"
                right={isMobile ? '71px' : '61px'}
                top="-9px"
                aria-hidden
              />
              <Box
                as="header"
                bg="#5C5C5C"
                borderRadius={isMobile ? 'none' : '10px 10px 0 0'}
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="500"
                lineHeight="normal"
                padding="16px"
                position="absolute"
                width={isMobile ? '100vw' : '100%'}
                zIndex="1">
                {"t('CalendarNextDates')"}
              </Box>

              {!noEvents && (
                <BtnSecondary
                  size="small"
                  m="72px 0 0 24px"
                  onClick={onClick}>
                  {/* {t('CalendarGoto')} */}
                </BtnSecondary>
              )}
              {todayEvents && todayEvents.length > 0 && (
                <MenuGroup title="Hoy">
                  {todayEvents.map((event: any) => {
                    return (
                      <MenuItem
                        bg="#FFFFFF"
                        border="none"
                        padding="0"
                        key={event.id}>
                        <EventsList
                          name={event.associated_resource.name}
                          courseid={event.course.id}
                          courseName={event.course.name}
                          start={event.start}
                          isDropdown
                          courseTranslation={courseText}
                        />
                      </MenuItem>
                    )
                  })}
                </MenuGroup>
              )}
              {tomorrowEvents && tomorrowEvents.length > 0 && (
                <MenuGroup title="Mañana">
                  {tomorrowEvents.map((event: any) => {
                    return (
                      <MenuItem
                        bg="#FFFFFF"
                        border="none"
                        padding="0"
                        key={event.id}>
                        <EventsList
                          name={event.associated_resource.name}
                          courseid={event.course.id}
                          courseName={event.course.name}
                          start={event.start}
                          isDropdown
                          courseTranslation={'Curso'}
                        />
                      </MenuItem>
                    )
                  })}
                </MenuGroup>
              )}
              {!noEvents && upcomingEvents && (
                <MenuGroup title="Próximos eventos">
                  {upcomingEvents.slice(0, 3).map((event: any) => {
                    return (
                      <MenuItem
                        bg="#FFFFFF"
                        border="none"
                        padding="0"
                        key={event.id}>
                        <EventsList
                          name={event.associated_resource.name}
                          courseid={event.course.id}
                          courseName={event.course.name}
                          start={event.start}
                          isDropdown
                          courseTranslation={'Curso'}
                        />
                      </MenuItem>
                    )
                  })}
                </MenuGroup>
              )}
              {noEvents && (
                <Box
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  gap="24px"
                  padding="124px 0 74px">
                  <NoEventsIcon />
                  {/* @TODO traducción */}
                  <Box fontSize="20px">Aún no tienes eventos en tu calendario</Box>
                </Box>
              )}
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}
