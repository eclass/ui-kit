import { Code, MyHeading, MyText, MyTitle } from '@/documentation/components'
import { CalendarDropdown } from '@/organisms'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

export const CalendarDropdownPage = (): JSX.Element => {
  return (
    <>
      <MyHeading>Calendar Dropdown</MyHeading>

      <MyText>
        El componente <strong>CalendarDropdown</strong> es un menú desplegable que muestra:
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Eventos de hoy</li>
          <li>Eventos de mañana</li>
          <li>Hasta 5 eventos próximos</li>
        </ul>
        <br />
        También incluye un botón que redirige a la vista de calendario y, en caso de haber más de 5
        eventos próximos, un botón link que también lleva al calendario completo.
        <br />
      </MyText>

      <Box
        bg={vars('colors-neutral-darkCharcoal')}
        border={`1px solid ${vars('colors-neutral-platinum')}`}
        display="flex"
        justifyContent="end"
        p="10px"
      >
        <CalendarDropdown
          events={events}
          now="2025-01-01T02:59:00.000Z"
          redirectToCalendar={() => {}}
        />
      </Box>

      <MyText>
        Cuando hay nuevos eventos del día, se muestra un ícono de notificación tanto en el botón del
        menú como en los eventos mismos. Una vez abierto el menu y visualizados los eventos, el
        ícono desaparece.
      </MyText>

      <MyTitle>Props</MyTitle>
      <MyText>El componente recibe los siguientes props:</MyText>
      <Code
        text={`
interface ICalendarDropdown {
  m?: string // Margen opcional para el componente
  courseColors?: Record<string, string> // Lista de colores por curso
  events: any // Lista de eventos
  loading?: boolean // Indica si los eventos están cargando
  now: string // Fecha y hora actual
  redirectToCalendar: () => void // Función que redirige al calendario
  text?: Text // Lista de textos usados en el componente
  onlyToCalendar?: boolean // Si es true, no despliega el menú, solo redirige al calendario, usado en campus virtual
}
                `}
      />

      <MyTitle>Textos</MyTitle>
      <MyText>
        El prop <strong>text</strong> recibe una lista de textos que corresponden a traducciones,
        esta es la estructura:
      </MyText>
      <Code
        text={`
const text = {
    empty: t('CalendarDontEvent'), // Aún no tienes eventos en tu calendario
    header: t('CalendarNextDates'), // Próximas fechas importantes de tus cursos
    tooltip: t('Calendar'), // Calendario
    events: {
      today: t('CalendarToday'), // Hoy
      tomorrow: t('CalendarTomorrow'), // Mañana
      next: t('CalendarNext'), // Próximos
    },
    seeMore: {
      see: t('CalendarSeeMoreNext'), // Ver más fechas en
      link: t('CalendarMyCalendarLowercase'), // Mi calendario
    },
    loading: t('CalendarLoading'), // Cargando
    course: t('CalendarCourse'), // Curso
    buttonCalendar: t('CalendarGoto'), // Ir a Mi Calendario
  }
        `}
      />
      <MyTitle>Colores cursos</MyTitle>
      <MyText>
        El prop <strong>courseColors</strong> recibe un objeto que regista una lista con dos keys:
        id de curso y color asociado. Por ejemplo:
      </MyText>
      <Code
        text={`
{
    "22568": "#3C4DE4",
    "40711": "#832DA4",
    "42715": "#00857A",
    "42900": "#C36220",
    "43365": "#AE1042",
    "44195": "#5C1179",
    "44196": "#DF742C",
    "44197": "#C63361",
    "44211": "#A1635C",
    "44213": "#5383EC"
}
        `}
      />
      <MyTitle>Parámetro now</MyTitle>
      <MyText>
        Es importante que la fecha y hora que recibe el menú en el parámetro 'now' sea la del
        servidor para evitar desajustes.
      </MyText>
    </>
  )
}

export default CalendarDropdownPage

