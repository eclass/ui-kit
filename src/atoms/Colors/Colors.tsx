import { SimpleGrid, Box, BoxProps } from '@chakra-ui/react'

import { colors } from '../../theme/colors'
import { Color } from './Color'

type ColorsType = keyof typeof colors

export interface ColorsProps extends BoxProps {
  type: ColorsType
}

export function Colors({ type, ...styles }: ColorsProps): JSX.Element {
  return (
    <Box {...styles}>
      <SimpleGrid spacing={5} templateColumns="repeat(auto-fill, minmax(8rem, 1fr))">
        {Object.keys(colors[type]).map((color: string, index) => (
          // @ts-expect-error
          <Color key={index} type={type} color={color} hexa={colors[type][color]} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

Colors.displayName = 'Colors'
