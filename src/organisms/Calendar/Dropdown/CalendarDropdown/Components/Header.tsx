import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

export const Header = ({ text, isMobile }: { text?: string; isMobile: boolean }): JSX.Element => {
  return (
    <Box
      as="header"
      bg={vars('colors-neutral-davysGrey') ?? '#5C5C5C'}
      borderRadius={isMobile ? 'none' : '10px 10px 0 0'}
      color={vars('colors-neutral-white') ?? '#FFFFFF'}
      fontSize="14px"
      fontWeight="500"
      lineHeight="normal"
      padding="16px"
      position="absolute"
      width={isMobile ? '100vw' : '100%'}
      top={0}
      zIndex="1"
    >
      {text ?? 'Próximas fechas importantes de tus cursos'}
    </Box>
  )
}
