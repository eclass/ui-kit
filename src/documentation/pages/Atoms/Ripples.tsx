import { Box } from '@chakra-ui/react'

import { Ripples } from '@atoms'
import { vars } from '@/theme'
import { ListComponent, MyHeading, MyText, MyTitle, Code } from '@/documentation/components'

export const ViewRipples = (): JSX.Element => {
  return (
    <>
      <MyHeading>Ripples</MyHeading>
      <MyText>
        El componente simula una onda expansiva cuando se le hace clic, lo que hace que la
        experiencia del usuario sea más inmersiva y atractiva.
      </MyText>
      <Box w="100px" h="100px" border={vars('borders-light')}>
        <Ripples />
      </Box>
      <Code text="<Ripples>Contenido</Ripples>" />
      <MyTitle>Personalizar</MyTitle>
      <MyText>
        Se permite personalizar el color del efecto de onda. Puedes elegir el color que mejor se
        adapte al diseño de tu aplicación. Además, el componente incluye un valor por defecto para
        el color en caso de que no se especifique uno.
      </MyText>
      <ListComponent>
        <Box w="100px" h="100px" border={vars('borders-light')}>
          <Ripples color="red" />
        </Box>
      </ListComponent>
      <Code text={`<Ripples color="red">Contenido</Ripples>`} />
    </>
  )
}

export default ViewRipples
