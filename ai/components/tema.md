# Tema y vars

Exports: `theme`, `vars`.
Tipos: `dist/theme/index.d.ts` (valores en `dist/theme/colors.d.ts` y `dist/theme/utils.d.ts`).

`theme` es el tema de Chakra de eClass (`extendTheme` sobre el tema por defecto de Chakra 1.8).
`vars(token)` devuelve la variable CSS que Chakra crea para ese token:

```ts
vars('colors-main-deepSkyBlue') // 'var(--chakra-colors-main-deepSkyBlue)'
vars('space-m') // 'var(--chakra-space-m)'
```

Formato: `vars('<categoría>-<grupo>-<nombre>')`, con el nombre en camelCase tal cual aparece
abajo. `vars` solo arma el texto: no valida el nombre, y un token mal escrito queda como una
variable inexistente sin error.

## Montar el tema

Los componentes de ui-kit y las variables `--chakra-*` necesitan el tema en `ChakraProvider`
(normalmente el consumidor ya lo tiene en la raíz de la app):

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@eclass/ui-kit'

export const AppWrapper = (): JSX.Element => (
  <ChakraProvider theme={theme} resetCSS={false}>
    <App />
  </ChakraProvider>
)
```

Además de los tokens, el tema cambia el estilo base de `Modal` de Chakra y agrega estilos
globales (`.react-ripples` y `.chakra-button { border-style: none }`).

## Usar colores y tokens

```tsx
import { Box } from '@chakra-ui/react'
import { vars } from '@eclass/ui-kit'

export function Card(): JSX.Element {
  return (
    <Box
      bg={vars('colors-neutral-white')}
      color={vars('colors-neutral-darkCharcoal')}
      border={vars('borders-light')}
      borderRadius={vars('radii-big')}
      boxShadow={vars('shadows-sm')}
      p={vars('space-m')}
    >
      Contenido
    </Box>
  )
}
```

## Colores (`colors-<grupo>-<nombre>`)

**main** (principales: acciones, fondos, textos)

| Token                       | Hex     |
| --------------------------- | ------- |
| `colors-main-deepSkyBlue`   | #0189FF |
| `colors-main-azureRadiance` | #017BE5 |
| `colors-main-blueGrey`      | #60798E |
| `colors-main-veryLightBlue` | #E0EEFA |
| `colors-main-linkWater`     | #C7DEF2 |
| `colors-main-ziggurat`      | #B0CFE0 |

**secondary** (uso acotado)

| Token                             | Hex     |
| --------------------------------- | ------- |
| `colors-secondary-pumpkin`        | #FF7A14 |
| `colors-secondary-polishedBronze` | #CD7F32 |
| `colors-secondary-cornsilk`       | #FFF5DF |
| `colors-secondary-linen`          | #F8ECE0 |

**alert** (estados: info, éxito, error, aviso; color fuerte + fondo claro)

| Token                             | Hex     |
| --------------------------------- | ------- |
| `colors-alert-deepSkyBlue`        | #0189FF |
| `colors-alert-veryLightBlue`      | #E0EEFA |
| `colors-alert-jadeGreen`          | #28A745 |
| `colors-alert-ice`                | #E9F6EC |
| `colors-alert-red`                | #CC0000 |
| `colors-alert-veryLightPinkThree` | #F9DFDF |
| `colors-alert-orangeyYelow`       | #F5A623 |
| `colors-alert-pale`               | #FDEED6 |

Ojo: `orangeyYelow` se escribe así (con una sola "l" en "Yelow").

**icon** (íconos e ilustraciones)

| Token                       | Hex     |
| --------------------------- | ------- |
| `colors-icon-cetaceanBlue`  | #08044F |
| `colors-icon-deepSkyBlue`   | #0189FF |
| `colors-icon-lightSeaGreen` | #1EBDAF |
| `colors-icon-orangeRed`     | #FF554D |
| `colors-icon-ripeMango`     | #FFBC27 |

**neutral** (grises: textos, bordes, fondos)

| Token                         | Hex     |
| ----------------------------- | ------- |
| `colors-neutral-darkCharcoal` | #2F2F2F |
| `colors-neutral-davysGrey`    | #5C5C5C |
| `colors-neutral-gray`         | #808080 |
| `colors-neutral-spanishGrey`  | #999999 |
| `colors-neutral-silverSand`   | #C6C6C6 |
| `colors-neutral-platinum`     | #E8E8E8 |
| `colors-neutral-cultured`     | #F4F4F4 |
| `colors-neutral-cultured2`    | #F8F8F8 |
| `colors-neutral-white`        | #FFFFFF |

## Otros tokens

- Bordes (`borders-*`, para la prop `border`): `normal` (1px darkCharcoal #2F2F2F), `light`
  (1px platinum #E8E8E8), `active` (1px deepSkyBlue #0189FF), `success` (1px jadeGreen
  #28A745), `error` (1px red #CC0000), `white` (2px #FFFFFF). 1px = `.063rem`.
- Radios (`radii-*`): `small` 4px (`.25rem`), `big` 8px (`.5rem`), `rounded` 50%.
- Sombras (`shadows-*`), todas negras al 20%: `sm` `0 2px 8px`, `md` `0 4px 16px`,
  `lg` `0 8px 32px`. Reservadas para elementos que se separan del resto (menús, modales).
- Espaciados (`space-*`, múltiplos de 4px): `xxs` 4px, `xs` 8px, `s` 16px, `m` 24px,
  `l` 32px, `xl` 48px, `xxl` 80px. Se suman a la escala numérica por defecto de Chakra.
- Fuentes (`fonts-*`): `body` Roboto, `outstanding` Lora. `heading` no se cambia (queda la de
  Chakra). Los archivos de las fuentes no se cargan desde el JS del paquete: el consumidor
  debe tener Roboto (y Lora si la usa) cargadas.
- No hay tokens propios de tamaños de texto ni de breakpoints: se usan los de Chakra o valores
  en px.

## Cómo traducir colores de un diseño

- Busca el hexadecimal de Figma en las tablas de arriba y usa `vars('colors-...')`; no escribas
  el hex en el código si existe en el tema.
- Si el hex aparece en varios grupos (#0189FF en `main`, `alert` e `icon`; #E0EEFA en `main` y
  `alert`), elige el grupo por el uso: `alert` en mensajes de estado, `icon` en íconos,
  `main` en el resto.
- Si el hex no está en el tema: busca el más cercano y confírmalo con el usuario; puede ser un
  error del diseño o un color nuevo que debería agregarse a ui-kit. Excepción conocida: los
  hover translúcidos como `rgba(96, 121, 142, 0.8)` y los colores de avatar no son tokens.
- Bordes de 1px con esos colores, radios de 4/8px, sombras negras al 20% y espaciados múltiplos
  de 4 se traducen a `borders-*`, `radii-*`, `shadows-*` y `space-*`.
