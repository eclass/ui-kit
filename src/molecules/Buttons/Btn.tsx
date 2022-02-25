import { Box, Button as BtnChackra } from '@chakra-ui/react'
// import Ripples from 'react-ripples'

import { vars } from '@theme'

interface colorScheme {
  main: string
  hover: string
  disabled: string
}

interface props {
  bg?: colorScheme
  children?: React.ReactNode
  color?: string
  disabled?: boolean
  leftIcon?: React.ReactElement
  m?: string
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactElement
  rounded?: boolean
  size?: 'regular' | 'small'
  stretched?: boolean
}

export function Btn({
  bg,
  children,
  color = vars('colors-neutral-white'),
  disabled = false,
  leftIcon,
  m = '0',
  isLoading = false,
  onClick,
  rightIcon,
  rounded = false,
  size = 'regular',
  stretched = false,
}: props): JSX.Element {
  let showChildren = children ?? null
  if (!children && !rightIcon && !leftIcon) {
    showChildren = 'Button'
  }

  const borderRadius = rounded ? '50%' : vars('radii-small')
  const widthBorderHover = 3

  return (
    <Box
      margin={m}
      role="group"
      sx={{
        '.react-ripples': {
          borderRadius,
          display: `${stretched ? 'grid' : 'inline-flex!important'}`,
        },
      }}
    >
      {/* <Ripples> */}
      <BtnChackra
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          onClick?.(e)
        }}
        bg={bg?.main ?? vars('colors-main-deepSkyBlue')}
        color={color}
        disabled={disabled}
        borderRadius={borderRadius}
        padding={size === 'regular' ? vars('space-s') : vars('space-xs')}
        height="auto"
        isLoading={isLoading}
        spinner={<div>Cargando...</div>}
        iconSpacing={vars('space-xs')}
        position="relative"
        w={stretched ? '100%' : 'auto'}
        _hover={{
          bg: bg?.hover ?? vars('colors-main-azureRadiance'),
        }}
        _focus={{
          boxShadow: 'none',
        }}
        _active={{
          bg: bg?.main ?? vars('colors-main-azureRadiance'),
        }}
        _disabled={{
          opacity: '50%',
          cursor: 'not-allowed',
        }}
        _before={{
          content: `""`,
          height: '100%',
          width: '100%',
          borderRadius,
          position: 'absolute',
          boxShadow: `inset 0px 0px 0px ${widthBorderHover}px ${vars('colors-main-deepSkyBlue')}`,
          zIndex: -1,
          transition: 'all .1s ease-in-out',
        }}
        sx={{
          ':focus': {
            ':before': {
              height: `calc(100% + ${widthBorderHover * 3}px)`,
              width: `calc(100% + ${widthBorderHover * 3}px)`,
            },
          },
        }}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {showChildren}
      </BtnChackra>
      {/* </Ripples> */}
    </Box>
  )
}

Btn.displayName = 'Btn'
