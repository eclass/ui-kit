# Ripples

Exports: `Ripples`.
Tipos: `dist/atoms/Ripples/Ripples.d.ts` (props tipadas como `any`).

Envuelve un contenido para mostrar una onda expansiva al hacer clic sobre él (efecto de
`react-ripples`). `Btn`, `BtnPrimary` y `BtnSecondary` ya lo traen: no envolverlos.

```tsx
import { Ripples } from '@eclass/ui-kit'
;<div>
  <Ripples>
    <p>Contenido clicable</p>
  </Ripples>
</div>
```

Props:

- `children`: contenido que recibe el efecto.
- `color` (por defecto `'rgba(204,204,204,0.2)'`): color de la onda.

Solo agrega el efecto visual: no hace clicable ni accesible el contenido. Si es una acción, el
contenido debe ser un `button` o `a`.

## Cómo se ve (para reconocerlo en un diseño)

- No tiene apariencia propia: al hacer clic aparece un círculo gris translúcido que crece desde
  el punto del clic y se desvanece en 1 segundo, recortado al área del contenido.
