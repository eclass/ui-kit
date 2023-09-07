import { Progress } from '@atoms'
import { MyHeading, MyText, ListComponent, Code } from '@/documentation/components'

export const ViewProgress = (): JSX.Element => {
  return (
    <>
      <MyHeading>Progress</MyHeading>
      <MyText>
        Progress permite visualizar el avance o el progreso de una tarea o proceso. Este componente
        toma como entrada un número, denominado value, el cual está cuidadosamente restringido
        dentro de un rango predefinido de 0 a 100.
      </MyText>
      <ListComponent>
        <Progress value={25} />
      </ListComponent>
      <Code text="<Progress value={25} />" />
      <ListComponent>
        <Progress value={-10} />
        <Progress value={200} />
      </ListComponent>
      <Code
        text={`<Progress value={-10} />
<Progress value={200} />`}
      />
    </>
  )
}

export default ViewProgress
