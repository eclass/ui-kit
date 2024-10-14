import { FC } from 'react'
import { MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
// import { dataFake } from '@/organisms/CourseList/utils'

// const dataFakeEvents = []

const Events: FC = () => {
  return (
    <>
      <MyHeading>Events</MyHeading>
      <MyText>
        Las alertas embebidas se utiliza en contextos en los que es necesario que el usuario pueda
        visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema
        <i>
          (Ej: El estado de una clase en vivo ya agendada, alertar sobre condiciones para repetir
          una evaluación, etc)
        </i>
      </MyText>
      <Code text="import { Alert } from '@eclass/ui-kit'" />

      <MyTittle>Estados</MyTittle>
      <MyText>Existen 4 posibles estados que definen el ícono y color de la alerta.</MyText>
      <Code
        text='<Alert state="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert state="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert state="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert state="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>'
      />
    </>
  )
}

export default Events
