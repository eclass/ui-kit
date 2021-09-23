import { SimpleGrid, Box, BoxProps } from '@chakra-ui/react'

import { colors } from '../../theme/colors'
import { Color } from './Color'

export interface ColorsProps extends BoxProps {
  type: 'main' | 'alert' | 'icon' | 'neutral'
}

export function Colors({ type, ...styles }: ColorsProps): JSX.Element {
  return (
    <Box {...styles}>
      <SimpleGrid columns={6} spacing={5} minChildWidth="8rem">
        {Object.keys(colors[type]).map((color: string, index) => (
          <Color key={index} type={type} color={color} hexa={colors[type][color]} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

Colors.displayName = 'Colors'
