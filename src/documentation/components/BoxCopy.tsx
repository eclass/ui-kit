import { Box, BoxProps, useClipboard } from '@chakra-ui/react'
import { FC } from 'react'

interface IBoxCopy extends BoxProps {
  text: string
}
export const BoxCopy: FC<IBoxCopy> = ({ text, children, ...rest }): JSX.Element => {
  const { hasCopied, onCopy } = useClipboard(`vars('${text}')`)

  return (
    <Box w="fit-content" {...rest} onClick={onCopy} position="relative" cursor="pointer">
      <Box
        className="clipboard"
        position="absolute"
        placeContent="center"
        top="0"
        left={0}
        h="100%"
        w="100%"
        display="grid"
      >
        {hasCopied ? (
          <Box
            as="span"
            bg="whiteAlpha.700"
            color="neutral.darkCharcoal"
            fontSize=".75rem"
            borderRadius="base"
            border="light"
            p=".25rem 1rem"
          >
            copiado
          </Box>
        ) : null}
      </Box>
      {children}
    </Box>
  )
}
