import { Box } from '@chakra-ui/react'

import { BoxCopy, MyHeading, MyText, Code } from 'documentation/components'
import { vars } from 'theme'

export const ViewSpacialUnits = (): JSX.Element => {
  const sizes = [
    { size: 'xxs', px: 4 },
    { size: 'xs', px: 8 },
    { size: 's', px: 16 },
    { size: 'm', px: 24 },
    { size: 'l', px: 32 },
    { size: 'xl', px: 48 },
    { size: 'xxl', px: 80 },
  ]
  return (
    <>
      <MyHeading>Spacial Units</MyHeading>
      <MyText>
        Las unidades espaciales determinan el espacio entre elementos como título, texto del cuerpo,
        imágenes, márgenes, contenedores, etc. En nuestro caso, los valores de espaciado tienen que
        correlacionarse con nuestra cuadrícula de línea base elegida de <strong>4px</strong>{' '}
        (nuestras unidades espaciales siempre deben ser un múltiplo de 4) .
      </MyText>

      {sizes.map((item) => (
        <SizeGroup item={item} key={item.px} />
      ))}
    </>
  )
}
interface ISize {
  size: string
  px: number
}
const SizeGroup = ({ item }: { item: ISize }): JSX.Element => {
  return (
    <>
      <BoxCopy display="flex" gap={vars(`space-${item.size}`)} text={`space-${item.size}`}>
        <Size item={item} />
        <Size item={item} />
      </BoxCopy>
      <Code text={`vars('space-${item.size}')`} />
    </>
  )
}

const Size = ({ item }: { item: ISize }): JSX.Element => {
  return (
    <Box
      bg={vars('colors-icon-lightSeaGreen')}
      display="grid"
      h="5.5rem"
      placeContent="center"
      w="5.5rem"
      textAlign="center"
    >
      <Box as="span" fontWeight="bold" textTransform="uppercase">
        {item.size}
      </Box>
      <Box as="span" fontSize="1rem">
        {item.px}px
      </Box>
    </Box>
  )
}

export default ViewSpacialUnits
