import { MenuButton } from '@chakra-ui/react'
import { vars } from '@theme'

import { CalendarButtonIcon } from '../Icons/CalendarButtonIcon'
import { NotificationIcon } from '../../../EventsList/NotificationIcon'
import { NewTooltip } from '@/molecules'

interface IGoToCalendar {
  hasNew: boolean
  text: string
  tooltipDisabled: boolean
  onlyToCalendar?: boolean
  onClick?: () => void
}

export const GoToCalendar = ({
  hasNew,
  text,
  tooltipDisabled,
  onlyToCalendar,
  onClick,
}: IGoToCalendar): JSX.Element => {
  return (
    <NewTooltip label={text ?? 'Calendario'} m="2px 0 0 0" isDisabled={tooltipDisabled}>
      <MenuButton
        onClick={() => onlyToCalendar && onClick && onClick()}
        background={vars('colors-main-blueGrey') ?? '#60798E'}
        border="1px solid transparent"
        borderRadius="100%"
        height="30px"
        width="30px"
        position="relative"
        sx={{
          '>span': {
            lineHeight: '0',
            justifyItems: 'center',
            alignContent: 'center',
          },
          '.notification': {
            position: 'absolute',
            top: '-1px',
            right: '-1px',
          },
        }}
      >
        <CalendarButtonIcon />
        {!onlyToCalendar && hasNew && <NotificationIcon />}
      </MenuButton>
    </NewTooltip>
  )
}
