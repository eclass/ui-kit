# Botones

Exports: `BtnPrimary`, `BtnSecondary`, `BtnTertiary`, `BtnLink`, `Btn`.
Tipos: `dist/molecules/Buttons/Btn.d.ts` (`propsBaseBtns`, props comunes de `Btn`, `BtnPrimary`
y `BtnSecondary`), `dist/molecules/Buttons/BtnTertiary.d.ts` (`propsTertiaryBtn`) y
`dist/molecules/Buttons/BtnLink.d.ts` (`props`). Ninguno se reexporta desde el índice del paquete.

## Cuál usar

| Necesito                                                                        | Componente                                                                                         |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| La acción principal de la vista o modal (una sola)                              | `BtnPrimary`                                                                                       |
| Acción secundaria junto a la principal (Cancelar, Volver)                       | `BtnSecondary`                                                                                     |
| Acción de baja jerarquía con ícono (editar, borrar, descargar, responder…)      | `BtnTertiary`                                                                                      |
| Texto subrayado que navega o ejecuta una acción; botones de `ModalAlertButtons` | `BtnLink`                                                                                          |
| —                                                                               | `Btn`: base de `BtnPrimary`/`BtnSecondary`; usarlo solo si se necesita `rounded` o colores propios |

```tsx
import { BtnPrimary, BtnSecondary, BtnTertiary, BtnLink, Icons } from '@eclass/ui-kit'

export function Example(): JSX.Element {
  return (
    <>
      <BtnPrimary onClick={guardar} isLoading={guardando}>
        Guardar
      </BtnPrimary>
      <BtnSecondary onClick={cancelar}>Cancelar</BtnSecondary>
      <BtnPrimary leftIcon={<Icons.Download />}>Descargar</BtnPrimary>
      <BtnTertiary iconStatus="edit" onClick={editar}>
        Editar
      </BtnTertiary>
      <BtnLink as="button" role="button" onClick={verMas}>
        Ver más
      </BtnLink>
      <BtnLink href="https://www.eclass.com">Ir al sitio</BtnLink>
    </>
  )
}
```

## BtnPrimary y BtnSecondary

Mismas props (`propsBaseBtns`):

- `children` o `ariaLabel`: uno de los dos es obligatorio (el tipo lo exige). Sin texto, usar
  `ariaLabel` y un ícono.
- `onClick`: no se llama mientras está `disabled` o `isLoading`.
- `isLoading` (`false`): reemplaza el texto por un spinner (`Loader`) y bloquea el clic. Si
  además está `disabled`, gana la carga (no se ve deshabilitado).
- `disabled` (`false`): opacidad 50% y cursor no permitido.
- `size`: `'regular'` (por defecto) o `'small'`.
- `isFullWidth` (`false`): ocupa todo el ancho del contenedor.
- `leftIcon` / `rightIcon`: elemento de ícono antes o después del texto.
- `type` (`'button'`), `role` (`'button'`), `m` (`'0'`), `id`, `tabIndex`, `sx`.

`Btn` acepta además `bg={{ main, hover }}`, `color`, `fillLoader`, `borderColorActive`,
`rounded` (radio de 12px) y `touchDark`. Sin `children` ni íconos muestra el texto `Button`.

## BtnTertiary

- `iconStatus` (por defecto `'multimedia'`): ícono a la izquierda. Valores: `answer`, `ahead`,
  `back`, `edit`, `delete`, `more`, `password`, `multimedia`, `record`, `download`, `time`,
  `remote`, `noIcon`. Para un botón sin ícono hay que pasar `iconStatus="noIcon"`.
- `iconCustom`: elemento de ícono propio; reemplaza al de `iconStatus`.
- `rightIcon` (booleano): pone el ícono a la derecha.
- `withoutColor` (`false`): ícono gris azulado en vez de azul.
- `activeWhenPress` (`false`): el texto queda azul mientras tiene foco.
- `onClick`, `onMouseEnter`, `onMouseLeave`, `type`, `role`, `m`, `id`, `tabIndex`, `sx`.
- No tiene `disabled` ni `isLoading`.

## BtnLink

- `as`: `'a'` (por defecto) o `'button'`.
- Con `as="a"`: `href` (por defecto `''`) y `target` (por defecto `'_blank'`, abre pestaña nueva).
- Con `as="button"`: usar `onClick`. `role` vale `'link'` por defecto aunque sea botón; pasar
  `role="button"` si ejecuta una acción.
- `isDisable` (`false`): opacidad 50%, cursor no permitido y no llama a `onClick`.
- `textDecorationLine` (`true`): subrayado.
- `fontSize` (`'0.875rem'`), `p` (`'.25em'`), `m` (`'0'`), `ariaLabel`, `id`, `tabIndex`, `sx`.

## Cómo se ve (para reconocerlo en un diseño)

- **BtnPrimary**: rectángulo de fondo azul `main-deepSkyBlue` con texto blanco en peso 500,
  bordes redondeados de 4px (`radii-small`). Regular: alto mínimo 45px (2.813rem), ancho mínimo
  144px (9rem), padding de 12px arriba/abajo y 16px a los lados, texto tamaño CSS `medium`.
  Small: alto mínimo 32px, sin ancho mínimo, padding de 4px y 8px, texto `small`. Hover y
  presionado en `main-azureRadiance`; efecto de onda blanca al hacer clic; foco de teclado con
  doble borde interior azul y blanco.
- **BtnSecondary**: misma forma y tamaños, **sin borde**: fondo celeste claro
  `main-veryLightBlue` (hover `main-linkWater`) y texto y spinner azules `main-deepSkyBlue`;
  onda gris al hacer clic.
- **BtnTertiary**: sin fondo ni borde, alto de 24px, texto gris `neutral-gray` de 14px
  subrayado, peso 500, con un ícono de 16px en azul `main-deepSkyBlue` (o `main-blueGrey` con
  `withoutColor`) separado 8px del texto. En hover el texto pasa a azul.
- **BtnLink**: solo texto azul `main-deepSkyBlue` subrayado, peso 500, 14px, sin fondo; en
  hover el texto pasa a `neutral-darkCharcoal`.
