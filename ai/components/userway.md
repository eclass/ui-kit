# UserWay

Exports: `UserWay`, `UserWayCookie`.
Tipos: `dist/molecules/UserWay/UserWay.d.ts` y `dist/molecules/UserWay/UserWayCookie.d.ts`
(sin props).

Integración con el widget gratuito de accesibilidad UserWay. ui-kit no carga el script de
UserWay: el consumidor debe tenerlo en su `index.html` junto a un botón con
`id="userWayTrigger"`, que es el que abre el widget.

## Cuándo usarlo

- `UserWay`: botón redondo (solo ícono) que abre el widget. Si el diseño muestra el botón con el
  texto "ACCESIBILIDAD", usa `NavBarButton type="accessibility"` ([navbar-button](navbar-button.md)).
- `UserWayCookie`: **función, no componente**. Copia en una cookie (`userwayData`, 24 horas,
  `path=/`) las preferencias `userway-*` de `localStorage` al salir de la página, y las restaura
  en `localStorage` al llamarla. Sirve para conservar las preferencias de accesibilidad entre
  sitios o recargas que comparten la cookie.

## Ejemplo

```tsx
import { useEffect } from 'react'
import { UserWay, UserWayCookie } from '@eclass/ui-kit'

export function Header(): JSX.Element {
  useEffect(() => {
    // Una sola vez al montar la app: agrega un listener de beforeunload que no se quita
    UserWayCookie()
  }, [])

  return <UserWay />
}
```

## Props clave

- `UserWay` no recibe props. Al hacer clic busca `#userWayTrigger` y le hace clic; si no
  existe, no hace nada. El botón tiene `id="UserWayButton"`.
- `UserWay` no tiene nombre accesible (solo un ícono con `aria-hidden`).
- `UserWayCookie()` no recibe parámetros ni devuelve nada. Si la cookie trae JSON inválido,
  registra el error en consola y sigue. Llamarla una sola vez: cada llamada agrega otro
  listener de `beforeunload`.

## Cómo se ve (para reconocerlo en un diseño)

- `UserWay`: círculo de 30px color `main-blueGrey` (#60798E) con la figura de accesibilidad
  blanca de 16px al centro, sin texto. Hover: gris translúcido `rgba(96, 121, 142, 0.8)`.
- `UserWayCookie` no tiene interfaz.
