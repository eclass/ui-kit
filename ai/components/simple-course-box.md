# SimpleCourseBox

Exports: `SimpleCourseBox`.
Tipos: `dist/organisms/SimpleCourseBox/SimpleCourseBox.d.ts` (`SimpleCourseBoxProps`, no
exportado).

## Cuándo usarlo

Fila horizontal y compacta de un curso (imagen chica, nombre, estado y flecha), pensada para
listar cursos dentro de un modal o un panel, por ejemplo los prerrequisitos de un curso en
Campus Virtual. Para la grilla de "Mis cursos" usar `CourseList`.

## Ejemplo

```tsx
import { SimpleCourseBox } from '@eclass/ui-kit'

export function Prerrequisitos({ courses }: { courses: any[] }): JSX.Element {
  return (
    <>
      {courses.map((course, index) => (
        <SimpleCourseBox
          key={course.id}
          courseName={course.name}
          img={course.background}
          icon={course.progress.icon}
          label={course.progress.label}
          grade={course.progress.finalGrade}
          isApproved={course.progress.isApproved}
          href={course.action.href}
          isEnabled={course.action.enabled}
          noBorder={index === courses.length - 1}
        />
      ))}
    </>
  )
}
```

## Props clave

- `courseName` y `img` (obligatorios): nombre e imagen del curso.
- `icon` + `label`: línea de estado; solo se muestra si llegan los dos. `icon` acepta los mismos
  valores que `CourseList` (`'progress'`, `'schedule'`, `'certificate'`, `'circularCheck'`,
  `'circularInformation'`, `'info'`).
- `grade`: nota junto al estado (solo si hay `icon` y `label`); verde si `isApproved`, roja si
  no.
- `href`: convierte la fila en enlace (misma pestaña) y muestra la flecha.
- `isEnabled` (por defecto `true`): en `false` la fila no es enlace aunque tenga `href`.
- `noBorder` (por defecto `false`): quita la línea inferior (útil en el último elemento).

Sin callbacks: la única acción es navegar a `href`. Todos los textos vienen por props.

## Cómo se ve (para reconocerlo en un diseño)

- Fila a todo el ancho con línea inferior gris clara (`neutral-platinum`); padding de 16px 24px
  en escritorio y 16px en mobile.
- Imagen de 150x74px con radio de 10px a la izquierda; a su derecha el nombre del curso en
  negrita y debajo el ícono de estado con el texto en 14px y, si hay nota, una etiqueta de
  34x17px con texto blanco en negrita 12px sobre verde (`alert-jadeGreen`) o rojo
  (`alert-red`).
- Flecha gris azulada a la derecha cuando es enlace; fondo gris muy claro
  (`neutral-cultured2`) al pasar el mouse.
- Mobile (menos de 768px): la imagen queda arriba y el texto debajo, en columna.
