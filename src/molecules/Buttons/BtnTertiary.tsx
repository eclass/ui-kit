import { vars } from '@theme'
import { Button } from '@chakra-ui/react'
import { Multimedia } from '@/atoms/Icons'

export interface propsTertiaryBtn {
  children?: React.ReactNode
  rightIcon?: boolean
  withoutColor?: boolean
  m?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function BtnTertiary({
  children,
  rightIcon = false,
  withoutColor = false,
  m = '0',
  onClick,
}: propsTertiaryBtn): JSX.Element {
  const gray = vars('colors-neutral-gray')
  const blue = vars('colors-main-deepSkyBlue')
  const white = vars('colors-neutral-white')
  const colorIcon = withoutColor ? gray : blue
  const rIcon = rightIcon ? <Multimedia color={colorIcon} /> : undefined
  const lIcon = !rightIcon ? <Multimedia color={colorIcon} /> : undefined

  return (
    <Button
      height="24px"
      background={white}
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize="14px"
      lineHeight="16px"
      textDecorationLine="underline"
      borderRadius="12px"
      color={gray}
      rightIcon={rIcon}
      leftIcon={lIcon}
      m={m}
      onClick={onClick}
      _hover={{
        color: blue,
      }}
      _focus={{
        boxShadow: `inset 0 0 0 2px ${blue}, inset 0 0 0 4px ${white}`,
      }}
      sx={{
        '&:hover': {
          'svg path': {
            fill: blue,
          },
        },
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
