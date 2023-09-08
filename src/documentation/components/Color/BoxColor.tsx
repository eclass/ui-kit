import { Heading, Text, Center } from '@chakra-ui/react'
import { BoxCopy } from '../BoxCopy'

interface IColorProps {
  bg: string
  name: string
  type: string
}

export function BoxColor({ type, name, bg }: IColorProps): JSX.Element {
  return (
    <BoxCopy
      text={`colors-${type}-${name}`}
      w="100%"
      sx={{
        '.clipboard': {
          mt: '-18px',
        },
      }}
    >
      <Center bg={bg} h="8rem" w="100%" borderRadius="base" border="light" />
      <Heading as="h4" size="sm" mt="2">
        {name}
      </Heading>
      <Text fontSize="xs">{bg}</Text>
    </BoxCopy>
  )
}
