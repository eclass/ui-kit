# Checklist de revisión

Orden de prioridad. Cada punto cita el criterio WCAG 2.1 principal.

## 1. Roles y atributos ARIA válidos (4.1.2)

- `role` solo con valores de WAI-ARIA (`button`, `dialog`, `tab`...). Nunca el nombre del
  componente o de una clase (`role="Icon"`).
- Si el elemento ya tiene el rol por su etiqueta (`<button>`, `<nav>`, `<ul>`), no repetirlo.
- `role="presentation"`/`"none"` nunca en elementos con semántica propia ni enfocables
  (`<nav>`, `<button>`, `<a>`, `<li>` dentro de lista real).
- Cada `aria-*` debe estar permitido para el rol: `aria-selected` solo en `option`, `tab`, `row`,
  `gridcell`...; `aria-label` no nombra un `div` sin rol.
- `aria-hidden` nunca sobre un contenedor que tenga elementos enfocables o que el usuario deba
  poder leer (menús, listas).
- Si no hay una razón semántica, lo correcto es quitar el `role`, no cambiarlo por otro.
- Si una prueba o un estilo usa el rol como selector (`getByRole('X')`, `[role='X']`), cambiar a
  `data-testid` o a la clase antes de quitarlo.

## 2. Nombre accesible (4.1.2, 1.1.1, 2.4.4, 3.3.2, 2.5.3)

- Todo botón, enlace, input, progressbar y encabezado tiene nombre no vacío.
- Botón solo con ícono: `aria-label`. Ícono decorativo: `aria-hidden`.
- Cuidado con textos que pueden quedar vacíos según las props (valor por defecto `''`,
  `children` ausente, texto que se oculta en móvil y deja solo el ícono).
- El nombre accesible debe contener el texto visible (2.5.3): un `aria-label` distinto del texto
  visible lo reemplaza.
- Los textos por defecto están en español y los que el consumidor pueda necesitar cambiar se
  reciben por props (ver `.claude/rules/conventions.md`).
- `id` únicos: un `id` repetido en el mismo DOM rompe `label`/`aria-labelledby` (4.1.1). En
  componentes que pueden repetirse, generarlos con `uniqueId()` (`src/services`), no fijos.
- La etiqueta debe apuntar al elemento enfocable: `htmlFor` igual al `id` del `<input>` real y
  ese `id` debe existir.
- Si el título o el texto de ayuda de un control está fuera de él, enlazarlos con
  `aria-labelledby` o `aria-describedby` (1.3.1, 3.3.2).

## 3. Teclado (2.1.1, 2.1.2, 2.4.3)

- Todo lo clicable es operable con teclado: `<button>`/`<a>`, o `role` + `tabIndex` + `onKeyDown`
  (`Enter` y `Espacio` en botones).
- El orden del DOM coincide con el orden visual; sin `tabIndex` positivo.
- Widgets compuestos (tabs, menús, listas de opciones): un solo tab stop y flechas dentro
  (roving tabindex o `aria-activedescendant`), `Home`/`End`, `Esc` cierra.
- Sin trampas de foco fuera de un diálogo modal; todo lo que se abre con el mouse se cierra con
  teclado.
- `Box` o `div` con `onClick` sin `as="button"` ni `MenuItem`: no se enfoca ni se anuncia. Es la
  causa típica de una "lista que no se enfoca". El lint no lo detecta aquí.
- `div` con `tabIndex` (por ejemplo `NavBarButton as="div"`) o `div` enfocable dentro de un
  `<button>`: el foco cae en el `div`, que no responde a `Espacio` por sí mismo, y VoiceOver puede
  anunciarlo como "grupo".
- Checkbox o radio personalizados con el `input` oculto (`opacity: 0`): el `input` debe seguir
  recibiendo `Tab` y `Espacio`, y el foco debe verse en el elemento que lo reemplaza.

## 4. Foco (2.4.3, 2.4.7)

- Foco visible en todo interactivo (`_focusVisible`); no `outline: none` sin reemplazo;
  `:focus-visible` mejor que `:focus`.
- Al abrir un diálogo o menú, el foco entra en él; al cerrar, vuelve a quien lo abrió.
- Si una acción elimina o reemplaza el elemento enfocado, mover el foco a un destino lógico, no
  dejarlo en `body`.
- Headers, footers u overlays fijos no deben tapar el elemento con foco (2.4.11 es WCAG 2.2; aquí
  se revisa como buena práctica).
- Controles con validación: error enlazado con `aria-describedby` y `aria-invalid` (3.3.1).

## 5. Mensajes de estado (4.1.3)

- Estados que cambian sin mover el foco (guardado, error, contador, carga) en una región viva:
  `aria-live="polite"`; errores urgentes `role="alert"`.
- La región viva debe existir en el DOM antes de que cambie su contenido.
- No usar `role="alert"` y `aria-live="polite"` a la vez: se contradicen.
- No anunciar en exceso (un contador que se actualiza por tecla, un temporizador por segundo).

## 6. Estructura (1.3.1, 2.4.1, 2.4.6)

- Jerarquía `h1`–`h6` sin saltos; el nivel puede depender de dónde use el consumidor el
  componente: permitir cambiarlo por props (`as`).
- Si un componente es un `nav`, nombrarlo (`aria-label`) cuando pueda haber varios en la página.
- Listas con `ul`/`ol`.

## 7. Componente de librería

- Aceptar y reenviar las props de accesibilidad que el consumidor pueda necesitar (`aria-*`,
  `id`, `as`) en vez de fijarlas.
- Nuevas props de accesibilidad: opcionales y con un valor por defecto que mantenga el
  comportamiento actual; cambiar un `aria-label` o un rol existente puede romper pruebas de los
  consumidores (`getByRole`, `getByLabelText`): avisar antes.

## Qué no se concluye leyendo código

Pasar las pruebas o axe no basta. Pide siempre esta comprobación manual cuando el cambio toque
interacción:

1. Recorrer con `Tab`/`Shift+Tab`: orden lógico, nada inalcanzable, foco siempre visible.
2. Operar con `Enter`, `Espacio`, `Esc` y flechas donde corresponda.
3. Lector de pantalla (VoiceOver en macOS: `Cmd+F5`; NVDA en Windows): nombre, rol y estado
   de cada control, y que los avisos dinámicos se anuncien.
