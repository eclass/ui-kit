# Tooltip

Exports: `NewTooltip`.
Tipos: `dist/molecules/Tooltip/NewTooltip.d.ts` (props no exportadas).

Texto de ayuda que aparece al pasar el mouse (o al enfocar) sobre un elemento. Es un `Tooltip`
de Chakra con estilos de eClass.

```tsx
import { NewTooltip, BtnPrimary } from '@eclass/ui-kit'
;<NewTooltip label="Descarga el certificado en PDF" placement="top">
  <BtnPrimary>Descargar</BtnPrimary>
</NewTooltip>
```

Props clave:

- `label`: contenido del tooltip (texto o nodo).
- `placement` (por defecto `'bottom'`): posición de Chakra (`'top'`, `'right'`, `'left'`,
  `'auto-start'`, etc.).
- `isOpen`: lo controla desde afuera (p. ej. abrir al hacer clic con `useDisclosure`). Sin esta
  prop se abre con hover y foco.
- `isDisabled` (`false`): no lo muestra.
- `maxWidth` (`'200px'`), `m`, `sx`, `transform`, `className` (`'tooltip'`).
- Se cierra al hacer clic sobre el elemento.
- Envuelve a `children` en un `<span>`: el elemento que dispara el tooltip es ese span.

## Cómo se ve (para reconocerlo en un diseño)

- Globo oscuro `neutral-darkCharcoal` con texto blanco de 12px peso 400, padding de 8px,
  bordes redondeados de 10px, ancho máximo de 200px y una flecha del mismo color apuntando al
  elemento. Por defecto aparece debajo.
