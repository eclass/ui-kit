import { vars } from '@theme'
import { Box } from '@chakra-ui/react'

export interface props {
  children?: React.ReactNode
  m?: string
  as?: 'button' | 'a'
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  id?: string
  href?: string
}

export function BtnLink({
  children,
  m = '0',
  onClick,
  id,
  as = 'button',
  href = '',
}: props): JSX.Element {
  const typeButton = {
    button: {
      onClick,
    },
    a: {
      href,
      target: '_blank',
    },
  }

  return (
    <Box
      as={as}
      id={id}
      backgroundColor="transparent"
      borderStyle="none"
      className="linkButton"
      width="fit-content"
      padding=".25em"
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize=".875rem"
      lineHeight="1rem"
      textDecorationLine="underline"
      color={vars('colors-main-deepSkyBlue')}
      m={m}
      _hover={{
        color: vars('colors-neutral-darkCharcoal'),
        cursor: 'pointer',
      }}
      {...typeButton[as]}
    >
      {children}
    </Box>
  )
}

BtnLink.displayName = 'BtnLink'
