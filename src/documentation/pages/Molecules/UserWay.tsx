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
      <UserWay accountId="ejemploID03" />
      <MyTittle>Props y atributos</MyTittle>
      <MyText>
        El componente puede recibir 2 parámetros que definen atributos del script:
        <li>
          <b>accountId:</b> id de la cuenta vinculada al script.
        </li>
        <li>
          <b>color:</b> color del menú del widget.
        </li>
      </MyText>
      <MyText>
        El parámetro de color viene predefinido con un valor por default, el de accountId es
        requerido y siempre debe incluirse.
      </MyText>
      <Code text="<UserWay accountId='IdDeCuenta34' color='#0189FF'/>" />
    </>
  )
}

export default ViewUserWay
