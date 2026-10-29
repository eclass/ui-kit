# @eclass/ui-kit

[![npm](https://img.shields.io/npm/v/@eclass/ui-kit)](https://www.npmjs.com/package/@eclass/ui-kit)
[![Licencia](https://img.shields.io/npm/l/@eclass/ui-kit)](#licencia)
[![CI](https://github.com/eclass/ui-kit/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/eclass/ui-kit/actions/workflows/nodejs.yml)
[![semantic-release](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Librería de componentes UI transversales de eClass, construida en React, TypeScript y Chakra UI.
Unifica los estilos y el comportamiento de los fronts de eClass (por ejemplo v8) siguiendo el
[sistema de diseño](https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo).

- Documentación y ejemplos de cada componente: **<https://ui-kit.eclass.com>**
- Paquete en npm: [`@eclass/ui-kit`](https://www.npmjs.com/package/@eclass/ui-kit)

## Contenido

- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Instalación y uso](#instalación-y-uso)
- [Componentes](#componentes)
- [Desarrollo local](#desarrollo-local)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Convenciones](#convenciones)
- [Publicación y versionado](#publicación-y-versionado)
- [Documentación adicional](#documentación-adicional)
- [Equipo](#equipo)
- [Licencia](#licencia)

## Stack tecnológico

| Área        | Tecnología                                                                        |
| ----------- | --------------------------------------------------------------------------------- |
| UI          | React (desarrollo en 17.0.2, compatible desde 16.8 hasta 19)                      |
| Lenguaje    | TypeScript 4.9 (`strict`), target ES2019                                          |
| Estilos     | Chakra UI 1.8 + Emotion 11 + framer-motion 6                                      |
| Build       | Vite 2.9 en modo librería (formatos ES y UMD) + `tsc` para los tipos `.d.ts`      |
| Pruebas     | Jest 27 + ts-jest + Testing Library                                               |
| Calidad     | ESLint (standard + TypeScript) + Prettier + husky + lint-staged + commitlint      |
| Publicación | GitHub Actions + semantic-release + npm Trusted Publishing                        |
| Otras deps. | `date-fns`, `html-react-parser` + `dompurify`, `react-hot-toast`, `react-ripples` |

## Requisitos previos

- **Node.js 24.22.0** (definido en `.nvmrc`; con nvm: `nvm use`).
- **npm 11.13.0** (definido en `packageManager` de `package.json`). Es la misma versión que usa CI.
- **Acceso SSH a gitlab.com** al grupo de eClass: los paquetes de tipos `@types/eclass__api` y
  `@types/eclass__sequelize-models` se instalan desde repositorios privados de GitLab. Sin ese
  acceso `npm ci` falla.
- Solo para desarrollo: [yalc](https://github.com/wclr/yalc), para probar la librería en un
  proyecto consumidor (ver [Probar en un proyecto consumidor](#probar-en-un-proyecto-consumidor)).

## Instalación y uso

### Instalación

Instala la librería junto con sus `peerDependencies`, que no vienen incluidas en el bundle:

```bash
npm install @eclass/ui-kit @chakra-ui/react@^1.8.9 @emotion/react@^11.8.2 @emotion/styled@^11.8.1 framer-motion@^6.2.8
```

| Peer dependency    | Versión aceptada               |
| ------------------ | ------------------------------ |
| `react`            | `^16.8`, `17.x`, `^18` o `^19` |
| `react-dom`        | `^16.8`, `17.x`, `^18` o `^19` |
| `@chakra-ui/react` | `^1.8.9`                       |
| `@emotion/react`   | `^11.8.2`                      |
| `@emotion/styled`  | `^11.8.1`                      |
| `framer-motion`    | `^6.2.8`                       |

### Uso

Envuelve la aplicación con `ChakraProvider` usando el tema de la librería y luego importa los
componentes desde `@eclass/ui-kit`:

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import { BtnPrimary, theme } from '@eclass/ui-kit'

export const App = () => (
  <ChakraProvider theme={theme} resetCSS={false}>
    <BtnPrimary onClick={() => console.log('Guardado')}>Guardar</BtnPrimary>
  </ChakraProvider>
)
```

Para usar los colores del tema en tus propios estilos, `vars()` devuelve la variable CSS
correspondiente:

```tsx
import { Box } from '@chakra-ui/react'
import { vars } from '@eclass/ui-kit'

// var(--chakra-colors-main-deepSkyBlue)
const Destacado = () => <Box color={vars('colors-main-deepSkyBlue')}>Texto destacado</Box>
```

## Componentes

La documentación interactiva, con ejemplos y código de cada variante, está en
**<https://ui-kit.eclass.com>**. Estos son los componentes que exporta la librería
(`src/index.ts`), ordenados según diseño atómico:

| Nivel      | Componentes                                                                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Átomos     | `Label`, `Progress`, `Ripples`, `TinyAlert`, `Icons` (set de íconos SVG)                                                                                                                               |
| Moléculas  | `Btn`, `BtnPrimary`, `BtnSecondary`, `BtnTertiary`, `BtnLink`, `NavBarButton`, `NewTooltip`, `UserWay`, `UserWayCookie`                                                                                |
| Organismos | `Alert`, `FlashNotification`, `useFlashNotification`, `CalendarDropdown`, `EventsList`, `CourseList`, `CourseStatus`, `Eventos`, `Resources`, `ShareAndReviewModal`, `SimpleCourseBox`, `UserDropdown` |
| Modales    | `Modal`, `ModalAlert`, `ModalAlertNew`, `ModalAlertButtons`, `ModalButtons`, `ModalContent`, `ModalMultiple`, `ModalSimple`, `ModalCard`, `ModalCardContent`                                           |
| Tema       | `theme`, `vars`                                                                                                                                                                                        |

También se exportan los tipos `ModalMultipleProps`, `AccesibleProfileMenuProps` y
`ProfileMenuItem`, y las utilidades `dataFake` y `maxWidthCoursesList` de `CourseList`.

## Desarrollo local

### 1. Clonar e instalar

```bash
git clone git@github.com:eclass/ui-kit.git
cd ui-kit
nvm use
npm ci
```

`npm ci` instala las dependencias exactas del `package-lock.json` (CI no regenera el lockfile) y,
mediante el script `prepare`, activa los hooks de husky y `ts-patch`.

### 2. Configurar el entorno

El sitio de documentación y el Playground solo se montan si existe un archivo `.env` (ignorado por
git) en la raíz con:

```bash
VITE_REACT_DEPLOY_DOCUMENTATION=DOCUMENTATION
```

Sin esa variable, `src/main.tsx` solo importa la librería y la página queda en blanco.

### 3. Levantar el entorno

```bash
npm run docu
```

Levanta el sitio de documentación en local, con todos los componentes.

```bash
npm run dev
```

Levanta el Playground (`src/Playground.tsx`), una página vacía para probar un componente aislado.
No se publica.

### Probar en un proyecto consumidor

Antes de sacar una versión, se valida con [yalc](https://github.com/wclr/yalc) que los cambios se
vean y funcionen bien en un proyecto que usa la librería (por ejemplo v8):

```bash
# En ui-kit: compilar y publicar en el almacén local de yalc
npm run build
npx yalc publish
```

```bash
# En el proyecto consumidor: usar la versión local
npx yalc add @eclass/ui-kit
npm install
```

Después de cada cambio en ui-kit, recompilar y propagarlo a los proyectos que la usan:

```bash
npm run build
npx yalc push
```

Al terminar, en el proyecto consumidor volver a la versión de npm (y no commitear `.yalc/` ni
`yalc.lock`):

```bash
npx yalc remove @eclass/ui-kit
npm install
```

Una vez publicada la versión nueva en npm (ver [Publicación y versionado](#publicación-y-versionado)),
se actualiza `@eclass/ui-kit` en cada proyecto que la utiliza.

## Scripts

| Script                     | Descripción                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| `npm run docu`             | Sitio de documentación en local (Vite).                                                                   |
| `npm run dev`              | Playground (`src/Playground.tsx`) en local.                                                               |
| `npm run build`            | Build de la librería en `dist/`: `tsc` + `vite build` (ES y UMD) + tipos + copia de los `.d.ts` de `src`. |
| `npm run deploy`           | Build del sitio de documentación en `dist/` (lo usa CI para GitHub Pages).                                |
| `npm run serve`            | Sirve el último build con `vite preview`.                                                                 |
| `npm run test`             | Suite completa de Jest con coverage (la corre CI).                                                        |
| `npm run test-local`       | Jest en modo `--watch`.                                                                                   |
| `npm run lint`             | Formatea `src` con Prettier y corrige con `eslint --fix`.                                                 |
| `npm run lint:check`       | Revisa `src` con ESLint sin corregir (la corre CI).                                                       |
| `npm run format`           | Solo Prettier sobre `src`.                                                                                |
| `npm run eslint`           | Solo `eslint --fix` sobre `src`.                                                                          |
| `npm run ts-compile-check` | Revisión de tipos de todo el proyecto con `tsc` (la corre el pre-commit).                                 |

> La suite completa es pesada. En local, corre solo las pruebas de los archivos que tocaste:
> `npx jest src/molecules/Buttons/BtnPrimary.test.tsx`.

## Estructura del proyecto

```text
ui-kit/
├── .github/workflows/nodejs.yml   # CI: lint, pruebas, release y deploy de la documentación
├── .husky/                        # Hooks de git (pre-commit y commit-msg)
├── __mocks__/                     # Mocks de Jest (dompurify, react-ripples)
├── src/
│   ├── atoms/                     # Componentes básicos (Label, Progress, Icons, ...)
│   ├── molecules/                 # Combinaciones de átomos (botones, tooltip, ...)
│   ├── organisms/                 # Componentes complejos (modales, calendario, cursos, ...)
│   ├── theme/                     # Tema de Chakra (colores, tipografía, estilos) y vars()
│   ├── services/                  # Utilidades sin UI
│   ├── documentation/             # Sitio de documentación (páginas, rutas y componentes)
│   ├── test/jest-setup.ts         # Configuración global de Jest
│   ├── Playground.tsx             # Página para probar componentes en local
│   ├── main.tsx                   # Entrada de Vite (documentación o Playground)
│   └── index.ts                   # API pública de la librería
├── .releaserc.json                # Configuración de semantic-release
├── vite.config.ts                 # Build de la librería y de la documentación
└── package.json
```

Cada componente vive en su propia carpeta (`src/atoms/Label/Label.tsx`) junto a sus pruebas. Cada
nivel tiene un `index.ts` y **todo lo que el consumidor puede usar debe exportarse en
`src/index.ts`**.

## Convenciones

### Código

- Componentes funcionales con export nombrado (`export function BtnPrimary(...)`), en PascalCase.
  Sin componentes de clase ni `export default` (salvo las páginas de la documentación).
- Props tipadas con una interfaz `XProps`, con sus valores por defecto en la desestructuración.
- JSDoc en español en componentes, hooks y funciones nuevas, con `@example` en los componentes.
- Compatibilidad con el consumidor: solo APIs de React 16.8 (nada de `useId`, `useTransition`,
  etc.) y JavaScript ES2019 (nada de `at`, `toSorted`, etc.).
- Props nuevas siempre opcionales y con un valor por defecto que mantenga el comportamiento
  actual. Quitar o renombrar un export o una prop es un cambio incompatible.
- Textos visibles con valor por defecto en español y modificables por props.
- HTML recibido por props: sanitizar con `dompurify` antes de parsearlo con `html-react-parser`.

### Estilos

- Solo Chakra UI (`Box`, `Flex`, props de estilo y `sx`).
- Colores y tokens desde el tema con `vars('colors-...')`, nunca hexadecimales sueltos.
- Responsive con los valores por breakpoint de Chakra o con media queries dentro de `sx`.
- Imágenes y archivos estáticos no se versionan: se suben al CDN de eClass y se usan por URL. Los
  íconos son componentes SVG en `src/atoms/Icons`.

### Nombres

| Elemento             | Convención                         | Ejemplo                      |
| -------------------- | ---------------------------------- | ---------------------------- |
| Carpeta y componente | PascalCase                         | `TinyAlert/TinyAlert.tsx`    |
| Interfaz de props    | `XProps`                           | `ModalMultipleProps`         |
| Hooks                | `useX`                             | `useFlashNotification`       |
| Pruebas              | junto al archivo, `X.test.tsx`     | `BtnTertiary.test.tsx`       |
| Página de docs       | `src/documentation/pages/<Nivel>/` | `pages/Organisms/Modals.tsx` |

### Pruebas

- Todo componente o funcionalidad nueva lleva pruebas y su página en la documentación en el mismo
  cambio.
- Se prueba lo que el componente promete al consumidor: lo que renderiza según sus props, sus
  callbacks y su accesibilidad. Títulos de `describe`/`test` en español.
- Consultas accesibles de Testing Library (`getByRole`, `getByLabelText`, `getByText`) e
  interacciones con `@testing-library/user-event`.

### Ramas

Se trabaja en una rama desde `main` con el prefijo según el tipo de cambio y se abre un pull
request en GitHub:

```text
feat/<nombre>   feature/<nombre>   fix/<nombre>   bugfix/<nombre>
```

Los PR se integran a `main` con **squash**, así que el título del PR queda como mensaje del commit
y debe cumplir el formato de commits.

### Commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/es/), validado por commitlint
(`@commitlint/config-conventional`) en el hook `commit-msg`:

```text
type(scope): resumen en español
```

- `scope` corto y en minúsculas: el componente o dominio (`modals`, `calendar`, `documentation`).
- Resumen de 72 caracteres como máximo.
- El hook `pre-commit` corre `npm run ts-compile-check` y lint-staged (`npm run lint`): un error de
  tipos o de lint bloquea el commit.

El tipo del commit define la versión que publica semantic-release:

| Tipo                                                        | Uso                                            | Versión                   |
| ----------------------------------------------------------- | ---------------------------------------------- | ------------------------- |
| `feat`                                                      | Funcionalidad o componente nuevo               | minor (`1.64.0 → 1.65.0`) |
| `fix`                                                       | Corrección de un error                         | patch (`1.64.0 → 1.64.1`) |
| `perf`                                                      | Mejora de rendimiento                          | patch                     |
| `revert`                                                    | Revierte un commit anterior                    | patch                     |
| `refactor`, `docs`, `test`, `style`, `build`, `ci`, `chore` | Cambios que no afectan a la librería publicada | sin versión               |
| Cualquiera con `BREAKING CHANGE:` en el cuerpo              | Cambio incompatible de la API pública          | major (`1.64.0 → 2.0.0`)  |

El pie `BREAKING CHANGE: <qué se rompe>` es obligatorio para una versión major: el `!` en el
título no basta con el preset por defecto. Como obliga a actualizar a todos los consumidores, se
acuerda con el equipo antes.

## Publicación y versionado

La publicación es automática; nunca se edita a mano la versión de `package.json` ni el
`CHANGELOG.md`.

1. Cada push y pull request ejecuta el job `test` de
   [GitHub Actions](.github/workflows/nodejs.yml): `npm ci`, `npm run lint:check` y
   `npm run test`.
2. Al integrar en `main`, el job `release` compila la librería (`npm run build`) y ejecuta
   [semantic-release](https://semantic-release.org/), que:
   - analiza los commits desde el último tag y calcula la versión según la tabla de commits;
   - publica `@eclass/ui-kit` en el registro público de npm;
   - actualiza `CHANGELOG.md` y la versión en `package.json` con un commit
     `chore(release): x.y.z [skip ci]`;
   - crea el tag y el release en GitHub.
3. Después del release, los jobs `build-pages` y `deploy-pages` generan el sitio de documentación
   (`npm run deploy`) y lo publican en GitHub Pages (<https://ui-kit.eclass.com>).

Si ningún commit desde el último release genera versión (por ejemplo, solo `docs` o `chore`), no
se publica nada.

### Autenticación con npm

La publicación usa [Trusted Publishing de npm](https://docs.npmjs.com/trusted-publishers/): el job
de release pide un token OIDC de corta duración (`id-token: write`) y no se usa `NPM_TOKEN`. El
trusted publisher del paquete en npm está configurado para la organización `eclass`, el
repositorio `ui-kit` y el workflow `nodejs.yml`, sin environment. Si se renombra el workflow o se
mueve el repositorio, hay que actualizar esa configuración en npm o la publicación falla.

## Documentación adicional

- [Sitio de documentación de componentes](https://ui-kit.eclass.com)
- [Sistema de diseño de eClass](https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo)
- [Cómo documentar un componente](src/documentation/README.md)
- [CHANGELOG](CHANGELOG.md)
- [Chakra UI v1](https://v1.chakra-ui.com/)
- [Trusted Publishing de npm](https://docs.npmjs.com/trusted-publishers/) y
  [semantic-release en GitHub Actions](https://semantic-release.org/recipes/ci-configurations/github-actions/)

## Equipo

Mantenido por el equipo de desarrollo de [eClass](https://www.eclass.cl/).

- Jonathan Garrido ([@Jonathangarrido](https://github.com/Jonathangarrido))
- Javiera Munita ([@JaviMunita](https://github.com/JaviMunita))
- Josefin Ferrada ([@josefin-ferrada](https://github.com/josefin-ferrada))

<details>
<summary>Contribuidores anteriores</summary>

- Daniel Camilo Montoya
- Sebastián González Riffo
- Alvaro Alvarez

</details>

## Licencia

[MIT](https://opensource.org/licenses/MIT), la misma con la que se publica el paquete en npm.
