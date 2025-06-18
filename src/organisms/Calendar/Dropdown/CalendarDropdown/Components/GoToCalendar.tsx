import { MenuButton } from '@chakra-ui/react'

import { vars } from '@theme'
import { NavBarButton } from '@/molecules'

interface IGoToCalendar {
  text: string
  onlyToCalendar?: boolean
  onClick?: () => void
}

export const GoToCalendar = ({ text, onlyToCalendar, onClick }: IGoToCalendar): JSX.Element => {
  const activeBg = vars('colors-main-deepSkyBlue') ?? '#0189FF'
  const hoverBg = 'rgba(96, 121, 142, 0.8)'

  return (
    <MenuButton
      onClick={() => onlyToCalendar && onClick && onClick()}
      position="relative"
      sx={{
        _hover: {
          '.nav-bar-icon': {
            bg: hoverBg,
          },
          '.nav-bar-text': {
            color: vars('colors-neutral-white'),
          },
        },

        _active: {
          '.nav-bar-icon': {
            bg: onlyToCalendar ? hoverBg : activeBg,
          },
          '.nav-bar-text': {
            color: vars('colors-neutral-white'),
          },
        },
      }}
    >
      <NavBarButton as="div" type="calendar" buttonName={text.toUpperCase()} />
    </MenuButton>
  )
}