const events = [
  {
    id: 4205,
    student_id: 17158893,
    course_id: 40711,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2025-05-28T04:01:00.000Z',
    end: '2025-05-28T05:01:00.000Z',
    duration_in_minutes: 60,
    type: 'work-release',
    id_resource: 1681658,
    associated_resource: {
      id: 1,
      name: 'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin rúbrica)"',
      description: 'Unidad 2',
    },
    url: null,
    course: {
      id: 40711,
      name: '[Pruebas TI] - Herramientas para la Gestión Estratégica de Procesoss',
    },
    translatedTitle:
      'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin rúbrica)"',
    formatedDate: {
      day: 'miércoles',
      date: '28 may',
      time: '0:01 hrs.',
    },
  },
  {
    id: 4534,
    student_id: 17158893,
    course_id: 40711,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2025-05-29T04:01:00.000Z',
    end: '2025-05-29T05:01:00.000Z',
    duration_in_minutes: 60,
    type: 'evaluation-release',
    id_resource: 1947886,
    associated_resource: {
      id: 1,
      name: 'Se habilita para responder "MCH y MCV"',
      description: 'MCH o MCV',
    },
    url: null,
    course: {
      id: 40711,
      name: '[Pruebas TI] - Herramientas para la Gestión Estratégica de Procesoss',
    },
    translatedTitle: 'Se habilita para responder "MCH y MCV"',
    formatedDate: {
      day: 'jueves',
      date: '29 may',
      time: '0:01 hrs.',
    },
  },
  {
    id: 62947,
    student_id: 17158893,
    course_id: 40711,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2026-01-01T02:59:00.000Z',
    end: '2026-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    id_resource: 1679337,
    associated_resource: {
      id: 1,
      name: 'CalendarEventDeadlineAnswer "Control 3"',
      description: 'Unidad 3',
    },
    url: null,
    course: {
      id: 40711,
      name: '[Pruebas TI] - Herramientas para la Gestión Estratégica de Procesoss',
    },
    translatedTitle: 'Fin del plazo para responder "Control 3"',
    formatedDate: {
      day: 'miércoles',
      date: '31 dic',
      time: '23:59 hrs.',
    },
  },
  {
    id: 80188,
    student_id: 17269014,
    course_id: 22568,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2027-01-01T02:59:00.000Z',
    end: '2027-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    id_resource: 853909,
    associated_resource: {
      id: 1,
      name: 'CalendarEventDeadlineAnswer "Con intentos y tiempo"',
      description: 'Clase con Pruebas de Prueba',
    },
    url: null,
    course: {
      id: 22568,
      name: 'Pruebas contenido v8',
    },
    translatedTitle: 'Fin del plazo para responder "Con intentos y tiempo"',
    formatedDate: {
      day: 'jueves',
      date: '31 dic',
      time: '23:59 hrs.',
    },
  },
  {
    id: 80852,
    student_id: 17269014,
    course_id: 22568,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2027-01-01T02:59:00.000Z',
    end: '2027-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    id_resource: 848781,
    associated_resource: {
      id: 1,
      name: 'CalendarEventDeadlineAnswer "Pregunta tipo archivo toma 2"',
      description: 'Clase con Pruebas de Prueba',
    },
    url: null,
    course: {
      id: 22568,
      name: 'Pruebas contenido v8',
    },
    translatedTitle: 'Fin del plazo para responder "Pregunta tipo archivo toma 2"',
    formatedDate: {
      day: 'jueves',
      date: '31 dic',
      time: '23:59 hrs.',
    },
  },
  {
    id: 80868,
    student_id: 17269014,
    course_id: 22568,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2027-01-01T02:59:00.000Z',
    end: '2027-01-01T03:01:00.000Z',
    duration_in_minutes: 2,
    type: 'answers-schedule-deadline',
    id_resource: 1173885,
    associated_resource: {
      id: 1,
      name: 'CalendarEventDeadlineAnswer "Prueba pregunta text con tiempo"',
      description: 'Unit 1',
    },
    url: null,
    course: {
      id: 22568,
      name: 'Pruebas contenido v8',
    },
    translatedTitle: 'Fin del plazo para responder "Prueba pregunta text con tiempo"',
    formatedDate: {
      day: 'jueves',
      date: '31 dic',
      time: '23:59 hrs.',
    },
  },
  {
    id: 80371,
    student_id: 17269014,
    course_id: 22568,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2027-01-01T02:59:00.000Z',
    end: '2027-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    id_resource: 852623,
    associated_resource: {
      id: 1,
      name: 'CalendarEventDeadlineAnswer "Control refactor de la alerta"',
      description: 'Clase con Pruebas de Prueba',
    },
    url: null,
    course: {
      id: 22568,
      name: 'Pruebas contenido v8',
    },
    translatedTitle: 'Fin del plazo para responder "Control refactor de la alerta"',
    formatedDate: {
      day: 'jueves',
      date: '31 dic',
      time: '23:59 hrs.',
    },
  },
]
