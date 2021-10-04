import { Box } from '@chakra-ui/react'
import ReactRipples from 'react-ripples'

export function Ripples({ children, color = 'rgba(204,204,204,0.2)' }: any): JSX.Element {
  return (
    <ReactRipples during={1000} color={color}>
      <Box>{children}</Box>
    </ReactRipples>
  )
}

Ripples.displayName = 'Ripples'
