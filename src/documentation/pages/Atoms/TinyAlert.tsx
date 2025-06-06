import { TinyAlert } from '@atoms'
import { ListComponent, MyHeading, MyText, MyTitle, Code } from '@/documentation/components'

export const ViewTinyAlert = (): JSX.Element => {
  return (
    <>
      <MyHeading>TinyAlert</MyHeading>
      <MyText>
        Este componente permite resaltar y mostrar información importante de una manera visualmente
        atractiva. Son ideales para realzar elementos específicos, como notificaciones, etiquetas de
        estado, o cualquier otro dato que desees destacar.
      </MyText>
      <TinyAlert status="success" />
      <Code text='<TinyAlert status="success" />' />

      <MyTitle>Status</MyTitle>
      <MyText>
        El componente ofrece una variedad de tipos predefinidos que se adaptan a diferentes
        necesidades de diseño. Cada tipo tiene su propio propósito y apariencia, lo que te permite
        personalizar aún más la presentación de la información destacada. Aquí están los tipos
        disponibles:
      </MyText>
      <ListComponent>
        <TinyAlert status="success" />
        <TinyAlert status="error" />
        <TinyAlert status="info" />
        <TinyAlert status="warning" />
        <TinyAlert status="answered" />
        <TinyAlert status="pending" />
        <TinyAlert status="omitted" />
        <TinyAlert status="new" />
        <TinyAlert status="success" text="Texto personalizado" />
      </ListComponent>
      <Code
        text={`<TinyAlert status="success" />
<TinyAlert status="error" />
<TinyAlert status="info" />
<TinyAlert status="warning" />
<TinyAlert status="answered" />
<TinyAlert status="pending" />
<TinyAlert status="omitted" />
<TinyAlert status="new" />
<TinyAlert status="success" text="Texto personalizado" />`}
      />
    </>
  )
}

export default ViewTinyAlert
