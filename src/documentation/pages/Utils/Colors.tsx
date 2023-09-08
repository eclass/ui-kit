import { ColorsType } from '@/documentation/components/Color/ColorsType'
import { MyHeading, MyText, MyTittle } from '@/documentation/components/'

export const Colors = (): JSX.Element => {
  return (
    <>
      <MyHeading>Paleta de colores</MyHeading>
      <MyText>
        Esta paleta representa nuestra personalidad como marca y nuestros principios. Pero también
        ayudan a nuestros usuarios a navegar fácilmente en nuestra plataforma. Una combinación
        cromática que le ayuda a decidir y a sentirse en confianza
      </MyText>
      <MyTittle divider={false}>Principales</MyTittle>
      <MyText>
        Los colores principales se pueden encontrar frecuentemente en toda la plataforma. Pueden
        hallarse en llamados a la acción primaria tanto primaria como secundaria, como fondo y en
        tipografías.
      </MyText>
      <ColorsType type="main" />

      <MyTittle>Secundarios</MyTittle>
      <MyText>Los colores secundarios son de uso acotado para instancias específicas</MyText>
      <ColorsType type="secondary" />
      <MyTittle>Alertas</MyTittle>
      <MyText>
        Estos colores nos ayudan a que las distintos procesos de la plataforma sean comunicadas de
        forma evidente y correcta a los usuarios. Pueden hallarse en iconografía, tipografías y como
        fondo.
      </MyText>
      <ColorsType type="alert" />
      <MyTittle>Iconografía</MyTittle>
      <MyText>
        Colores utilizados para el sistema de iconos principales e ilustraciones de hitos en la
        plataforma.
      </MyText>
      <ColorsType type="icon" />
      <MyTittle>Neutros</MyTittle>
      <MyText>
        Esta gama de tonos grises se utilizan a lo largo de toda la plataforma, tanto en tipografía
        como en bordes y sombras de distintos componentes.
      </MyText>
      <ColorsType type="neutral" />
    </>
  )
}

export default Colors
