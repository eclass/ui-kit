import { vars } from '@theme'
import { Button } from '@chakra-ui/react'

interface colorScheme {
  main: string
  hover: string
}

export interface propsTertiaryBtn {
  children?: React.ReactNode
  rightIcon?: React.ReactElement
  leftIcon?: React.ReactElement
  iconColor?: colorScheme
  m?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}
interface props extends propsTertiaryBtn {
  borderColorActive?: string[]
  color?: colorScheme
}

export function BtnTertiary({
  color,
  borderColorActive = [vars('colors-main-deepSkyBlue'), vars('colors-neutral-white')],
  children,
  rightIcon,
  leftIcon,
  m = '0',
  onClick,
}: props): JSX.Element {
  const colorMain = color?.main ?? vars('colors-neutral-gray')
  const onlyIcon = !children && (rightIcon ?? leftIcon) ? 'onlyIcon' : ''

  return (
    <Button
      height="24px"
      background={vars('colors-neutral-white')}
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize="14px"
      lineHeight="16px"
      textDecorationLine="underline"
      borderRadius="12px"
      className={onlyIcon}
      color={colorMain}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      m={m}
      onClick={onClick}
      _hover={{
        color: color?.hover ?? vars('colors-main-deepSkyBlue'),
      }}
      _focus={{
        boxShadow: `inset 0 0 0 2px ${borderColorActive[0]}, inset 0 0 0 4px ${borderColorActive[1]}`,
      }}
      sx={{
        '&:hover': {
          'svg path': {
            fill: vars('colors-main-deepSkyBlue'),
          },
        },
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
