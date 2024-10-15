import { FC } from 'react'
import { MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { Eventos } from '@/organisms/Events'
import { Box } from '@chakra-ui/react'

const dataFakeEvents = [
  {
    typeEvent: 'LARGE_EVENTS', // Nombre del tipo de evento
    itemsEvent: {
      id: '1', // ID Secuencial
      eventTitle: 'Resuelve tus dudas en vivo | Martes',
      startDate: '04/27/2024', // Si llega en el formato mejor
      startTime: '14:00 hrs', // puede llegar la hora sola o con el texto
      buttonInfo: 'Ver información del evento',
      redirect: 'https://.....', // Enlace de redirección al evento o ruta
      eventImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU', // Imagen del evento
      isMobile: false, // Si es mobile o no
    },
  },
  {
    typeEvent: 'LARGE_EVENTS', // Nombre del tipo de evento
    itemsEvent: {
      id: '1', // ID Secuencial
      eventTitle: 'Resuelve tus dudas en vivo | Martes',
      startDate: '04/27/2024', // Si llega en el formato mejor
      startTime: '14:00 hrs', // puede llegar la hora sola o con el texto
      buttonInfo: 'Ver información del evento',
      redirect: 'https://.....', // Enlace de redirección al evento o ruta
      eventImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU', // Imagen del evento
      isMobile: true, // Si es mobile o no
    },
  },
  {
    typeEvent: 'SMALL_EVENTS', // Nombre del tipo de evento
    itemsEvent: {
      id: '1', // ID Secuencial
      eventTitle: 'Resuelve tus dudas en vivo | Martes',
      startDate: '04/27/2024', // Si llega en el formato mejor
      startTime: '14:00 hrs', // puede llegar la hora sola o con el texto
      buttonInfo: 'Ver información del evento',
      redirect: 'https://.....', // Enlace de redirección al evento o ruta
      eventImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU', // Imagen del evento
      isMobile: true, // Si es mobile o no
    },
  },
]

const EventsPage: FC = () => {
  return (
    <>
      <MyHeading>Eventos</MyHeading>
      <MyText>
        Los eventos estan contenidos en una nueva caja, la cual cuenta con 3 disenios distintos
        agrupados en dos tipos
        <strong> LARGE_EVENTS</strong> y <strong> SMALL_EVENTS.</strong>
        LARGE_EVENTS: contiene un responsive para mobile y desktop.
      </MyText>
      <MyTittle>Types Definidos</MyTittle>
      <MyText>El componente Eventos requiere el siguiente typado:</MyText>

      <Code
        text={`export interface EventosProps {
typeEvent: 'SMALL_EVENTS' | 'LARGE_EVENTS' | string // Tipo de caja
isMobile?: boolean // Si es mobile o no
itemsEvent: ItemsEventsProps // Objeto de eventos
}

export interface ItemsEventsProps {
id: string // Key para ordenar
eventTitle: string // Titulo del evento
startDate: string // Fecha de inicio del evento
startTime: string // Hora de inicio del evento
buttonInfo: string // Texto del boton
redirect: string // Link de redireccion
eventImage: string // Imagen del evento
targetBlank?: boolean // Si abre en nueva pestaña
isMobile?: boolean // Si es mobile o no
}

`}
      />
      <i>Se deja en espanol debido a que Event es una funcion nativa</i>
      <Code text="import { Eventos } from '@eclass/ui-kit'" />
      <Eventos {...dataFakeEvents[2]} />
      <MyTittle>Estados</MyTittle>
      <MyText>Existen 3 posibles estados que definen el diseño del evento.</MyText>
      <Box display="grid" gap="16px">
        <MyText>
          <strong>LARGE_EVENTS</strong>
        </MyText>
        <Eventos {...dataFakeEvents[0]} />
        <MyText>
          <strong>LARGE_EVENTS para Mobile</strong>
        </MyText>
        <Eventos {...dataFakeEvents[1]} />
        <MyText>
          <strong>SMALL_EVENTS o por defecto</strong>
        </MyText>
        <Eventos {...dataFakeEvents[2]} />
      </Box>
      <MyTittle>Modo de uso</MyTittle>
      <MyText>
        El Evento se utiliza de manera bastante simple siguiendo el siguiente ejemplo:
      </MyText>
      <Code
        text="// importamos el componente
import { Eventos } from '@eclass/ui-kit'
//Definimos las propieaddes para el Evento
const dataFakeEvents = {
{
typeEvent: 'LARGE_EVENTS',
itemsEvent: {
id: '1',
eventTitle: 'Resuelve tus dudas en vivo | Martes',
startDate: '04/27/2024',
startTime: '14:00 hrs',
buttonInfo: 'Ver información del evento',
redirect: 'https://.....',
eventImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU',
isMobile: false,
},
}
}

// Utilizamos el componente
<Eventos {...dataFakeEvents} />
"
      />
      <Eventos {...dataFakeEvents[0]} />
    </>
  )
}

export default EventsPage
