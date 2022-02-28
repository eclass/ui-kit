import { Box, Button } from '@chakra-ui/react'
import Ripples from 'react-ripples'

import { vars } from '@theme'
import { Loader } from '../Loader/Loader'

interface colorScheme {
  main: string
  hover: string
}
interface props {
  bg?: colorScheme
  /** Colores para el efecto del :active son necesarios dos */
  borderColorActive?: string[]
  children?: React.ReactNode
  color?: string
  disabled?: boolean
  fillLoader?: string
  isFullWidth?: boolean
  leftIcon?: React.ReactElement
  m?: string
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactElement
  rounded?: boolean
  size?: 'regular' | 'small'
  touchDark?: boolean
}

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
}: props): JSX.Element {
  let showChildren = children ?? null
  if (!children && !rightIcon && !leftIcon) {
    showChildren = 'Button'
  }

  const borderRadius = rounded ? '50%' : vars('radii-small')
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
          bg={colorMain}
          size={size === 'regular' ? 'md' : 'sm'}
          borderRadius={borderRadius}
          color={color}
          className={onlyIcon}
          disabled={disabled}
          height="auto"
          iconSpacing={vars('space-xs')}
          isActive={false}
          isLoading={isLoading}
          leftIcon={leftIcon}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            !isLoading && !disabled && onClick?.(e)
          }}
          padding={size === 'regular' ? vars('space-s') : vars('space-xs')}
          position="relative"
          isFullWidth={isFullWidth}
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
            boxShadow: `inset 0 0 0 2px ${borderColorActive[0]}, inset 0 0 0 4px ${borderColorActive[1]}`,
          }}
          _hover={{
            bg: bg?.hover ?? vars('colors-main-azureRadiance'),
          }}
          sx={{
            '&[data-loading]': {
              cursor: 'wait',
            },
            '&.onlyIcon span': {
              margin: 0,
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
