import { vars } from '@theme'
import { Box, CSSObject } from '@chakra-ui/react'

export interface props {
  as?: 'button' | 'a'
  ariaLabel?: string
  children?: React.ReactNode
  fontSize?: string | '0.875rem'
  href?: string
  id?: string
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
      onClick,
      target: target,
    },
    a: {
      href,
      target: target,
    },
  }

  return (
    <Box
      as={as}
      autoFocus={false}
      aria-label={ariaLabel}
      id={id}
      role={role}
      backgroundColor="transparent"
      borderStyle="none"
      className="linkButton"
      color={vars('colors-main-deepSkyBlue')}
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize={fontSize}
      lineHeight="1rem"
      onClick={onClick}
      padding=".25em"
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
