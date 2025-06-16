import { MenuButton } from '@chakra-ui/react'

import { vars } from '@theme'
import { NavBarButton, NewTooltip } from '@/molecules'

interface IGoToCalendar {
  text: string
  tooltipDisabled: boolean
  onlyToCalendar?: boolean
  onClick?: () => void
}

export const GoToCalendar = ({
  text,
  tooltipDisabled,
  onlyToCalendar,
  onClick,
}: IGoToCalendar): JSX.Element => {
  const activeBg = vars('colors-main-deepSkyBlue') ?? '#0189FF'
  const hoverBg = 'rgba(96, 121, 142, 0.8)'

  return (
    <NewTooltip label={text ?? 'Calendario'} m="2px 0 0 0" isDisabled={tooltipDisabled}>
      <MenuButton
        onClick={() => onlyToCalendar && onClick && onClick()}
        sx={{
          _hover: {
            '.icon': {
              bg: hoverBg,
            },
            '.text': {
              color: vars('colors-neutral-white'),
            },
          },

          _active: {
            '.icon': {
              bg: onlyToCalendar ? hoverBg : activeBg,
            },
            '.text': {
              color: vars('colors-neutral-white'),
            },
          },
        }}
      >
        <NavBarButton type="calendar" onClick={() => {}} />
      </MenuButton>
    </NewTooltip>
  )
}
