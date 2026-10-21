[[_TOC_]]

## Información

Este repositorio es una librería de componentes que se pensó para unificar estilos en los desarrollos de Eclass

La fuente de donde se basan los componentes se encuentran en este [**Sistema de diseño**](https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo)

## Scripts

El desarrollo y CI usan Node.js `24.22.0` y npm `11.13.0` (npm `11.5.1` o superior es requisito para Trusted Publishing de npm). Instale las dependencias bloqueadas con `npm ci`; CI no regenera el lockfile.

Los componentes están al 100% en escritas en archivos `typescript`.

Además deben ser testeadas en donde el enfoque del `testing` es asegurarse de que se muestre todo lo que se promete

Por otra parte cada componente debe llevar su `storie` donde muestre todos los estados que puede tomar el componente

```
  npm run dev
```

Para trabajar de manera local

```
  npm run storybook
```
Levanta el entorno de `storybook`

```
  npm run test
```

Ejecuta los test con `jest`

## Publicación en npm con Trusted Publishing

El workflow de release usa semantic-release en GitHub Actions y autentica las publicaciones de npm mediante OIDC. Antes de fusionar este cambio o ejecutar una publicación, una persona administradora debe configurar en npm el paquete `@eclass/ui-kit`, en **Settings → Trusted Publisher → GitHub Actions**:

| Campo | Valor |
| --- | --- |
| Organization or user | `eclass` |
| Repository | `ui-kit` |
| Workflow filename | `nodejs.yml` (solo el nombre del archivo) |
| Environment name | Vacío |

Complete la primera publicación exitosa dentro de los dos días posteriores a crear el trusted publisher; si vence, deberá eliminarlo y volver a configurarlo.

En **Allowed actions**, habilite la publicación directa con `npm publish`: semantic-release publica directamente y no usa `npm stage publish`. Las configuraciones nuevas permiten por defecto solo la publicación por etapas; habilite la administración de `dist-tags` únicamente si se agrega un flujo de canales que la necesite.

El job de release solicita OIDC con `id-token: write`; npm obtiene automáticamente credenciales de corta duración para esa ejecución. No se configura ni se usa `NPM_TOKEN` como alternativa: si el trusted publisher no está configurado o no coincide, la publicación falla. Revoque o elimine el antiguo secreto `NPM_TOKEN` solo después de confirmar una publicación exitosa con OIDC. `GITHUB_TOKEN` sigue disponible para las operaciones de GitHub de semantic-release. La configuración SSH de GitLab, usada por separado para dependencias privadas, no cambia.

semantic-release determina si corresponde una nueva versión según los commits; este cambio no publica automáticamente en cada commit. npm genera provenance automáticamente cuando la publicación cumple sus requisitos de elegibilidad.

Referencias oficiales: [Trusted Publishing de npm](https://docs.npmjs.com/trusted-publishers/) y [GitHub Actions en semantic-release](https://semantic-release.org/recipes/ci-configurations/github-actions/).

## Instalación

Se debe instalar este repositorio más unas dependencias

### npm

```shell
npm install @eclass/ui-kit @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Implementación

Ejemplo de implementación en código.

```js
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@eclass/ui-kit'

const AppWrapper = () => (
  <ChakraProvider theme={theme} resetCSS={false}>
    <App />
  </ChakraProvider>
)
```
