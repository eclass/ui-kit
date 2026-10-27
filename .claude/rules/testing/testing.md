---
paths:
    - "src/**/*.test.ts"
    - "src/**/*.test.tsx"
---

# Pruebas

## Reglas generales

- Obligatorias en todo componente o funcionalidad nueva. Archivo junto al código:
  `X.test.ts` / `X.test.tsx`.
- Títulos de `describe`/`test` en español, describiendo el comportamiento esperado. Los títulos
  existentes en inglés no se cambian salvo que se pida.
- Probar lo que el componente promete al consumidor: lo que renderiza según sus props, sus
  callbacks (`onClick`, `onClose`...) y su accesibilidad (rol, foco, `aria-*`).
- Correr solo las pruebas tocadas con `npx jest <rutas>` (ver `.claude/rules/commands.md`).

## Configuración global (`src/test/jest-setup.ts`)

Afecta a todas las pruebas; no agregar ahí lógica de una prueba puntual.

- Extiende `expect` con `@testing-library/jest-dom`.
- Mockea `react-ripples` y `dompurify` (no se valida la sanitización).
- `useMediaQuery` de Chakra siempre devuelve `[false]` (vista mobile). Para probar escritorio,
  re-mockearlo en el archivo de prueba (ver `ModalAlert.test.tsx`).
- `css` y `keyframes` de Emotion devuelven `''`: no se pueden validar estilos.

## Según qué se prueba

| Qué | Librería | Funciones |
|---|---|---|
| Componente React | `@testing-library/react` (v12) | `render`, `screen`, `waitFor`, `within` |
| Interacción | `@testing-library/user-event` (v14) | `const user = userEvent.setup()`; `await user.click(...)`, `await user.type(...)` |
| Hook | no hay `renderHook` (RTL 12 sin `@testing-library/react-hooks`) | probarlo a través de un componente de prueba que lo use |
| Función / util `.ts` | solo Jest | `describe`, `test`, `expect`, `jest.fn` |

- Preferir consultas accesibles: `getByRole`, `getByLabelText`, `getByText`; `getByTestId` solo
  si no hay otra opción.
- Componentes que usan el tema, portales o modales de Chakra: envolver en `ChakraProvider`
  (ver `renderWithChakra` en `ModalAlert.test.tsx`).
- Para estados con interacción (abrir/cerrar, foco al cerrar), usar un componente de prueba con
  `useState` que controle el componente (ver `ModalAlertFocusHarness` en `ModalAlert.test.tsx`).

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BtnTertiary } from './BtnTertiary'

describe('BtnTertiary', () => {
  const user = userEvent.setup()

  test('llama a onClick al hacer clic', async () => {
    const onClick = jest.fn()
    render(<BtnTertiary onClick={onClick}>Texto</BtnTertiary>)

    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
```
