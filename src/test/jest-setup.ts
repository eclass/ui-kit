/**
 * Jest global setup
 * =================
 *
 * Este archivo se ejecuta automáticamente antes de cada test.
 * Su objetivo es:
 *  - Reducir tiempos de ejecución
 *  - Evitar dependencias del DOM real
 *  - Eliminar efectos secundarios visuales (animaciones, estilos, media queries)
 *  - Mantener los tests deterministas y rápidos
 *
 * ⚠️ IMPORTANTE:
 *  - Todo mock definido aquí afecta a TODOS los tests.
 *  - No agregar lógica específica de un test puntual.
 *  - Si un test necesita el comportamiento real de una librería,
 *    se debe hacer `jest.unmock()` dentro del test.
 */

/**
 * Extiende expect() con matchers de Testing Library
 * Ej:
 *  - toBeInTheDocument
 *  - toHaveTextContent
 *  - toBeVisible
 */
import '@testing-library/jest-dom'

/**
 * react-ripples
 * -------------
 * Esta librería usa animaciones y cálculos de layout que:
 *  - No son relevantes para los tests
 *  - Son lentos en jsdom
 *
 * Se mockea completamente para:
 *  - Evitar errores de render
 *  - Acelerar la ejecución
 */
jest.mock('react-ripples')

/**
 * DOMPurify
 * ---------
 * DOMPurify sanitiza HTML y depende de APIs del DOM.
 * En tests:
 *  - No validamos la sanitización
 *  - Solo necesitamos que no falle el render
 *
 * Se mockea para evitar costos innecesarios y side-effects.
 */
jest.mock('dompurify')

/**
 * Chakra UI
 * ---------
 * Chakra usa media queries, observers y cálculos de layout.
 *
 * Se mantiene la implementación real EXCEPTO:
 *  - useMediaQuery → siempre retorna false
 *
 * Beneficios:
 *  - Tests deterministas
 *  - No depende del tamaño de pantalla
 *  - Menor costo de ejecución
 */
jest.mock('@chakra-ui/react', () => {
  const actual = jest.requireActual('@chakra-ui/react')
  return {
    ...actual,
    useMediaQuery: () => [false],
  }
})

/**
 * Emotion
 * -------
 * Emotion genera estilos dinámicos y keyframes.
 * En tests:
 *  - No validamos CSS
 *  - Solo necesitamos que el render no falle
 *
 * Se mockean:
 *  - css
 *  - keyframes
 *
 * Esto reduce significativamente el tiempo de ejecución.
 */
jest.mock('@emotion/react', () => {
  const actual = jest.requireActual('@emotion/react')
  return {
    ...actual,
    css: () => '',
    keyframes: () => '',
  }
})
