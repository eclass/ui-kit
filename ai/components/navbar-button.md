# NavBarButton

Exports: `NavBarButton`.
Tipos: `dist/molecules/NavBarButtons/NavBarButton.d.ts` (`ButtonProps`, no exportado desde el
paquete).

Botón redondo con ícono y texto en mayúsculas para la barra de navegación superior (header) del
campus. Tiene tres tipos fijos: calendario, ayuda y accesibilidad. No sirve para otros íconos.

## Cuándo usarlo

- Botones "CALENDARIO", "AYUDA" o "ACCESIBILIDAD" del header oscuro.
- Para accesibilidad también existe `UserWay` (solo el círculo, sin texto); ver
  [userway](userway.md).

## Ejemplo

```tsx
import { NavBarButton } from '@eclass/ui-kit'

export function HeaderButtons({
  openCalendar,
  openHelp,
}: {
  openCalendar: () => void
  openHelp: () => void
}): JSX.Element {
  return (
    <>
      <NavBarButton type="calendar" onClick={openCalendar} />
      <NavBarButton type="help" onClick={openHelp} />
      {/* Requiere en el HTML un botón con id="userWayTrigger" (widget UserWay) */}
      <NavBarButton type="accessibility" />
    </>
  )
}
```

## Props clave

- `type` (obligatoria): `'calendar' | 'help' | 'accessibility'`. Define el ícono y el texto por
  defecto (`CALENDARIO`, `AYUDA`, `ACCESIBILIDAD`).
- `buttonName`: reemplaza el texto por defecto.
- `onClick`: se ejecuta al hacer clic en `calendar` y `help`. En `accessibility` se ignora: el
  botón hace clic en el elemento `#userWayTrigger` de la página (si no existe, no hace nada) y
  recibe `id="UserWayButton"`.
- `as` (por defecto `'button'`): `'button' | 'a' | 'div'`. No hay prop `href`, así que con
  `'a'` no se puede pasar un enlace; navega desde `onClick`.
- `onlyLink`: solo cambia el color del círculo al presionar (gris en vez de azul), para botones
  que no abren un panel.
- En pantallas de 640px o menos se muestra solo el círculo, sin texto (por `useMediaQuery`).

## Cómo se ve (para reconocerlo en un diseño)

- Círculo de 30px color `main-blueGrey` (#60798E) con ícono blanco de 16px (calendario, signo
  de pregunta o figura de accesibilidad), y a su derecha, a 8px, el texto en mayúsculas Roboto
  12px peso 500 color `neutral-silverSand` (#C6C6C6). Pensado sobre fondo oscuro.
- Hover: el círculo pasa a gris translúcido `rgba(96, 121, 142, 0.8)` y el texto a blanco.
- Presionado: círculo azul `main-deepSkyBlue` (gris si es `accessibility` u `onlyLink`).
- Foco con teclado: contorno de 3px `alert-deepSkyBlue`.
- En mobile: solo el círculo.
