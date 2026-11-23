# Alertas

Exports: `Alert`, `FlashNotification`, `useFlashNotification`, `TinyAlert`.
Tipos: `dist/organisms/Alerts/types.d.ts` (`IAlertProps`, `IFlashNotificationProps`) y
`dist/atoms/TinyAlert/TinyAlert.d.ts` (`props`).

## Cuál usar

| Necesito                                                                                                    | Componente                                   |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Mensaje fijo dentro de la página (estado de una solicitud, condición a cumplir), opcionalmente con un botón | `Alert`                                      |
| Aviso flotante arriba al centro tras una acción (guardado, error de conexión)                               | `FlashNotification` + `useFlashNotification` |
| Etiqueta chica de estado junto a un texto o ítem                                                            | `TinyAlert`                                  |
| Confirmación o aviso que bloquea la pantalla                                                                | `ModalAlertNew` (ver [modales](modales.md))  |

## Alert

```tsx
import { Alert } from '@eclass/ui-kit'
;<Alert state="warning" buttonText="Repetir evaluación" onClick={repetir}>
  Debes repetir la evaluación para <b>aprobar el curso</b>.
</Alert>
```

Props clave (`IAlertProps`):

- `state` (obligatoria): `'info' | 'success' | 'warning' | 'error'`; define color de fondo e ícono.
- `children`: mensaje. Si es un string se sanitiza y se interpreta como HTML.
- `buttonText` + `onClick`: agrega un `BtnPrimary` a la derecha (en mobile, abajo y a todo el
  ancho). `buttonIcon`: ícono a la izquierda del texto del botón.
- `buttonLink` (`false`): el botón pasa a ser un `BtnLink` pegado al texto.
- `endTextLink` + `onClickLink`: `BtnLink` al final del mensaje (se puede combinar con el botón).
- `canDismiss` (`false`): muestra una X arriba a la derecha que llama a `onClick` (la misma
  función del botón). La alerta no se oculta sola: el que la usa debe quitarla.
- Ancho: por defecto se ajusta al contenido con máximo 796px; `fullWidth` (100%),
  `maxContent` (`max-content`) o `width` lo cambian.
- `m`, `sx`.

## FlashNotification y useFlashNotification

```tsx
import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'

export function Example(): JSX.Element {
  const { show, active, config } = useFlashNotification({
    state: 'success',
    message: '¡Cambios guardados!',
  })
  return (
    <>
      <button onClick={active}>Guardar</button>
      <FlashNotification {...config} show={show} />
    </>
  )
}
```

- `useFlashNotification({ state, message })` devuelve `show`, `active()` (la muestra) y
  `config` (`{ state, message }`) para pasar a `FlashNotification`.
- `FlashNotification` props: `state`, `message` (string; acepta HTML básico, se sanitiza),
  `show` y `m`.
- Duración: `success` e `info` se cierran solas según el largo del mensaje (150 palabras por
  minuto, mínimo 3 s); `warning` y `error` quedan visibles hasta cerrarlas con la X.
- No hace falta montar un `<Toaster />`: la primera `FlashNotification` montada crea uno solo
  para toda la página. Hay una notificación visible por estado (una nueva del mismo `state`
  reemplaza a la anterior).

## TinyAlert

```tsx
import { TinyAlert } from '@eclass/ui-kit'
;<TinyAlert status="success" text="Aprobado" />
```

- `status` (obligatoria): `'success' | 'error' | 'info' | 'warning'` (con ícono) o
  `'answered' | 'pending' | 'omitted' | 'new'` (sin ícono).
- `text`: texto visible. Sin `text` muestra un texto por defecto **en inglés** (`Success`,
  `Error`, `Info`, `Warning`, `Answered`, `Pending`, `Omitted`, `New answer`): pasar siempre
  `text` en español.
- `margin` (`'0'`), `sx`.

## Cómo se ve (para reconocerlo en un diseño)

- **Alert**: caja con bordes redondeados de 8px, padding de 16px, sin borde ni sombra, fondo
  según estado: `alert-veryLightBlue` (info), `alert-ice` (success), `alert-pale` (warning),
  `alert-veryLightPinkThree` (error). A la izquierda, un ícono ilustrado de unos 52×45px
  (círculo blanco con puntos y una línea gris, más un símbolo del color del estado: azul
  `main-deepSkyBlue`, verde `alert-jadeGreen`, amarillo `icon-ripeMango` o rojo `alert-red`).
  Texto `neutral-darkCharcoal` de 16px con interlineado de 28px; enlaces azules subrayados. Si
  hay botón primario, va a la derecha; con `canDismiss`, X arriba a la derecha. En mobile (hasta
  425px) el contenido se apila en columna y el botón ocupa todo el ancho.
- **FlashNotification**: la misma caja de `Alert` con X, flotando centrada arriba de la
  pantalla, con sombra suave. En mobile (hasta 440px) pegada al borde superior, a todo el ancho
  y sin bordes redondeados.
- **TinyAlert**: píldora pequeña (radio 4px, padding 2px 4px) con texto de 12px peso 400. Con
  ícono circular de 12px para `success`/`error`/`info`/`warning` (mismos fondos que `Alert`,
  texto `neutral-darkCharcoal`). Sin ícono: `answered` fondo `main-blueGrey` y texto blanco;
  `omitted` fondo `main-ziggurat`; `pending` fondo `neutral-cultured`; `new` fondo naranja
  `secondary-pumpkin` y texto blanco.
