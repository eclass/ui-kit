# Progress

Exports: `Progress`.
Tipos: `dist/atoms/Progress/Progress.d.ts` (props no exportadas: solo `value`).

Indicador **circular** pequeño de avance (no es una barra). Para una barra de progreso no hay
componente en ui-kit.

```tsx
import { Progress } from '@eclass/ui-kit'
;<Progress value={35} />
```

Props:

- `value` (obligatoria): porcentaje de 0 a 100. Valores mayores se muestran como 100 y negativos
  como 0.
- No acepta tamaño, color, margen ni texto: siempre se ve igual.

## Cómo se ve (para reconocerlo en un diseño)

- Círculo de 16px (`1rem`) tipo anillo grueso: la parte avanzada en azul `main-deepSkyBlue` y el
  resto en gris `neutral-platinum`. Sin porcentaje escrito. Es un `CircularProgress` de Chakra
  con rol `progressbar` y `aria-valuenow`.
