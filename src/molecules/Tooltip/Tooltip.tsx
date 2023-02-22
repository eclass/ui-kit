import { FC } from 'react'
import { Tooltip, PlacementWithLogical } from '@chakra-ui/react'
import { vars } from '@/theme'

interface TooltipProps {
  label?: React.ReactNode
  isDisabled?: boolean
  m?: string
  placement?: PlacementWithLogical
}

export const TooltipLabel: FC<TooltipProps> = ({
  children,
  label,
  isDisabled = false,
  m,
  placement = 'bottom',
}) => {
  return (
    <Tooltip
      sx={{
        bg: vars('colors-neutral-darkCharcoal'),
        borderRadius: '10px',
        fontSize: '12px',
        maxWidth: '170px',
        padding: '8px',

        '.chakra-tooltip__arrow': {
          bg: `${vars('colors-neutral-darkCharcoal')} !important`,
        },
      }}
      closeOnClick
      label={label}
      m={m}
      hasArrow
      isDisabled={isDisabled}
      placement={placement}
    >
      <span>{children}</span>
    </Tooltip>
  )
}
