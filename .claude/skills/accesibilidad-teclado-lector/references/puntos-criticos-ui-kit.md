# Puntos críticos de ui-kit

Hallazgos de la revisión de accesibilidad hecha desde v8 (noviembre 2026) sobre componentes de
esta librería. Verificados contra el código el 2026-11-11; las líneas pueden moverse: confirmar
con el código antes de citar. Ninguno está corregido todavía. Todo lo que dependa de VoiceOver
sigue marcado `[verificar]`.

## Calendario

- `organisms/Calendar/Dropdown/CalendarDropdown/Components/EventsGroup.tsx:49-53`: cada evento es
  un `Box` con `onClick` (línea 86); un comentario del propio código (línea 52) dice que debería ser
  `MenuItem`. En una prueba manual la lista del calendario no recibió foco. Al cambiarlo, aplicar
  el efecto de foco y mantener `cursor` y el estilo actual (el `sx` de `.chakra-menu__menuitem`
  ya existe en el mismo archivo).

## NavBarButton

- `molecules/NavBarButtons/NavBarButton.tsx:70`: `tabIndex={0}` fijo; con `as="div"` el elemento no
  responde a `Enter`/`Espacio` por sí mismo ni tiene rol de botón (los `type: 'button'` y
  `role: 'button'` de la línea ~109-110 están dentro de `sx`, es decir, son estilos CSS y no
  atributos del elemento). Se usa con `as="div"` en
  `organisms/Calendar/Dropdown/CalendarDropdown/Components/GoToCalendar.tsx:43` y, en v8, en el
  botón de Ayuda: allí VoiceOver lo anunció como "grupo" [verificar].
- Los `Box` internos (`nav-bar-icon`, `nav-bar-text`, líneas ~123 y ~127) llevan `tabIndex={-1}`.
- `as` por defecto es `'button'`: el problema aparece solo cuando el consumidor pasa `as="div"`.
  Cambiar el valor por defecto o la prop es un cambio de API: avisar al usuario.

## Menú de usuario

- `organisms/User/UserDropdown.tsx:178`: `aria-hidden` sobre el `StyledMenuList`. Falta confirmar
  con VoiceOver el efecto en el menú de perfil [verificar].
- `UserDropdown.tsx:192`: `aria-label={onClick ? 'Botón' : \`Vínculo, ${label}`}` en los ítems: no
  contiene el texto visible (2.5.3) y reemplaza al texto. También está en el `dist` 1.63.1 que
  usa v8.
- `UserDropdown.tsx:81`: `aria-label="Mi perfil"` sobre un `Box` sin rol: el nombre no se anuncia
  de forma fiable. Textos fijos en español: si el consumidor debe cambiarlos, recibirlos por props
  con valor por defecto.

## Íconos

- `atoms/Icons/Base.tsx:28-29`: el `svg` lleva `aria-label=" "` y `aria-hidden`, y dentro un
  `<title>icon</title>` (con sufijo `-<title>` si se pasa la prop). Como está `aria-hidden`, el
  lector no lo anuncia: un ícono hecho con `Base` es decorativo por defecto. Si el ícono comunica
  algo, quien lo usa debe dar el nombre en el botón o enlace (`aria-label` en español), no en el
  ícono.
- Los íconos que no pasan por `Base` (p. ej. `molecules/NavBarButtons/Icons/HelpIcon` y
  `CalendarButtonIcon`) no traen `title`, `aria-label` ni `aria-hidden`: revisarlos uno a uno.
  `atoms/Icon/Icon.tsx:42` no usa `Base`, pero también pone `aria-hidden` (y
  `data-testid="icon-<name>"`): es decorativo siempre, sin opción de nombre.

## Convenciones al corregir

- Todo en español (JSDoc, títulos de pruebas); estilos con Chakra `sx`/`_focusVisible`.
- Pruebas junto al archivo (`X.test.tsx`) con `getByRole`/`getByLabelText`; correr solo las
  pruebas tocadas (`npx vitest run <rutas>`).
- Cambios quirúrgicos: no migrar estilos ni refactorizar al pasar. Una mejora grande va de a una
  funcionalidad y sin commitear, para que el usuario revise cada paso.
- Página de documentación (`src/documentation`) actualizada si cambia el comportamiento visible
  de un componente.
