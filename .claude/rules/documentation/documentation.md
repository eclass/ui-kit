---
paths:
    - "src/documentation/**"
---

# Documentación (sitio de componentes)

Sitio publicado en GitHub Pages en cada release (`npm run deploy`); en local, `npm run docu`.
Todo componente o funcionalidad nueva actualiza su página en el mismo cambio.

## Página nueva

1. Crear `src/documentation/pages/<Nivel>/<Componente>.tsx` (`Atoms`, `Molecules`, `Organisms`,
   `Utils`) con un componente `View<Componente>` exportado con nombre **y** `export default`
   (la ruta lo carga con `React.lazy`).
2. Registrarla en `src/documentation/utils/routes.tsx`:
   - `React.lazy(async () => await import('../pages/<Nivel>/<Componente>'))` bajo el comentario de
     su nivel (`/** ORGANISMS */`, ...).
   - Agregar `{ path: '/<nivel>/<componente>', label: '<Nombre>', component: <X /> }` en el array
     `routes`, dentro de la sección de su nivel. El orden del array es el orden del menú.

## Contenido

- Importar el componente como lo haría el consumidor: desde `@/index`, `@atoms`, `@molecules` u
  `@organisms`, no desde su archivo interno.
- Componentes de la documentación en `@/documentation/components`:
  - `MyHeading`: nombre del componente. `MyTitle`: título de cada variante o prop.
  - `MyText`: descripción en español (qué es, para qué se creó, cuándo usarlo).
  - `Code`: `import` desde `@eclass/ui-kit` y el código de cada ejemplo.
  - `ListComponent`: varias variantes en fila. `Notes`, `BoxCopy`: notas y textos copiables.
- Por cada variante o prop relevante: `MyTitle` + `MyText` + el ejemplo renderizado + su `Code`.
- Datos de ejemplo en una constante al final del archivo (ver `pages/Organisms/SimpleCourseBox.tsx`);
  imágenes por URL de `https://cdn.eclass.com/...`, nunca archivos en el repo.

## Al modificar un componente existente

- Prop nueva o cambio de comportamiento: agregar o actualizar su sección (`MyTitle`, ejemplo y
  `Code`) en la página del componente.
- Si el componente no tiene página, avisar al usuario antes de crearla.
