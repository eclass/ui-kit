import { Box } from '@chakra-ui/react'
import ReactRipples from 'react-ripples'

/**
 * Componente Ripples se debe poner entre un Wrapper y su contenido
 * @example
 * <div>
 *  <Ripples>
 *    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 *  </Ripples>
 * </div>
 */
export function Ripples({ children, color = 'rgba(204,204,204,0.2)' }: any): JSX.Element {
  return (
    <ReactRipples during={1000} color={color}>
      <Box>{children}</Box>
    </ReactRipples>
  )
}
