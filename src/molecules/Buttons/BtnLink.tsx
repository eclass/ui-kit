import { vars } from '@theme'
import { Box } from '@chakra-ui/react'

export interface props {
  children?: React.ReactNode
  m?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  id?: string
}

export function BtnLink({ children, m = '0', onClick, id }: props): JSX.Element {
  return (
    <Box
      as="button"
      id={id}
      backgroundColor="transparent"
      borderStyle="none"
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
      onClick={onClick}
      _hover={{
        color: vars('colors-neutral-darkCharcoal'),
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  )
}

BtnLink.displayName = 'BtnLink'
