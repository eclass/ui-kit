import { Box } from '@chakra-ui/react'

import { ListComponent, MyHeading, MyText, MyTittle, BoxCopy, Code } from 'documentation/components'
import { vars } from 'theme'

export const ViewBorders = (): JSX.Element => {
  return (
    <>
      <MyHeading>Borders</MyHeading>
      <MyText>
        Las variables CSS para tipos de bordes ofrecen una gama de colores predefinidos que pueden
        aplicarse a diferentes elementos. Esto te permite seleccionar rápidamente un color que se
        adapte al contexto y al propósito de cada borde.
      </MyText>
      <ListComponent>
        <BoxBorder border="borders-normal" />
        <BoxBorder border="borders-light" />
        <BoxBorder border="borders-active" />
        <BoxBorder border="borders-success" />
        <BoxBorder border="borders-error" />
        <Box p="1rem" bg={vars('colors-neutral-darkCharcoal')}>
          <BoxBorder border="borders-white" />
        </Box>
      </ListComponent>
      <Code
        text={`<Box border={vars('borders-normal')} />
<Box border={vars('borders-light')} />
<Box border={vars('borders-active')} />
<Box border={vars('borders-success')} />
<Box border={vars('borders-error')} />
<Box border={vars('borders-white')} />`}
      />

      <MyTittle>Radio</MyTittle>
      <ListComponent>
        <BoxBorder borderRadius="radii-small" />
        <BoxBorder borderRadius="radii-big" />
        <BoxBorder borderRadius="radii-rounded" />
      </ListComponent>
      <Code
        text={`<Box borderRadius={vars('radii-small')}/>
<Box borderRadius={vars('radii-big')}/>
<Box borderRadius={vars('radii-rounded')}/>`}
      />
    </>
  )
}

export default ViewBorders

interface IBoxBorder {
  borderRadius?: string
  border?: string
}
const BoxBorder = ({ borderRadius, border = 'borders-normal' }: IBoxBorder): JSX.Element => {
  return (
    <BoxCopy
      h="5.5rem"
      w="5.5rem"
      border={vars(border)}
      borderRadius={vars(borderRadius ?? '0')}
      text={borderRadius ?? border}
    />
  )
}
