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
        height="30px!important"
        width="30px!important"
        position="relative"
        _hover={{
          bg: 'rgba(96, 121, 142, 0.8)',
        }}
        sx={{
          '>span': {
            alignContent: 'center',
            h: '16px!important',
            justifyItems: 'center',
            lineHeight: '0',
            m: '0!important',
            p: '0!important',
            w: '16px!important',
            svg: {
              h: '16px!important',
              m: '0!important',
              p: '0!important',
              w: '16px!important',
            },
          },
        }}
      >
        <CalendarButtonIcon />
      </MenuButton>
    </NewTooltip>
  )
}
