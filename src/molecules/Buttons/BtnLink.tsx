import { vars } from '@theme'
import { Box, CSSObject } from '@chakra-ui/react'

export interface props {
  as?: 'button' | 'a'
  ariaLabel?: string
  children?: React.ReactNode
  fontSize?: string | '0.875rem'
  href?: string
  id?: string
  isDisable?: boolean
  m?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  role?: 'button' | 'link'
  tabIndex?: number
  target?: '_blank' | '_self'
  textDecorationLine?: boolean
  sx?: CSSObject
}

export function BtnLink({
  as = 'a',
  ariaLabel,
  children,
  fontSize = '0.875rem',
  href = '',
  id,
  isDisable = false,
  m = '0',
  onClick,
  role = 'link',
  tabIndex,
  target = '_blank',
  textDecorationLine = true,
  sx,
}: props): JSX.Element {
  const typeButton = {
    button: {
      onClick: isDisable ? undefined : onClick,
      target: target,
    },
    a: {
      href,
      target: target,
    },
  }

  return (
    <Box
      aria-label={ariaLabel}
      as={as}
      autoFocus={false}
      backgroundColor="transparent"
      borderStyle="none"
      className="linkButton"
      color={vars('colors-main-deepSkyBlue')}
      cursor={isDisable ? 'not-allowed' : 'pointer'}
      fontFamily="Roboto"
      fontSize={fontSize}
      fontStyle="normal"
      fontWeight="500"
      id={id}
      lineHeight="1rem"
      onClick={isDisable ? undefined : onClick}
      opacity={isDisable ? 0.5 : 1}
      padding=".25em"
      role={role}
      tabIndex={tabIndex}
      textDecorationLine={textDecorationLine ? 'underline' : 'none'}
      width="fit-content"
      m={m}
      _hover={{
        color: vars('colors-neutral-darkCharcoal'),
        cursor: 'pointer',
      }}
      {...typeButton[as]}
      sx={sx}
    >
      {children}
    </Box>
  )
}

BtnLink.displayName = 'BtnLink'
