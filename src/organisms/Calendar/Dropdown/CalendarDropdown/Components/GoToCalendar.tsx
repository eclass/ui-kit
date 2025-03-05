import { MenuButton } from '@chakra-ui/react'

import { CalendarButtonIcon } from '../Icons/CalendarButtonIcon'
import { NotificationIcon } from '../../../EventsList/NotificationIcon'
import { NewTooltip } from 'molecules'

interface IGoToCalendar {
  hasNew: boolean
  text: string
  tooltipDisabled: boolean
}

export const GoToCalendar = ({ hasNew, text, tooltipDisabled }: IGoToCalendar): JSX.Element => {
  return (
    <NewTooltip label={text ?? 'Calendario'} m="2px 0 0 0" isDisabled={tooltipDisabled}>
      <MenuButton
        background="#60798E"
        border="1px solid transparent"
        borderRadius="100%"
        height="30px"
        width="30px"
        position="relative"
        sx={{
          '>span': {
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
        {hasNew && <NotificationIcon />}
      </MenuButton>
    </NewTooltip>
  )
}
