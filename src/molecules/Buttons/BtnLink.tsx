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
      {...stylesBtnLink}
      aria-label={ariaLabel}
      as={as}
      autoFocus={false}
      className="linkButton"
      cursor={isDisable ? 'not-allowed' : 'pointer'}
      fontSize={fontSize}
      id={id}
      onClick={isDisable ? undefined : onClick}
      opacity={isDisable ? 0.5 : 1}
      role={role}
      tabIndex={tabIndex}
      textDecorationLine={textDecorationLine ? 'underline' : 'none'}
      m={m}
      {...typeButton[as]}
      sx={sx}
    >
      {children}
    </Box>
  )
}

export const stylesBtnLink = {
  backgroundColor: 'transparent',
  borderStyle: 'none',
  color: vars('colors-main-deepSkyBlue'),
  cursor: 'pointer',
  fontFamily: 'Roboto',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1rem',
  padding: '.25em',
  textDecorationLine: 'underline',
  width: 'fit-content',
  _hover: {
    color: vars('colors-neutral-darkCharcoal'),
    cursor: 'pointer',
  },
}

BtnLink.displayName = 'BtnLink'
