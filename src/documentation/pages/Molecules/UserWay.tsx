import { MyHeading, MyText, Code } from '@/documentation/components'
import { UserWay } from '@/molecules/UserWay/UserWay'

export const ViewUserWay = (): JSX.Element => {
  return (
    <>
      <MyHeading>UserWay</MyHeading>
      <MyText>
        Botón personalizado para el widget gratuito de accesibilidad UserWay. Contiene los estilos
        base del elemento customizado y una función que detecta un botón localizado en el archivo
        index.html implementado en el sitio.
      </MyText>
      <UserWay />
      <Code
        text="import { UserWay } from '@eclass/ui-kit'
      <UserWay/>"
      />
      <MyText>
        Al hacer click en este componente, se activa el botón html que actúa como trigger del
        widget. Es importante que el botón al que apunta la función, tenga el id 'userWayTrigger'.
      </MyText>
      <Code
        text="function triggerWidget() {
const buttonB = document.getElementById('userWayTrigger')
if (buttonB?.click) {
buttonB.click() 
}}
      "
      />
    </>
  )
}

export default ViewUserWay
