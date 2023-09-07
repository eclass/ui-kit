import { BoxCopy, ListComponent, MyHeading, MyText, Code } from '@/documentation/components'
import { vars } from '@/theme'

export const ViewShadowsElevation = (): JSX.Element => {
  return (
    <>
      <MyHeading>Shadows § Elevation</MyHeading>
      <MyText>
        Algunos de nuestros componentes necesitan separarse del resto de la interfaz para ello se
        dispone de las sombras, que están reservadas para estos componentes (por ejemplo, menú
        desplegable o modales).
      </MyText>
      <ListComponent gap="5rem" m="3rem 0 !important">
        <BoxCopy h="5.5rem" w="5.5rem" boxShadow={vars('shadows-sm')} text="shadows-sm" />
        <BoxCopy h="5.5rem" w="5.5rem" boxShadow={vars('shadows-md')} text="shadows-md" />
        <BoxCopy h="5.5rem" w="5.5rem" boxShadow={vars('shadows-lg')} text="shadows-lg" />
      </ListComponent>
      <Code
        text={`<Box boxShadow={vars('shadows-sm')} />
<Box boxShadow={vars('shadows-md')} />
<Box boxShadow={vars('shadows-lg')} />`}
      />
    </>
  )
}

export default ViewShadowsElevation
