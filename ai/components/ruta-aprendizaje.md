# BoxLearningPath

Exports: `BoxLearningPath`.
Tipos: `dist/organisms/CourseList/Boxes/BoxLearningPath.tsx` (`IBoxLearningPath`, no
exportado).

## Cuándo usarlo

Casos en que hay rutas de aprendizaje.

## Ejemplo

```tsx
import { BoxLearningPath } from '@eclass/ui-kit'

export function RutaAprendizaje({ learningPath }: { courses: any[] }): JSX.Element {
  return (
    <>
      {learningPath.map((path, index) => (
        <BoxLearningPath
          headerImage={path.headerImg}
          title={path.title}
          coursesCount={path.count}
          progress={path.progress}
          pathHref={path.href}
          buttonLabel={path.btnLabel}
          start={{
            level: 'Nivel 1 - Aplica',
            courseTitle: 'Fundamentos de IA generativa y prompting',
            courseHref: 'www.google.com',
            thumbnail: '/img/curso-1.png',
          }}
        />
      ))}
    </>
  )
}
```

## Props clave

- `headerImage`, `title` y `coursesCount` (obligatorios): imagen, nombre y cantidad de cursos de la ruta.
- `progress`: porcentaje de avance (0-100).
- `start`: información sobre curso inicial o curso con última actividad.
- `buttonLabel`: texto del botón, por defecto: "Ver ruta de aprendizaje".
- `pathHref`: href para navegar a vista de ruta.
- `hasFinished`: valor booleano que indica si la ruta ha finalizado.


## Cómo se ve (para reconocerlo en un diseño)

- Caja parecida a caja curso tradicional.
- Header con imagen y texto sobrepuesto con título de la ruta.
- Barra de progreso que muestra porcentaje de avance.
- Sección con fondo gris que indica curso por el cual comenzar o retomar, o alerta info de curso finalizado.
