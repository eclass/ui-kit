import { FC } from 'react'
import { Tooltip, PlacementWithLogical } from '@chakra-ui/react'
import { vars } from '@/theme'

interface TooltipProps {
  className?: string
  label?: React.ReactNode
  isDisabled?: boolean
  m?: string
  maxWidth?: string
  placement?: PlacementWithLogical
  isOpen?: boolean | undefined
}

export const NewTooltip: FC<TooltipProps> = ({
  children,
  className = 'tooltip',
  label,
  isDisabled = false,
  m,
  maxWidth = '200px',
  placement = 'bottom',
  isOpen,
}) => {
  return (
    <Tooltip
      isOpen={isOpen}
      sx={{
        bg: vars('colors-neutral-darkCharcoal'),
        borderRadius: '10px',
        color: 'white !important',
        fontSize: '12px',
        fontWeight: '400',
        maxWidth: maxWidth,
        padding: '8px',

        '.chakra-tooltip__arrow': {
          bg: `${vars('colors-neutral-darkCharcoal')} !important`,
        },
      }}
      className={className}
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
