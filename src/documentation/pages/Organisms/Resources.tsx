import { FC } from 'react'
import { MyHeading, MyText, MyTittle, MyLink, Code } from '@/documentation/components'
import { Resources } from '@/organisms/Resources'

const dataFakeEvents = [
  {
    id: '1',
    resourceType: 'xlsx',
    resourceTitle: 'Calendario semestral',
    resourceDetail: 'Fechas importantes de tus cursos',
    resourceLink: 'https://www.oas.org/juridico/spanish/mesicic2_col_ley_30_sp.pdf',
    resourceTextDownload: 'Descargar',
    resourceNameFile: 'Calendario semestral',
  },
  {
    id: '1',
    resourceType: 'pdf',
    resourceTitle: 'Calendario semestral',
    resourceDetail: 'Fechas importantes de tus cursos',
    resourceLink: 'https://www.oas.org/juridico/spanish/mesicic2_col_ley_30_sp.pdf',
    resourceTextDownload: 'Descargar',
    resourceNameFile: 'Calendario semestral',
  },
]

const ResourcesPage: FC = () => {
  return (
    <>
      <MyHeading>Resource</MyHeading>
      <MyText>
        Los recursos son casos que se usan para mostrar información relevante para el usuario del
        recurso disponible para descargar, estos estan en diferentes formatos y estan adaptados para
        que segun sea el formato definido en{' '}
        <MyLink href="https://www.figma.com/design/DFrZMrJAQIQdzJnIYxD5Qm/Cajas-curso-CV%2FV8?node-id=2871-5674&node-type=frame&t=Yckoe1FoUThTM8DA-0">
          Figma recursos
        </MyLink>{' '}
        correspondan
        <i>
          (Ej: En el caso de que se quiera descargar un recurso pdf, tendra un icono pdf
          correspondiente)
        </i>
      </MyText>
      <MyTittle>Types Definidos</MyTittle>
      <MyText>El componente Resources requiere el siguiente typado:</MyText>
      <Code
        text={`interface ResourcesProps {
  id: number // Identificador del recurso
  resourceType: string // Tipo de recurso en minisculas (pdf, xlsx, docx, etc)
  resourceTitle: string // Titulo del recurso
  resourceDetail: string // Detalle del recurso
  resourceTextDownload: string // Texto del boton de descarga
  resourceLink: string // Link del recurso
  resourceNameFile: string // Nombre del recurso
}
`}
      />
      <Code text="import { Resources } from '@eclass/ui-kit'" />

      <Resources {...dataFakeEvents[0]} />
      <Resources {...dataFakeEvents[1]} />

      <MyTittle>Tipos de iconos en los recursos disponibles</MyTittle>
      <MyText>
        Existen varios tipos de iconos disponibles: Png, Gif, Ppt, Pptx, Doc, Docx, Xls, Xlsx, Csv,
        Pdf, Mp4, Avi, Mkv, Mp3, Wav,
      </MyText>

      <MyTittle>Modo de uso</MyTittle>

      <MyText>
        El recurso se utiliza de manera bastante simple siguiendo el siguiente ejemplo:
      </MyText>
      <Code
        text={`// Importamos el componente
import { Resources } from '@eclass/ui-kit'
//Definimos unas propiedades para el recurso
const dataFakeResources = {
id: '1',
resourceType: 'xlsx',
resourceTitle: 'Calendario semestral',
resourceDetail: 'Fechas importantes de tus cursos',
resourceLink: 'https://www.oas.org/juridico/spanish/mesicic2_col_ley_30_sp.pdf',
resourceTextDownload: 'Descargar',
resourceNameFile: 'Calendario semestral',
}
// Utilizamos el componente
<Resources {...dataFakeResources} />
          `}
      />
      <MyText>
        Como el recurso ejemplo tiene el mismo formato, se puede enviar por spread operator
      </MyText>
    </>
  )
}

export default ResourcesPage
