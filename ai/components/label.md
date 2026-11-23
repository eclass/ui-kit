# Label

Exports: `Label`.
Tipos: `dist/atoms/Label/Label.d.ts` (`LabelProps`; no se reexporta desde el índice del paquete).

Etiqueta de texto corto con fondo de color para categorizar o destacar (p. ej. "Obligatorio",
"Nuevo"). Para un estado con ícono (éxito, error, aviso) usar `TinyAlert` (ver
[alertas](alertas.md)).

```tsx
import { Label, vars } from '@eclass/ui-kit'

<Label>Obligatorio</Label>
<Label bg={vars('colors-main-deepSkyBlue')} color={vars('colors-neutral-white')} size="sm">
  Nuevo
</Label>
```

Props clave (`LabelProps`):

- `children` (obligatoria): texto.
- `bg` (por defecto `vars('colors-icon-ripeMango')`): color de fondo.
- `color` (por defecto `vars('colors-neutral-darkCharcoal')`): color del texto.
- `size`: `'md'` (por defecto) o `'sm'`.
- `m` (`'0'`), `sx`.

## Cómo se ve (para reconocerlo en un diseño)

- Bloque en línea (`inline-block`) con fondo amarillo `icon-ripeMango` y texto
  `neutral-darkCharcoal` por defecto, texto de 12px con interlineado de 14px, sin borde ni ícono.
- `md`: peso 400, padding `0.25em 0.84em`, radio `0.25em`.
- `sm`: mismo tamaño de letra pero en negrita (700), padding más chico (`0.17em 0.67em`) y radio
  `0.42em`.
