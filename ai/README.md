# Catálogo de @eclass/ui-kit

Componentes React de eClass sobre Chakra UI 1.8. Funcionan desde React 16.8. Todo se importa
desde el paquete:

```tsx
import { ModalMultiple, ModalContent, ModalButtons, BtnPrimary, BoxLearningPath, vars } from '@eclass/ui-kit'
```

## Reglas rápidas

- Primero ui-kit; luego Chakra con `vars('colors-...')`; nunca colores hexadecimales sueltos si
  el color existe en el tema.
- Los modales se abren y cierran desde el componente que los usa (`isOpen` + `onClose`, por
  ejemplo con `useDisclosure` de Chakra).
- Botones: una sola acción principal (`BtnPrimary`) por vista o modal.
- Textos visibles van en español (o con el sistema de traducciones del proyecto).

## Índice

Cada fila es un export público del paquete. La ficha explica cuándo usarlo, un ejemplo y
cómo reconocerlo en un diseño.

| Componente             | Para qué                                                                 | Ficha                                                |
| ---------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------- |
| `BtnPrimary`           | Botón de la acción principal (fondo azul)                                | [botones](components/botones.md)                     |
| `BtnSecondary`         | Botón de acción secundaria (fondo celeste claro, texto azul, sin borde)  | [botones](components/botones.md)                     |
| `BtnTertiary`          | Acción de baja jerarquía: texto gris subrayado con ícono azul            | [botones](components/botones.md)                     |
| `BtnLink`              | Acción con aspecto de enlace                                             | [botones](components/botones.md)                     |
| `Btn`                  | Botón base; preferir las variantes de arriba                             | [botones](components/botones.md)                     |
| `BoxLearningPath`      | Caja para rutas de aprendizaje.                                          |
[ruta-aprendizaje](components/ruta-aprendizaje.md)   |
| `Modal`                | Modal con cabecera azul, título, contenido y botones                     | [modales](components/modales.md)                     |
| `ModalMultiple`        | Un solo modal que cambia entre contenido, alerta y carga                 | [modales](components/modales.md)                     |
| `ModalContent`         | Cuerpo de `Modal`/`ModalMultiple`                                        | [modales](components/modales.md)                     |
| `ModalButtons`         | Fila de botones de `Modal`/`ModalMultiple`                               | [modales](components/modales.md)                     |
| `ModalSimple`          | Modal sin cabecera, solo contenido libre y la X                          | [modales](components/modales.md)                     |
| `ModalCard`            | Modal angosto tipo tarjeta (logros, medallas)                            | [modales](components/modales.md)                     |
| `ModalCardContent`     | Cuerpo de `ModalCard`                                                    | [modales](components/modales.md)                     |
| `ModalAlertNew`        | Modal de alerta (ícono de estado, título, texto) o de carga              | [modales](components/modales.md)                     |
| `ModalAlertButtons`    | Botones a todo el ancho de `ModalAlertNew`/`ModalCard`                   | [modales](components/modales.md)                     |
| `ModalAlert`           | Modal de alerta antiguo; en código nuevo usar `ModalAlertNew`            | [modales](components/modales.md)                     |
| `Alert`                | Alerta en línea dentro de la página (éxito, error, aviso, info)          | [alertas](components/alertas.md)                     |
| `FlashNotification`    | Notificación flotante arriba al centro (toast) tras una acción           | [alertas](components/alertas.md)                     |
| `useFlashNotification` | Hook para lanzar una `FlashNotification`                                 | [alertas](components/alertas.md)                     |
| `TinyAlert`            | Etiqueta chica de estado                                                 | [alertas](components/alertas.md)                     |
| `Label`                | Etiqueta de texto corto con fondo de color (amarillo por defecto)        | [label](components/label.md)                         |
| `Progress`             | Indicador circular pequeño de avance (0 a 100)                           | [progress](components/progress.md)                   |
| `Ripples`              | Efecto de onda al hacer clic                                             | [ripples](components/ripples.md)                     |
| `Icon`                 | Ícono por nombre (`<Icon name="..." />`)                                 | [iconos](components/iconos.md)                       |
| `Icons`                | Componentes de ícono sueltos (`Icons.X`)                                 | [iconos](components/iconos.md)                       |
| `NewTooltip`           | Tooltip oscuro con texto de ayuda al pasar el mouse                      | [tooltip](components/tooltip.md)                     |
| `NavBarButton`         | Botón con ícono y texto del header: calendario, ayuda o accesibilidad    | [navbar-button](components/navbar-button.md)         |
| `UserWay`              | Botón redondo (solo ícono) que abre el widget de accesibilidad UserWay   | [userway](components/userway.md)                     |
| `UserWayCookie`        | Función que guarda y restaura en una cookie las preferencias de UserWay  | [userway](components/userway.md)                     |
| `CourseList`           | Grilla de tarjetas de cursos del alumno ("Mis cursos")                   | [course-list](components/course-list.md)             |
| `CourseStatus`         | Línea de estado o avance de un curso (ícono, texto y nota)               | [course-list](components/course-list.md)             |
| `dataFake`             | Datos de ejemplo de `CourseList`                                         | [course-list](components/course-list.md)             |
| `maxWidthCoursesList`  | Ancho máximo del contenedor de `CourseList` según columnas               | [course-list](components/course-list.md)             |
| `SimpleCourseBox`      | Fila horizontal compacta de un curso (p. ej. prerrequisitos en un modal) | [simple-course-box](components/simple-course-box.md) |
| `CalendarDropdown`     | Botón de calendario de la barra superior con menú de próximos eventos    | [calendario](components/calendario.md)               |
| `EventsList`           | Fila de un evento del calendario (fecha de color, título, curso)         | [calendario](components/calendario.md)               |
| `Eventos`              | Tarjeta con imagen de un evento que enlaza a su página                   | [calendario](components/calendario.md)               |
| `Resources`            | Tarjeta de un recurso descargable o enlace                               | [resources](components/resources.md)                 |
| `UserDropdown`         | Avatar del header que abre el menú de perfil del usuario                 | [user-dropdown](components/user-dropdown.md)         |
| `ShareAndReviewModal`  | Modal al aprobar un curso: compartir en LinkedIn y dejar opinión         | [share-and-review](components/share-and-review.md)   |
| `theme`                | Tema de Chakra de eClass                                                 | [tema](components/tema.md)                           |
| `vars`                 | Variable CSS de un token del tema (`vars('colors-main-deepSkyBlue')`)    | [tema](components/tema.md)                           |
