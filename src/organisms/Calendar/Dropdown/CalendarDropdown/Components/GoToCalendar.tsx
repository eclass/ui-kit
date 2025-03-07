import { MenuButton } from '@chakra-ui/react'
import { vars } from '@theme'

import { CalendarButtonIcon } from '../Icons/CalendarButtonIcon'
import { NewTooltip } from '@/molecules'

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
        _hover={{
          bg: 'rgba(96, 121, 142, 0.8)',
        }}
        sx={{
          '>span': {
            lineHeight: '0',
            justifyItems: 'center',
            alignContent: 'center',
          },
        }}
      >
        <CalendarButtonIcon />
      </MenuButton>
    </NewTooltip>
  )
}
