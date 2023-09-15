import { Label } from '@atoms'
import { vars } from '@/theme'
import { MyHeading, MyText, MyTittle, ListComponent, Code } from '@/documentation/components/'

export const ViewLabel = (): JSX.Element => {
  return (
    <>
      <MyHeading>Label</MyHeading>
      <MyText>
        Este componente permite asignar y mostrar rápidamente información relevante sobre elementos
        individuales, proporcionando una forma visualmente efectiva de categorizar, destacar o
        etiquetar contenido.
      </MyText>
      <Code text="import { Label } from '@eclass/ui-kit'" />
      <Label>Etiqueta</Label>
      <Code text="<Label>Etiqueta</Label>" />

      <MyTittle>Color de fondo y texto</MyTittle>
      <MyText>
        Tiene por defecto un color de fondo y de texto pero este se puede personalizar según tus
        necesidades de diseño y resaltar información de manera efectiva:
      </MyText>
      <ListComponent>
        <Label bg={vars('colors-secondary-cornsilk')}>deepSkyBlue</Label>
        <Label bg={vars('colors-alert-ice')}>ice</Label>
        <Label bg={vars('colors-main-linkWater')}>linkWater</Label>
        <Label bg={vars('colors-main-deepSkyBlue')} color={vars('colors-neutral-white')}>
          deepSkyBlue
        </Label>
        <Label bg={vars('colors-icon-lightSeaGreen')}>lightSeaGreen</Label>
        <Label bg={vars('colors-neutral-davysGrey')} color={vars('colors-icon-ripeMango')}>
          davysGrey
        </Label>
      </ListComponent>
      <Code
        text={`<Label bg={vars('colors-secondary-cornsilk')}>deepSkyBlue</Label>
<Label bg={vars('colors-alert-ice')}>ice</Label>
<Label bg={vars('colors-main-linkWater')}>linkWater</Label>
<Label bg={vars('colors-main-deepSkyBlue')} color={vars('colors-neutral-white')}>deepSkyBlue</Label>
<Label bg={vars('colors-icon-lightSeaGreen')}>lightSeaGreen</Label>
<Label bg={vars('colors-neutral-davysGrey')} color={vars('colors-icon-ripeMango')}>davysGrey</Label>`}
      />

      <MyTittle>Tamaños</MyTittle>
      <MyText>
        Se ofrece dos tamaños predefinidos que se adaptan a tus necesidades de diseño y
        presentación, por defecto toma el valor de <code>md</code>.
      </MyText>
      <ListComponent>
        <Label size="sm">Label</Label>
        <Label>Label</Label>
      </ListComponent>
      <Code
        text={`<Label size="sm">Label</Label>
<Label>Label</Label>`}
      />
    </>
  )
}

export default ViewLabel
