[[_TOC_]]

## Información

Este repositorio es una librería de componentes que se pensó para unificar estilos en los desarrollos de Eclass

La fuente de donde se basan los componentes se encuentran en este [**Sistema de diseño**](https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo)

## Scripts

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
