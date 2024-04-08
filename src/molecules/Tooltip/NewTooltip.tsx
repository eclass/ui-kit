import { FC } from 'react'
import { Tooltip, PlacementWithLogical, CSSObject } from '@chakra-ui/react'
import { vars } from '@/theme'

interface TooltipProps {
  className?: string
  label?: React.ReactNode
  isDisabled?: boolean
  m?: string
  maxWidth?: string
  placement?: PlacementWithLogical
  isOpen?: boolean | undefined
  sx?: CSSObject | undefined
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
  sx,
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
        ...sx,
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
