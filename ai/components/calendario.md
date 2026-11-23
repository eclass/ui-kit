# Calendario y eventos

Exports: `CalendarDropdown`, `EventsList`, `Eventos`.
Tipos: `dist/organisms/Calendar/Dropdown/types.d.ts` (`ICalendarDropdown`, `Event`, `Text`),
`dist/organisms/Calendar/EventsList/EventsList.d.ts` (`IEventList`) y
`dist/organisms/Events/EventsTypes.d.ts` (`EventosProps`, `ItemsEventsProps`). Ninguno de estos
tipos se exporta desde el paquete.

## Cuál usar

| Necesito                                                                                                                              | Componente         |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Botón "Calendario" de la barra superior que despliega los eventos de hoy, mañana y próximos                                           | `CalendarDropdown` |
| Una fila de evento (fecha de color + título + curso o unidad), por ejemplo en un modal de fechas importantes o en la vista calendario | `EventsList`       |
| Una tarjeta con imagen de un evento (p. ej. una sesión en vivo) que lleva a su página                                                 | `Eventos`          |

`CalendarDropdown` usa `EventsList` por dentro para cada evento. `Eventos` no tiene relación con
los otros dos: es una tarjeta suelta, no un listado.

## CalendarDropdown

```tsx
import { CalendarDropdown } from '@eclass/ui-kit'
;<CalendarDropdown
  events={events}
  now={serverNow}
  courseColors={{ 40711: '#832DA4' }}
  loading={loading}
  redirectToCalendar={() => history.push('/calendar')}
  onClickEvent={(event) => event?.url && history.push(event.url)}
/>
```

Datos (`events: Event[]`, resumen): `id`, `start` (ISO, define el grupo), `type`,
`translatedTitle`, `course: { id, name }`, `course_id`,
`formatedDate: { day, date, time }` (textos ya formateados), y opcionales `url`,
`duration_in_minutes`, `headquarters_address`.

Props clave:

