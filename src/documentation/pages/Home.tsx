import { MyHeading, MyText, MyTitle, Code } from '../components'
import { Box } from '@chakra-ui/react'
import { CalendarDropdown } from '@/organisms'

export const Home = (): JSX.Element => {
  return (
    <>
      <MyHeading>Información</MyHeading>

      <MyText>
        Este repositorio es una librería de componentes que se pensó para unificar estilos en los
        desarrollos de Eclass. <br />
        La fuente de donde se basan los componentes se encuentran en este Sistema de diseño.
      </MyText>

      <MyTitle>Scripts</MyTitle>
      <MyText>
        Los componentes están al 100% en escritas en archivos typescript.
        <br />
        Además deben ser testeadas en donde el enfoque del testing es asegurarse de que se muestre
        todo lo que se promete.
      </MyText>

      <Box
        justifyItems="end"
        bg="black"
        height="62px"
        alignContent="center"
        display="grid"
        pr="62px"
      >
        <CalendarDropdown
          events={dataFake}
          now="2025-02-26T04:01:00.000Z"
          redirectToCalendar={() => {}}
          text={{
            empty: 'hola',
            header: 'hola',
            tooltip: 'hola',
            course: 'hola',
            events: {
              today: 'hola',
              tomorrow: 'hola',
              next: 'hola',
            },
            seeMore: {
              see: 'hola',
              link: 'hola',
            },
            loading: 'hola',
            buttonCalendar: 'hola',
          }}
        />
      </Box>

      <MyText>Para trabajar de manera local</MyText>
      <Code text="npm run dev" />
      <MyText>Ejecuta los test con jest</MyText>
      <Code text="npm run test" />
    </>
  )
}

export const dataFake = [
  {
    id: 8874,
    student_id: 17347601,
    course_id: 44195,
    class_id: 6,
    status: 'SCHEDULED',
    start: '2025-03-04T03:01:00.000Z',
    end: '2025-03-04T04:01:00.000Z',
    duration_in_minutes: 60,
    type: 'evaluation-release',
    associated_resource: {
      id: 6,
      name: 'Liberación Evaluación sumativa 2',
      description: 'Unidad 2.3: Valores ciudadanos en la era digital',
    },
    course: {
      id: 44195,
      name: 'Formación Ciudadana_FOFC03 (TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'mar 4 mar',
      hours: '0:01 hrs.',
    },
  },
  {
    id: 8882,
    student_id: 17347601,
    course_id: 44195,
    class_id: 6,
    status: 'SCHEDULED',
    start: '2025-03-04T03:01:00.000Z',
    end: '2025-03-04T04:01:00.000Z',
    duration_in_minutes: 60,
    type: 'evaluation-release',
    associated_resource: {
      id: 6,
      name: 'Liberación Evaluación acumulativa 6',
      description: 'Unidad 2.3: Valores ciudadanos en la era digital',
    },
    course: {
      id: 44195,
      name: 'Formación Ciudadana_FOFC03 (TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'mar 4 mar',
      hours: '0:01 hrs.',
    },
  },
  {
    id: 29304,
    student_id: 17347668,
    course_id: 44196,
    class_id: 6,
    status: 'SCHEDULED',
    start: '2025-03-07T03:01:00.000Z',
    end: '2025-03-07T04:01:00.000Z',
    duration_in_minutes: 60,
    type: 'work-release',
    associated_resource: {
      id: 6,
      name: 'Liberación Trabajo Final',
      description: 'Evaluación Final',
    },
    course: {
      id: 44196,
      name: 'Creatividad en los negocios_AOMO01(TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'vie 7 mar',
      hours: '0:01 hrs.',
    },
  },
  {
    id: 1526,
    student_id: 17347669,
    course_id: 44197,
    class_id: 832159,
    status: 'SCHEDULED',
    start: '2025-03-07T13:00:00.000Z',
    end: '2025-03-07T13:40:00.000Z',
    duration_in_minutes: 40,
    type: 'in-person',
    associated_resource: {
      id: 832159,
      name: 'Ayudantía 6 NO USAR',
      description: null,
    },
    course: {
      id: 44197,
      name: 'Contabilidad_AOC404 (TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'vie 7 mar',
      hours: '10:00 hrs.',
    },
  },
  {
    id: 1527,
    student_id: 17347669,
    course_id: 44197,
    class_id: 832160,
    status: 'SCHEDULED',
    start: '2025-03-07T18:00:00.000Z',
    end: '2025-03-07T18:40:00.000Z',
    duration_in_minutes: 40,
    type: 'in-person',
    associated_resource: {
      id: 832160,
      name: 'Ayudantía 7 ESTA NO',
      description: null,
    },
    course: {
      id: 44197,
      name: 'Contabilidad_AOC404 (TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'vie 7 mar',
      hours: '15:00 hrs.',
    },
  },
  {
    id: 29329,
    student_id: 17347601,
    course_id: 44195,
    class_id: 6,
    status: 'SCHEDULED',
    start: '2025-03-08T02:59:00.000Z',
    end: '2025-03-08T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'work-delivery-deadline',
    associated_resource: {
      id: 6,
      name: 'Fin plazo para entregar Evaluación sumativa 1',
      description: 'Unidad 1.3: Diálogo para una ciudadanía crítica y responsable',
    },
    course: {
      id: 44195,
      name: 'Formación Ciudadana_FOFC03 (TESTING TECNOLOGIA NO USAR)',
    },
    formatedDate: {
      start: 'vie 7 mar',
      hours: '23:59 hrs.',
    },
  },
  {
    id: 16643,
    student_id: 17348364,
    course_id: 22487,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2026-01-01T02:59:00.000Z',
    end: '2026-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    associated_resource: {
      id: 1,
      name: 'Fin plazo para responder Pregunta tipo archivo 2',
      description: 'Unidad 1',
    },
    course: {
      id: 22487,
      name: 'Coaching en la Era Digital',
    },
    formatedDate: {
      start: 'mié 31 dic',
      hours: '23:59 hrs.',
    },
  },
  {
    id: 19448,
    student_id: 17242931,
    course_id: 40711,
    class_id: 1,
    status: 'SCHEDULED',
    start: '2026-01-01T02:59:00.000Z',
    end: '2026-01-01T03:59:00.000Z',
    duration_in_minutes: 60,
    type: 'answers-schedule-deadline',
    associated_resource: {
      id: 1,
      name: 'Fin plazo para responder Control Mayo 5',
      description: 'Pruebas Cloze Inacap',
    },
    course: {
      id: 40711,
      name: '[Pruebas TI] - Herramientas para la Gestión Estratégica de Procesos',
    },
    formatedDate: {
      start: 'mié 31 dic',
      hours: '23:59 hrs.',
    },
  },
]

export default Home
