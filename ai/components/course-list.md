# CourseList

Exports: `CourseList`, `CourseStatus`, `dataFake`, `maxWidthCoursesList`.
Tipos: `dist/organisms/CourseList/types.d.ts` (`WrapperCoursesProps`, `ExtendAcademicList`,
`CourseClickPayload`); cada curso es un `AcademicBox` de `@eclass/api`
(`src/Platform/Query/CourseList/AcademicBox.ts` en el paquete de tipos `@types/eclass__api`).

## Cuándo usarlo

- `CourseList`: grilla de tarjetas de cursos del alumno ("Mis cursos"), con imagen, etiquetas,
  fechas, estado o avance, información extra y una acción al pie. Los datos vienen tal cual del
  backend (`AcademicList` de la query `CourseList`).
- `CourseStatus`: solo la línea de estado o avance de un curso (ícono + texto, y nota final si
  está calificado), por si se necesita fuera de la tarjeta.
- `maxWidthCoursesList(nCols = 4)`: ancho máximo del contenedor para que entren `nCols`
  columnas exactas. Devuelve `{ px, rem, remValue }`.
- `dataFake`: arreglo de cursos de ejemplo (uno por estado) para maquetas y pruebas; no usar en
  producción.

## Ejemplo

```tsx
import { Box } from '@chakra-ui/react'
import { CourseList, maxWidthCoursesList } from '@eclass/ui-kit'

export function MisCursos({ courses }: { courses: any[] }): JSX.Element {
  return (
    <Box maxW={maxWidthCoursesList(3).px} m="0 auto">
      <CourseList
        courses={courses}
        typeBox="TRADITIONAL"
        modalPaymentText={{
          title: 'Curso congelado por pagos pendientes',
          body: 'Para regularizar esta situación, comunícate con tu ejecutivo.',
          buttonName: 'Entendido',
        }}
      />
    </Box>
  )
}
```

## Datos de cada curso (resumen)

Todos opcionales; la tarjeta muestra solo lo que llega.

- `id` (key), `name`, `background` (imagen), `logo` y `logoAlt` (logo del certificador).
- `Profile: { id, name }`: si `id` no es 4 (alumno), muestra una etiqueta con el perfil y la
  tarjeta queda clicable aunque `action.enabled` sea `false`.
- `labels: { id, text }[]`: etiquetas arriba. `id: 'NEW'` va en naranjo, `'ADMIN'` en celeste.
- `soonCourse: { show: true, text }`: etiqueta "Próximamente" e imagen al 30 % de opacidad.
- `dateStatus: { hasDates, init, end }`: textos de fecha ya formateados.
- `progress: { label, icon, progress, isApproved, finalGrade }`: `icon` es `'progress'`
  (barra con `progress`), `'schedule'`, `'certificate'`, `'circularCheck'`,
  `'circularInformation'` o `'info'`.
- `status: { id }`: con `id === 7` (calificado) y `finalGrade`, muestra la nota en verde
  (aprobado) o rojo.
- `information: { icon, text, href? }[]`: lista bajo una línea; con `href` el texto es enlace.
- `action: { enabled, text, hasIcon, href, targetBlank }`: pie de la tarjeta y destino del clic.
- `hasFinanzeFreezed`: con `modalPaymentText`, el texto del pie abre el modal de pago pendiente.
- `onClick(course)`: acción propia al seleccionar la tarjeta; reemplaza la navegación a
  `action.href` y recibe el curso completo.

## Props clave (`WrapperCoursesProps`)

- `courses` (obligatorio): arreglo de cursos. Si es `undefined` no renderiza nada.
- `typeBox` (por defecto `'TRADITIONAL'`): `'TRADITIONAL'` (tarjeta completa),
  `'IMAGE_LARGE'` o `'IMAGE_SMALL'` (solo imagen con título). `'TRADITIONAL_LANDSCAPE'` existe
  en el tipo pero hoy se ve igual que `'TRADITIONAL'`. Aplica a todo el listado.
- `modalPaymentText: { title, body, buttonName }`: textos del modal de pago pendiente. Sin esta
  prop no hay modal.
- `m` (por defecto `'0 auto'`): margen de la grilla.

Textos: todos los visibles vienen en los datos del curso; el componente no agrega textos
propios salvo `'logo'` como `alt` por defecto del logo.

`CourseStatus` recibe `progress` (obligatorio) y `status`.

## Cómo se ve (para reconocerlo en un diseño)

- **Grilla**: columnas de mínimo 285px (`repeat(auto-fill, minmax(17.8125rem, 1fr))`), 20px
  entre columnas y 28px entre filas.
- **TRADITIONAL**: tarjeta blanca con borde gris claro (`borders-light`, `neutral-platinum`) y
  radio de 8px (`radii-big`); sombra suave al pasar el mouse.
  - Arriba, imagen de 140px de alto con etiquetas (`Label`) en la esquina superior izquierda y
    el logo del certificador (100x56px, fondo blanco) montado sobre el borde inferior de la
    imagen.
  - Debajo: fechas en 12px gris oscuro separadas por una barrita, nombre del curso en negrita
    16px, línea de estado con ícono o barra de progreso y nota final en una etiqueta verde o
    roja, y lista de información en 12px gris con íconos.
  - Pie separado por una línea, centrado: texto de la acción en azul (`main-deepSkyBlue`,
    peso 500) con flecha a la derecha si `hasIcon`; en gris (`neutral-spanishGrey`) si el curso
    no está habilitado.
- **IMAGE_LARGE / IMAGE_SMALL**: imagen de fondo a toda la tarjeta (286px o 197px de alto),
  radio de 10px, degradado negro desde abajo y el nombre del curso en blanco negrita 16px abajo
  a la izquierda (más el texto de certificado si lo hay).
- **Modal de pago**: centrado, ícono de alerta arriba, título, texto centrado y un botón de
  texto azul al pie separado por una línea.
