# Patrones con Chakra UI 1.8 y los componentes de ui-kit

Verificado el 2026-11-11 contra `node_modules` de ui-kit (`@chakra-ui/modal` 1.11.1,
`@chakra-ui/styled-system` 1.19.0) y contra `src/`. Lo demás viene de la documentación de Chakra y
debe confirmarse en el código antes de afirmarlo.

## Foco

- `_focusVisible` existe y equivale a `&:focus-visible` (`@chakra-ui/styled-system` 1.19.0). Usar
  `_focusVisible` en vez de `_focus` para el anillo de foco; `NavBarButton` ya lo hace.
- Un arreglo de foco hecho solo por código puede verse mal: revisarlo en el navegador.

## Modales

- `@chakra-ui/modal` 1.11.1 trae `trapFocus`, `returnFocusOnClose`, `initialFocusRef` y
  `finalFocusRef`. Por defecto atrapa el foco y lo devuelve al cerrar.
- Los modales de ui-kit (`src/organisms/Modals`, `ModalAlert`) exponen `autoFocus` y
  `returnFocusOnClose` en sus props (`Modals/types.d.ts`); `ModalMultiple.test.tsx` ya prueba que
  el foco vuelve al disparador. Qué hacen los demás modales con el foco no está verificado.
- Usar `initialFocusRef` cuando el primer elemento enfocable no sea el adecuado.
- Si el elemento que abrió el modal se desmonta, el foco se pierde: usar `finalFocusRef` hacia un
  destino estable.

## Botones y enlaces (`src/molecules/Buttons`)

- `IconButton` de Chakra exige `aria-label` por tipos.
- `BtnTertiary`: los tipos exigen `ariaLabel` si no hay `children`; un `children` que llega vacío
  igualmente deja el botón sin nombre. Tiene `role` (`'button' | 'link'`, por defecto `'button'`).
- `BtnLink`: `ariaLabel` es opcional, acepta `as: 'button' | 'a'` y `role` (`'button' | 'link'`,
  por defecto `'link'`). Sin `children` ni `ariaLabel` queda sin nombre. Cuidado con combinar `as`
  y `role` distintos (p. ej. `as="button"` con `role="link"` por defecto).
- `Box as="button"` o `as="a"` en vez de `Box` con `onClick` y `role="button"`.
- No poner `role` sobre `Box` salvo que haya una razón semántica.
- `NavBarButton` acepta `as: 'button' | 'a' | 'div'` y siempre pone `tabIndex={0}`: con `as="div"`
  ver `puntos-criticos-ui-kit.md`.

## Widgets compuestos

- Chakra documenta los patrones de teclado de `Menu`, `Tabs`, `Accordion` y `Popover`. Antes de
  escribir o corregir un desplegable propio, comprobar si existe uno de Chakra que sirva
  (`CalendarDropdown` y `UserDropdown` ya usan `Menu`/`MenuGroup`/`MenuItem`).
- Cambiar un `Box` por `MenuItem` modifica el rol y el foco (`menuitem`, navegación con flechas):
  revisar estilos (`_hover`, `_focus`) y pruebas existentes.
