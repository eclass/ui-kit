
import { MenuButton } from '@chakra-ui/react'

import { CalendarButtonIcon } from '../Icons/CalendarButtonIcon'
import { NotificationIcon } from '../../../EventsList/NotificationIcon'
import { NewTooltip } from '@/molecules';

export const GoToCalendar = ({ hasNew, text, tooltipDisabled }: { hasNew: boolean; text: string, tooltipDisabled: boolean }) => {
  return (
    <NewTooltip label={text ?? 'Calendario'} m="8px 0 0 0" isDisabled={tooltipDisabled}>
      <MenuButton
        background="#60798E"
        border="1px solid transparent"
        borderRadius="100%"
        height="30px"
        width="30px"
        sx={{
          '>span': {
            height: '30px',
            padding: '1px 0',
          },
          '.notification': {
            position: 'absolute',
          },
        }}>
        <CalendarButtonIcon />
        {hasNew && <NotificationIcon />}
      </MenuButton>
    </NewTooltip>
  )
}
