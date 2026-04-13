import{j as r,F as s,a as e,M as i,b as a,B as d,v as l,aa as c,c as o,C as n}from"./index.caf13dbc.js";const m=()=>r(s,{children:[e(i,{children:"Calendar Dropdown"}),r(a,{children:["El componente ",e("strong",{children:"CalendarDropdown"})," es un men\xFA desplegable que muestra:",r("ul",{style:{listStylePosition:"inside"},children:[e("li",{children:"Eventos de hoy"}),e("li",{children:"Eventos de ma\xF1ana"}),e("li",{children:"Hasta 5 eventos pr\xF3ximos"})]}),e("br",{}),"Tambi\xE9n incluye un bot\xF3n que redirige a la vista de calendario y, en caso de haber m\xE1s de 5 eventos pr\xF3ximos, un bot\xF3n link que tambi\xE9n lleva al calendario completo.",e("br",{})]}),e(d,{bg:"rgb(34, 34, 34)",border:`1px solid ${l("colors-neutral-platinum")}`,display:"flex",justifyContent:"center",p:"10px",children:e(c,{events:u,now:"2025-01-01T02:59:00.000Z",onClickEvent:t=>console.log("Evento clickeado:",t),redirectToCalendar:()=>{}})}),e(a,{children:"Cuando hay nuevos eventos del d\xEDa, se muestra un \xEDcono de notificaci\xF3n tanto en el bot\xF3n del men\xFA como en los eventos mismos. Una vez abierto el menu y visualizados los eventos, el \xEDcono desaparece."}),e(o,{children:"Props"}),e(a,{children:"El componente recibe los siguientes props:"}),e(n,{text:`
interface ICalendarDropdown {
  m?: string // Margen opcional para el componente
  courseColors?: Record<string, string> // Lista de colores por curso
  events: any // Lista de eventos
  loading?: boolean // Indica si los eventos est\xE1n cargando
  now: string // Fecha y hora actual
  onClickEvent?: (event?: Event) => void // Callback al presionar un evento del dropdown
  redirectToCalendar: () => void // Funci\xF3n que redirige al calendario
  text?: Text // Lista de textos usados en el componente
  onlyToCalendar?: boolean // Si es true, no despliega el men\xFA, solo redirige al calendario, usado en campus virtual
}
                `}),e(o,{children:"onClickEvent"}),r(a,{children:["El prop ",e("strong",{children:"onClickEvent"})," es opcional. Si se env\xEDa, se ejecuta al presionar cualquiera de los eventos del dropdown y entrega hacia arriba la informaci\xF3n completa del evento seleccionado."]}),e(n,{text:`
<CalendarDropdown
  events={events}
  now="2025-01-01T02:59:00.000Z"
  redirectToCalendar={() => {}}
  onClickEvent={(event) => {
    console.log('Evento seleccionado:', event)
  }}
/>
        `}),e(a,{children:"La funci\xF3n tambi\xE9n puede enviarse sin usar el par\xE1metro:"}),e(n,{text:`
<CalendarDropdown
  events={events}
  now="2025-01-01T02:59:00.000Z"
  redirectToCalendar={() => {}}
  onClickEvent={() => {
    console.log('Se hizo click en un evento')
  }}
/>
        `}),e(a,{children:"El objeto recibido en el callback tiene una estructura como esta:"}),e(n,{text:`
{
  id: 4205,
  course_id: 40711,
  start: '2025-05-28T04:01:00.000Z',
  end: '2025-05-28T05:01:00.000Z',
  type: 'work-release',
  translatedTitle: 'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin r\xFAbrica)"',
  associated_resource: {
    id: 1,
    name: 'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin r\xFAbrica)"',
  },
  course: {
    id: 40711,
    name: '[Pruebas TI] - Herramientas para la Gesti\xF3n Estrat\xE9gica de Procesoss',
  },
  formatedDate: {
    day: 'mi\xE9rcoles',
    date: '28 may',
    time: '0:01 hrs.',
  },
}
        `}),e(o,{children:"Textos"}),r(a,{children:["El prop ",e("strong",{children:"text"})," recibe una lista de textos que corresponden a traducciones, esta es la estructura:"]}),e(n,{text:`
const text = {
    empty: t('CalendarDontEvent'), // A\xFAn no tienes eventos en tu calendario
    header: t('CalendarNextDates'), // Pr\xF3ximas fechas importantes de tus cursos
    tooltip: t('Calendar'), // Calendario
    events: {
      today: t('CalendarToday'), // Hoy
      tomorrow: t('CalendarTomorrow'), // Ma\xF1ana
      next: t('CalendarNext'), // Pr\xF3ximos
    },
    seeMore: {
      see: t('CalendarSeeMoreNext'), // Ver m\xE1s fechas en
      link: t('CalendarMyCalendarLowercase'), // Mi calendario
    },
    loading: t('CalendarLoading'), // Cargando
    course: t('CalendarCourse'), // Curso
    buttonCalendar: t('CalendarGoto'), // Ir a Mi Calendario
  }
        `}),e(o,{children:"Colores cursos"}),r(a,{children:["El prop ",e("strong",{children:"courseColors"})," recibe un objeto que regista una lista con dos keys: id de curso y color asociado. Por ejemplo:"]}),e(n,{text:`
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
        `}),e(o,{children:"Par\xE1metro now"}),e(a,{children:"Es importante que la fecha y hora que recibe el men\xFA en el par\xE1metro 'now' sea la del servidor para evitar desajustes."})]}),u=[{id:4205,student_id:17158893,course_id:40711,class_id:1,status:"SCHEDULED",start:"2025-05-28T04:01:00.000Z",end:"2025-05-28T05:01:00.000Z",duration_in_minutes:60,type:"work-release",id_resource:1681658,associated_resource:{id:1,name:'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin r\xFAbrica)"',description:"Unidad 2"},url:null,course:{id:40711,name:"[Pruebas TI] - Herramientas para la Gesti\xF3n Estrat\xE9gica de Procesoss"},translatedTitle:'Inicio del plazo para realizar "Caso 2: Evaluado (con grupo de notas y sin r\xFAbrica)"',formatedDate:{day:"mi\xE9rcoles",date:"28 may",time:"0:01 hrs."}},{id:4534,student_id:17158893,course_id:40711,class_id:1,status:"SCHEDULED",start:"2025-05-29T04:01:00.000Z",end:"2025-05-29T05:01:00.000Z",duration_in_minutes:60,type:"evaluation-release",id_resource:1947886,associated_resource:{id:1,name:'Se habilita para responder "MCH y MCV"',description:"MCH o MCV"},url:null,course:{id:40711,name:"[Pruebas TI] - Herramientas para la Gesti\xF3n Estrat\xE9gica de Procesoss"},translatedTitle:'Se habilita para responder "MCH y MCV"',formatedDate:{day:"jueves",date:"29 may",time:"0:01 hrs."}},{id:62947,student_id:17158893,course_id:40711,class_id:1,status:"SCHEDULED",start:"2026-01-01T02:59:00.000Z",end:"2026-01-01T03:59:00.000Z",duration_in_minutes:60,type:"answers-schedule-deadline",id_resource:1679337,associated_resource:{id:1,name:'CalendarEventDeadlineAnswer "Control 3"',description:"Unidad 3"},url:null,course:{id:40711,name:"[Pruebas TI] - Herramientas para la Gesti\xF3n Estrat\xE9gica de Procesoss"},translatedTitle:'Fin del plazo para responder "Control 3"',formatedDate:{day:"mi\xE9rcoles",date:"31 dic",time:"23:59 hrs."}},{id:80188,student_id:17269014,course_id:22568,class_id:1,status:"SCHEDULED",start:"2027-01-01T02:59:00.000Z",end:"2027-01-01T03:59:00.000Z",duration_in_minutes:60,type:"answers-schedule-deadline",id_resource:853909,associated_resource:{id:1,name:'CalendarEventDeadlineAnswer "Con intentos y tiempo"',description:"Clase con Pruebas de Prueba"},url:null,course:{id:22568,name:"Pruebas contenido v8"},translatedTitle:'Fin del plazo para responder "Con intentos y tiempo"',formatedDate:{day:"jueves",date:"31 dic",time:"23:59 hrs."}},{id:80852,student_id:17269014,course_id:22568,class_id:1,status:"SCHEDULED",start:"2027-01-01T02:59:00.000Z",end:"2027-01-01T03:59:00.000Z",duration_in_minutes:60,type:"answers-schedule-deadline",id_resource:848781,associated_resource:{id:1,name:'CalendarEventDeadlineAnswer "Pregunta tipo archivo toma 2"',description:"Clase con Pruebas de Prueba"},url:null,course:{id:22568,name:"Pruebas contenido v8"},translatedTitle:'Fin del plazo para responder "Pregunta tipo archivo toma 2"',formatedDate:{day:"jueves",date:"31 dic",time:"23:59 hrs."}},{id:80868,student_id:17269014,course_id:22568,class_id:1,status:"SCHEDULED",start:"2027-01-01T02:59:00.000Z",end:"2027-01-01T03:01:00.000Z",duration_in_minutes:2,type:"answers-schedule-deadline",id_resource:1173885,associated_resource:{id:1,name:'CalendarEventDeadlineAnswer "Prueba pregunta text con tiempo"',description:"Unit 1"},url:null,course:{id:22568,name:"Pruebas contenido v8"},translatedTitle:'Fin del plazo para responder "Prueba pregunta text con tiempo"',formatedDate:{day:"jueves",date:"31 dic",time:"23:59 hrs."}},{id:80371,student_id:17269014,course_id:22568,class_id:1,status:"SCHEDULED",start:"2027-01-01T02:59:00.000Z",end:"2027-01-01T03:59:00.000Z",duration_in_minutes:60,type:"answers-schedule-deadline",id_resource:852623,associated_resource:{id:1,name:'CalendarEventDeadlineAnswer "Control refactor de la alerta"',description:"Clase con Pruebas de Prueba"},url:null,course:{id:22568,name:"Pruebas contenido v8"},translatedTitle:'Fin del plazo para responder "Control refactor de la alerta"',formatedDate:{day:"jueves",date:"31 dic",time:"23:59 hrs."}}];export{m as CalendarDropdownPage,m as default};
//# sourceMappingURL=CalendarDropdown.0d81f14e.js.map
