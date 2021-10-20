import { Box, Heading, Text, useClipboard, Center } from '@chakra-ui/react'

import { ColorsProps } from './Colors'

interface ColorProps extends ColorsProps {
  color: string
  hexa: string
}

export function Color({ type, color, hexa }: ColorProps): JSX.Element {
  const { hasCopied, onCopy } = useClipboard(`colors-${type}-${color}`)
  return (
    <Box cursor="pointer" onClick={onCopy}>
      <Center bg={`${type}.${color}`} h="8rem" borderRadius="base" border="light">
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
      </Center>
      <Heading as="h4" size="sm" mt="2">
        {color}
      </Heading>
      <Text fontSize="xs">{hexa}</Text>
    </Box>
  )
}

Color.displayName = 'Color'
