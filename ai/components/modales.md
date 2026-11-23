# Modales

Exports: `Modal`, `ModalMultiple`, `ModalContent`, `ModalButtons`, `ModalSimple`, `ModalCard`,
`ModalCardContent`, `ModalAlertNew`, `ModalAlertButtons`, `ModalAlert`.
Tipos: `dist/organisms/Modals/types.d.ts` (`IModal`, `IModalSimple`, `IModalCard`,
`IModalButtons`, `IModalAlert`) y `ModalMultipleProps` (exportado).

Todos se controlan desde afuera con `isOpen` y `onClose` (por ejemplo `useDisclosure` de Chakra).

## Cuál usar

| Necesito                                                                        | Componente                                             |
| ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Modal con título, contenido y botones                                           | `Modal` + `ModalContent` + `ModalButtons`              |
| Un mismo modal que pasa de formulario a "¿Seguro?" o a "Cargando…" sin cerrarse | `ModalMultiple`                                        |
| Contenido libre, sin cabecera, solo con la X                                    | `ModalSimple`                                          |
| Tarjeta angosta (355px) tipo logro o medalla                                    | `ModalCard` + `ModalCardContent`                       |
| Confirmación o aviso corto con ícono de estado, o pantalla de carga             | `ModalAlertNew` + `ModalAlertButtons`                  |
| —                                                                               | `ModalAlert`: versión antigua, no usar en código nuevo |

## Modal

```tsx
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalContent, ModalButtons, BtnPrimary, BtnSecondary } from '@eclass/ui-kit'

export function Example(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <BtnPrimary onClick={onOpen}>Abrir</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>Contenido del modal…</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}
```

Props clave (`IModal`):

- `title`: texto de la cabecera azul.
- `closeOnOverlayClick` (por defecto `true`): permite cerrar al hacer clic fuera y muestra la X.
  También controla Esc. En `false` no hay X: el modal se cierra solo con sus botones.
- `fixedSubtitle`: subtítulo centrado bajo la cabecera, fuera del scroll.
- `scrollBehavior`: `'outside'` (por defecto, hace scroll la página) o `'inside'` (scroll
  dentro del modal).
- `fixedButtons`: deja los botones fijos abajo; pon `ModalButtons` fuera de `ModalContent`.
- `withoutMargin`: quita el margen del contenido (para imágenes o tablas a todo el ancho).
- `minWidth`, `maxWidth`, `minHeight`, `maxHeight`: tamaño.

`ModalButtons`:

- `buttonsCenter`: centra los botones (por defecto van a la izquierda).
- `buttonsColumn`: en mobile los apila a todo el ancho.
- En mobile los botones ocupan el ancho completo.

`ModalContent`: `pb` (padding inferior, por defecto `'32px'`).

## ModalMultiple

Mismo modal con tres tipos, para cambiar de contenido sin cerrar ni volver a abrir:

- `type="modal"`: como `Modal` (`title`, `children` con `ModalContent`/`ModalButtons`).
- `type="modalAlert"`: como `ModalAlertNew` (`title`, `description`, `status`, botones con
  `ModalAlertButtons`).
- `type="modalLoading"`: pantalla de carga.

```tsx
<ModalMultiple
  type={type}
  isOpen={isOpen}
  onClose={onClose}
  title={type === 'modal' ? 'Editar pregunta' : '¿Seguro que deseas borrar esta pregunta?'}
  status="warning"
  description="Esta acción no se puede deshacer."
>
  {type === 'modal' ? (
    <ModalContent>
      <p>Formulario…</p>
      <ModalButtons>
        <BtnPrimary onClick={() => setType('modalAlert')}>Borrar</BtnPrimary>
        <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
      </ModalButtons>
    </ModalContent>
  ) : (
    <ModalAlertButtons>
      <BtnLink as="button" role="button" onClick={() => setType('modal')}>
        Cancelar
      </BtnLink>
      <BtnLink as="button" role="button" onClick={confirmar}>
        Aceptar
      </BtnLink>
    </ModalAlertButtons>
  )}
</ModalMultiple>
```

## ModalSimple

```tsx
<ModalSimple isOpen={isOpen} onClose={onClose}>
  <p>Contenido libre…</p>
</ModalSimple>
```

Props: `closeOnOverlayClick` (por defecto `true`), `closeOnEsc`, `withoutMargin`,
`mobileCompact` (en mobile se ve como tarjeta centrada en vez de pantalla completa).

## ModalCard

```tsx
<ModalCard isOpen={isOpen} onClose={onClose}>
  <ModalCardContent>
    <p>¡Obtuviste una medalla!</p>
  </ModalCardContent>
  <ModalAlertButtons>
    <BtnLink as="button" role="button" onClick={onClose}>
      Entendido
    </BtnLink>
  </ModalAlertButtons>
</ModalCard>
```

## ModalAlertNew

```tsx
<ModalAlertNew
  type="info"
  status="error"
  isOpen={isOpen}
  onClose={onClose}
  title="No se pudo guardar"
  description="Inténtalo nuevamente en unos minutos."
>
  <ModalAlertButtons>
    <BtnLink as="button" role="button" onClick={onClose}>
      Entendido
    </BtnLink>
  </ModalAlertButtons>
</ModalAlertNew>
```

- `type`: `'info'` (alerta con ícono) o `'loading'` (carga; no se cierra con Esc).
- `status`: `'success' | 'error' | 'warning' | 'info'`; define el ícono y su color.
- `description` acepta HTML en texto (se sanitiza).
- No se cierra al hacer clic fuera: siempre necesita un botón.

## ModalAlert (antiguo)

Props distintas al resto: `showModal`, `typeAlert`, `title`, `description`,
`optionsButton: { id, label, action }[]`, `top`. Solo para mantener código existente; en
código nuevo usar `ModalAlertNew`.

## Cómo se ve (para reconocerlo en un diseño)

- **Modal / ModalMultiple tipo modal**: cabecera de color azul (`main-deepSkyBlue`) con el
  título blanco centrado en negrita, X blanca arriba a la derecha, contenido blanco con
  márgenes de 24px a los lados y 32px arriba y abajo, botones al pie alineados a la izquierda
  (primario azul + secundario celeste claro con texto azul). En escritorio mide 690px de ancho (cambia con
  `minWidth`/`maxWidth`), con bordes redondeados de 8px; en mobile (menos de 641px) ocupa
  toda la pantalla.
- **ModalSimple**: caja blanca sin cabecera, X gris arriba a la derecha, contenido libre.
- **ModalCard**: tarjeta blanca angosta (355px), sin cabecera; suele llevar imagen o
  ilustración y uno o dos botones de texto a todo el ancho al pie, separados por una línea.
- **ModalAlertNew / ModalMultiple tipo alerta**: caja centrada, ícono de estado arriba
  (verde, rojo, amarillo o azul), título y texto centrados, y botones de texto a todo el ancho
  al pie separados por líneas grises verticales. Variante de carga: animación y texto.
