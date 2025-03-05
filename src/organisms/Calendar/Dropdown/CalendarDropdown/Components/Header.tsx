import { Box } from '@chakra-ui/react'

export const Header = ({ text, isMobile }: { text?: string; isMobile: boolean }): JSX.Element => {
  return (
    <>
      <Box
        as="header"
        bg="#5C5C5C"
        borderRadius={isMobile ? 'none' : '10px 10px 0 0'}
        color="#FFFFFF"
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
      <Box
        className="arrow"
        aria-hidden
        borderBottom="12px solid #5C5C5C"
        borderLeft="14px solid transparent"
        borderRight="14px solid transparent"
        display={isMobile ? 'none' : 'block'}
        height="0"
        position="fixed"
        right={isMobile ? '71px' : '-437px'}
        top={isMobile ? '54px' : '-9px'}
        width="0"
      />
    </>
  )
}
