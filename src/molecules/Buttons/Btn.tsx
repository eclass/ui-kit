import { Box, Button } from '@chakra-ui/react'
import Ripples from 'react-ripples'

import { vars } from '@theme'
import { Loader } from '@icons'

interface colorScheme {
  main: string
  hover: string
}

export interface propsBaseBtns {
  children?: React.ReactNode
  disabled?: boolean
  isFullWidth?: boolean
  leftIcon?: React.ReactElement
  m?: string
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactElement
  size?: 'regular' | 'small'
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  id?: string
}
interface props extends propsBaseBtns {
  bg?: colorScheme
  /** Colores para el efecto del :active son necesarios dos */
  borderColorActive?: string[]
  color?: string
  fillLoader?: string
  rounded?: boolean
  touchDark?: boolean
}

/**
 * Componente Btn
 *
 * Dibuja un boton base que posee todo lo estipulado en
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <Btn>Lorem</Btn>
 */
export function Btn({
  bg,
  borderColorActive = [vars('colors-main-deepSkyBlue'), vars('colors-neutral-white')],
  children,
  color = vars('colors-neutral-white'),
  disabled = false,
  fillLoader = vars('colors-neutral-white'),
  isFullWidth = false,
  leftIcon,
  m = '0',
  isLoading = false,
  onClick,
  rightIcon,
  rounded = false,
  size = 'regular',
  touchDark = false,
  type = 'button',
  tabIndex,
  id,
}: props): JSX.Element {
  let showChildren = children ?? null
  if (!children && !rightIcon && !leftIcon) {
    showChildren = 'Button'
  }

  const paddingTopBottom = '.75rem' // xxs + xs spacial units
  const borderRadius = rounded ? '12px' : vars('radii-small')
  const colorMain = bg?.main ?? vars('colors-main-deepSkyBlue')
  const touchColor = touchDark ? 'rgba(160, 160, 160, 0.2)' : 'rgba(255, 255, 255, 0.2)'
  const onlyIcon = !children && (rightIcon ?? leftIcon) ? 'onlyIcon' : ''

  return (
    <Box
      margin={m}
      sx={{
        '.react-ripples': {
          borderRadius,
          display: `${isFullWidth ? 'grid' : 'inline-flex!important'}`,
        },
      }}
    >
      <Ripples color={touchColor}>
        <Button
          id={id}
          fontWeight="500"
          fontSize={size === 'regular' ? 'medium' : 'small'}
          bg={colorMain}
          size={size === 'regular' ? 'md' : 'sm'}
          borderRadius={borderRadius}
          color={color}
          className={onlyIcon}
          // disabled={disabled && isLoading ? false : disabled}
          isDisabled={disabled && isLoading ? false : disabled}
          height="auto"
          minHeight={size === 'regular' ? '2.813rem' : '2rem'}
          minWidth={size === 'regular' ? '9rem' : 'auto'}
          lineHeight="initial"
          iconSpacing={vars('space-xs')}
          isActive={false}
          isLoading={isLoading}
          leftIcon={leftIcon}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            !isLoading && !disabled && onClick?.(e)
          }}
          type={type}
          tabIndex={tabIndex}
          paddingTop={
            size === 'regular' ? paddingTopBottom : onlyIcon ? vars('space-xs') : vars('space-xxs')
          }
          paddingBottom={
            size === 'regular' ? paddingTopBottom : onlyIcon ? vars('space-xs') : vars('space-xxs')
          }
          paddingLeft={size === 'regular' ? vars('space-s') : vars('space-xs')}
          paddingRight={size === 'regular' ? vars('space-s') : vars('space-xs')}
          position="relative"
          width={isFullWidth ? 'full' : 'auto'}
          rightIcon={rightIcon}
          spinner={<Loader fill={fillLoader} />}
          _active={{
            bg: bg?.main ?? vars('colors-main-azureRadiance'),
          }}
          _disabled={{
            opacity: '50%',
            cursor: 'not-allowed',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _focusVisible={{
            boxShadow: `inset 0 0 0 2px ${borderColorActive[0]}, inset 0 0 0 4px ${borderColorActive[1]}`,
          }}
          _hover={{
            bg: bg?.hover ?? vars('colors-main-azureRadiance'),
          }}
          sx={{
            '&[data-loading]': {
              boxShadow: 'none',
              cursor: 'wait',
            },
            '&.onlyIcon span': {
              m: 0,
            },
            span: {
              h: '1rem',
            },
          }}
        >
          {showChildren}
        </Button>
      </Ripples>
    </Box>
  )
}

Btn.displayName = 'Btn'
