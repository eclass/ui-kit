import { MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { UserWay } from '@/molecules/UserWay/UserWay'

export const ViewUserWay = (): JSX.Element => {
  return (
    <>
      <MyHeading>UserWay</MyHeading>
      <MyText>
        Trigger personalizado para el widget gratuito de accesibilidad UserWay. Carga el script del
        widget, verifica que esté listo antes de poder ejecutarlo y maneja el click del botón.
      </MyText>
      <Code text="import { UserWay } from '@eclass/ui-kit'" />
      <UserWay />
      <MyTittle>Props y atributos</MyTittle>
      <MyText>
        El componente puede recibir un parámetro de color opcional que cambia el color del menú del
        widget. De no ser especificado, se usa el color predeterminado.
      </MyText>
      <Code text="<UserWay color='#0189FF'/>" />
    </>
  )
}

export default ViewUserWay
