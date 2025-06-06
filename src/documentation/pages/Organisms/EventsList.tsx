import { Code, MyHeading, MyText, MyTitle } from '@/documentation/components'
import { EventsList } from '@/organisms'
import { vars } from '@/theme'
import { Box } from '@chakra-ui/react'

export const EventsListPage = (): JSX.Element => {
  return (
    <>
      <MyHeading>Events List</MyHeading>

      <MyText>
        El componente <strong>EventsList</strong> corresponde al contenedor de todos los elementos
        incluidos en el detalle de un evento. Estos son:
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Box con día, fecha y hora</li>
          <li>Nombre del evento</li>
          <li>Curso del evento</li>
          <li>Nombre de unidad del evento</li>
        </ul>
      </MyText>

      <MyText>La información se muestra de forma condicional y existen tres casos posibles.</MyText>

      <MyTitle>1. Inicio o fin de curso</MyTitle>

      <MyText>
        Para este tipo de eventos, no se muestra el nombre del curso ni de la unidad ya que viene
        especificada en el título del evento.
      </MyText>

      <Box border={`1px solid ${vars('colors-neutral-platinum')}`} borderTop="none">
        <EventsList
          color="#832DA4"
          key="1"
          name='Inicio del curso "Bienvenidos a la Experiencia eClass"'
          day="miércoles"
          date="19 may"
          time="10:00 hrs."
          text=""
          type="init-course"
        />
        <EventsList
          color="#832DA4"
          key="1"
          name='Fin del curso "Bienvenidos a la Experiencia eClass"'
          day="viernes"
          date="30 jun"
          time="19:00 hrs."
          text=""
          type="end-course"
        />
      </Box>

      <MyTitle>2. Eventos en vista calendario y menú dropdown</MyTitle>

      <MyText>
        Dentro del menú dropdown y las modales que se abren en la vista calendario, se muestra el
        detalle del nombre del curso al que pertenece el evento.
        <br />
        Para esto, el componente debe recibir los props{' '}
        <ul style={{ listStylePosition: 'inside' }}>
          <li>
            <strong>showCourse</strong>, que indica que se muestra el curso
          </li>
          <li>
            <strong>courseName</strong>, con el nombre del curso
          </li>
        </ul>
      </MyText>

      <Box border={`1px solid ${vars('colors-neutral-platinum')}`} borderTop="none">
        <EventsList
          color="#00857A"
          key="1"
          name='Fin del plazo para entregar "Caso 2: Evaluado (con grupo de notas y sin rúbrica)"'
          day="viernes"
          date="30 jun"
          time="19:00 hrs."
          text="Curso"
          type="in-person"
          showCourse
          courseName="[Pruebas TI] - Herramientas para la Gestión Estratégica de Procesos"
        />
      </Box>

      <MyTitle>3. Eventos en vista curso</MyTitle>

      <MyText>
        Dentro de la modal de fechas importantes que se abre en la vista curso, se muestra el
        detalle de la unidad a la que pertenece el evento.
        <br />
        Para esto, el componente debe recibir los props{' '}
        <ul style={{ listStylePosition: 'inside' }}>
          <li>
            <strong>showUnit</strong>, que indica que se muestra la unidad
          </li>
          <li>
            <strong>unitName</strong>, con el nombre de la unidad
          </li>
        </ul>
      </MyText>

      <Box border={`1px solid ${vars('colors-neutral-platinum')}`} borderTop="none">
        <EventsList
          color="#C63361"
          key="1"
          name='Fin del plazo para responder "Level 3 Unit 1 Quiz"'
          day="martes"
          date="27 mar"
          time="19:00 hrs."
          text="Curso"
          type="in-person"
          showUnit
          unitName="Unit 1 Making comparisons"
        />
      </Box>

      <MyTitle>Props</MyTitle>
      <MyText>Lista completa de props obligatorios y opcionales</MyText>
      <Code
        text={`
interface IEventList {
  color?: string // Color del curso asociado
  day: string // Día de la semana
  date: string // Fecha 
  time: string // Hora
  name: string // Nombre del evento
  hasNotification?: boolean // Indica si el evento tiene notificación
  showCourse?: boolean // Indica si se muestra el curso
  showUnit?: boolean // Indica si se muestra la unidad
  courseName?: string // Nombre del curso
  unitName?: string // Nombre de la unidad
  text: string // "Curso"
  type: string // Identificador del tipo de evento
}
        `}
      />
    </>
  )
}

export default EventsListPage