- `now` (obligatorio): fecha y hora actual, idealmente la del servidor. Con ella agrupa en
  "Hoy", "Mañana" y "Próximos" (máximo 5; si hay más, muestra el enlace "Ver más fechas en Mi
  calendario").
- `redirectToCalendar` (obligatorio): lo llaman el botón "Ir a Mi Calendario" y el enlace de
  "ver más".
- `onClickEvent(event)`: se llama al hacer clic en un evento, solo si el evento tiene `url`.
- `courseColors`: `{ [course_id]: color }` para el bloque de fecha; sin color usa `#82504A`.
- `loading`: muestra el texto de carga.
- `onlyToCalendar` (por defecto `false`): no despliega el menú; el botón solo llama a
  `redirectToCalendar` (uso en Campus Virtual).
- `m`: margen.
- `text`: todos los textos (si se pasa, el objeto debe venir completo). Por defecto:
  `tooltip` 'Calendario' (en mayúsculas en el botón), `header` 'Próximas fechas importantes de
  tus cursos', `buttonCalendar` 'Ir a Mi Calendario', `events.today/tomorrow/next` 'Hoy',
  'Mañana', 'Próximos', `seeMore.see/link` 'Ver más fechas en', 'Mi calendario', `empty` 'Aún no
  tienes eventos en tu calendario', `loading` 'Cargando', `course` (etiqueta del curso, 'Curso').
- `alert`: existe en el tipo pero no tiene efecto.

Comportamiento a considerar: guarda en `localStorage` (`todayEvents`, `seenEvents`,
`hasNewEvents`) qué eventos de hoy ya vio el usuario, para el punto naranjo de "nuevo". En
mobile, al abrir el menú oculta `#ViewContainer` (v8) o el contenido tras `header.header` dentro
de `.main` (Campus Virtual).

## EventsList

```tsx
import { EventsList } from '@eclass/ui-kit'
;<EventsList
  name='Fin del plazo para responder "Control 3"'
  day="miércoles"
  date="31 dic"
  time="23:59 hrs."
  color="#832DA4"
  type="answers-schedule-deadline"
  text="Curso"
  showCourse
  courseName="Gestión Estratégica de Procesos"
  onClick={() => abrirEvento(id)}
/>
```

Props clave (`IEventList`):

- `name`, `day`, `date`, `time`, `type` y `text` (obligatorios). `text` es la etiqueta antes del
  nombre del curso; vacío usa 'Curso'. Con `type="cv-events"` no se muestra la etiqueta.
- `color`: fondo del bloque de fecha.
- `showCourse` + `courseName`: muestra el curso. `showUnit` + `unitName`: muestra la unidad.
  Ninguno de los dos se muestra en `type` de inicio o fin de curso (`init-course`, `end-course`,
  `init-course-flexible`, `end-course-flexible`).
- `duration`: minutos; se muestra solo en `type` `online`, `in-person` o `cpr` y si es mayor que
  0, junto a "Link clase online" o, en `cpr`, a `headquartersAddress` (si no llega, no se muestra
  la ubicación).
- `hasNotification`: punto naranjo junto al título.
- `onClick`: se llama al hacer clic en la fila (no tiene prop `url`).

## Eventos

```tsx
import { Eventos } from '@eclass/ui-kit'
;<Eventos
  typeEvent="LARGE_EVENTS"
  itemsEvent={{
    id: '1',
    eventTitle: 'Resuelve tus dudas en vivo | Martes',
    startDate: '27/04/2024',
    startTime: '14:00 hrs',
    buttonInfo: 'Ver información del evento',
    redirect: '/eventos/1',
    eventImage: 'https://cdn.eclass.com/...',
    targetBlank: false,
    isMobile: false,
  }}
/>
```

- `typeEvent`: `'LARGE_EVENTS'` (horizontal) o cualquier otro valor, como `'SMALL_EVENTS'`
  (vertical, por defecto).
- `itemsEvent`: todos los textos (`eventTitle`, `startDate`, `startTime`, `buttonInfo`) vienen
  aquí ya formateados; `redirect` es el `href` y `targetBlank` lo abre en otra pestaña.
- `itemsEvent.isMobile`: versión mobile de `LARGE_EVENTS`. El `isMobile` de primer nivel no
  tiene efecto.
- Sin callbacks: toda la tarjeta es un enlace.

## Cómo se ve (para reconocerlo en un diseño)

- **CalendarDropdown**: botón de la barra superior (`NavBarButton` tipo calendario, con texto
  "CALENDARIO") con un punto naranjo (`secondary-pumpkin`) si hay eventos nuevos de hoy. Al
  abrir: panel de 500px con sombra y radio de 10px, cabecera gris oscura (`neutral-davysGrey`)
  con texto blanco 14px y una flecha que apunta al botón; botón primario chico "Ir a Mi
  Calendario"; grupos "Hoy", "Mañana", "Próximos" con título en negrita 18px y filas de
  `EventsList`; 552px de alto con scroll. Sin eventos: ilustración y texto en negrita 20px
  centrados. Mobile (menos de 578px): ocupa todo el ancho bajo la barra, sin radio ni sombra.
- **EventsList**: fila con línea superior gris clara y padding de 16px; a la izquierda un bloque
  de 88x74px del color del curso, radio de 4px, con día, fecha y hora en blanco negrita 14px; a
  la derecha el título en negrita 16px y debajo, en gris 14px, "**Curso:** nombre", y la línea
  con íconos celestes (`main-ziggurat`) de ubicación o enlace y duración ("40 min"). Fondo gris
  muy claro al pasar el mouse.
- **Eventos SMALL_EVENTS**: tarjeta de 286x247px, radio de 8px y borde gris claro; imagen con
  degradado negro desde abajo, título blanco en negrita 16px y fecha | hora con íconos de
  calendario y reloj; al pie una franja blanca de 50px con el texto de acción en azul
  (`main-deepSkyBlue`).
- **Eventos LARGE_EVENTS**: imagen de 285x168px a la izquierda y caja de 305px a la derecha con
  borde, título en negrita, fecha | hora con íconos celestes y la franja de acción azul abajo.
  En mobile la imagen (140px de alto) va arriba y todo mide 285px de ancho.
