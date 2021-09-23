import { Box, Heading, Text, useClipboard, Center } from '@chakra-ui/react'

import { ColorsProps } from './Colors'

interface ColorProps extends ColorsProps {
  color: string
  hexa: string
}

export function Color({ type, color, hexa }: ColorProps): JSX.Element {
  const { hasCopied, onCopy } = useClipboard(`${type}.${color}`)
  return (
    <Box cursor="pointer" onClick={onCopy}>
      <Center bg={`${type}.${color}`} h="80px">
        {hasCopied ? (
          <Box as="span" bg="neutral.cultured2" color="neutral.darkCharcoal">
            nombre copiado
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
