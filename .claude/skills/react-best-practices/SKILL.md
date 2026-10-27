---
name: react-best-practices
description: Guía de rendimiento para React adaptada a ui-kit (librería de componentes compatible desde React 16.8, target ES2019, sin Next.js ni SSR), basada en las reglas de Vercel Engineering. Úsala al escribir, revisar o refactorizar componentes y hooks de la librería, o al optimizar re-renders, listeners o tamaño del bundle.
license: MIT
metadata:
  author: vercel (adaptada por eClass)
  version: "1.0.0"
---

# Buenas prácticas de React (ui-kit)

37 reglas de Vercel Engineering que aplican a una librería de componentes que corre dentro de la
app del consumidor, desde React 16.8. Se quitaron:

- Las que requieren React 18/19, Next.js/RSC o SSR, y `bundle-barrel-imports` (ui-kit usa
  barrels como convención y declara `sideEffects: false` para que el consumidor haga tree-shaking).
- `async-*`: los componentes no hacen peticiones; los datos llegan por props.
- `bundle-dynamic-imports`, `bundle-conditional`, `bundle-preload`, `bundle-defer-third-party`:
  la librería se publica como un solo archivo (ES y UMD); dividir en chunks y cargar de forma
  diferida es decisión del consumidor.

Cada regla está en `rules/<regla>.md` con explicación y ejemplos incorrecto/correcto. Lee solo
las reglas relevantes para el código que estás tocando.

## Adaptaciones obligatorias

- Solo APIs de React 16.8: nada de `useId`, `useTransition`, `useDeferredValue`,
  `useSyncExternalStore` ni `useEffectEvent`. En `advanced-event-handler-refs`, usar el patrón con
  `useRef`.
- Target ES2019 sin polyfills: en `js-tosorted-immutable`, `js-length-check-first` y
  `rerender-split-combined-hooks`, usar `[...arr].sort()` en vez de `toSorted()`. Tampoco `at()`,
  `findLast()`, `structuredClone` ni `Object.groupBy`.
- `js-request-idle-callback`: siempre con el respaldo de `setTimeout` que muestra la regla
  (Safari no tiene `requestIdleCallback`).
- `client-localstorage-schema`, `js-cache-storage`, `client-passive-event-listeners`: el
  componente comparte `window`, `localStorage` y cookies con la app del consumidor. Envolver el
  acceso a `localStorage` en `try/catch` (ver `CalendarDropdown/services/parseEvents.ts`), limpiar
  los listeners al desmontar (ver `CourseList/utils/useEnterNavigate.ts`) y, en claves nuevas, usar
  un prefijo propio para no chocar con las del consumidor.
- `rerender-memo-with-default-value`: aplica también a los valores por defecto de las props de la
  librería (no crear objetos o arrays nuevos en la desestructuración si se pasan a hijos
  memoizados o a dependencias de efectos).
- `rendering-svg-precision`, `rendering-animate-svg-wrapper`: aplican a los íconos de
  `src/atoms/Icons`.
- Nunca recomendar una API que React 16.8 no tiene. Si actualizar React resolvería algo,
  mencionarlo aparte como nota, no como hallazgo.

## Reglas por prioridad

### 1. Tamaño del bundle (CRÍTICO) — `bundle-`

- `bundle-analyzable-paths` - Prefer statically analyzable import and file-system paths to avoid broad bundles and traces
- Dependencia nueva (no en `external` de `vite.config.ts`): entra al bundle de todos los
  consumidores; evaluar su peso o una alternativa con lo que ya existe (Chakra, `date-fns`).

### 2. Datos en el cliente (MEDIO-ALTO) — `client-`

- `client-passive-event-listeners` - Use passive listeners for scroll
- `client-localstorage-schema` - Version and minimize localStorage data

### 3. Re-renders (MEDIO) — `rerender-`

- `rerender-defer-reads` - Don't subscribe to state only used in callbacks
- `rerender-memo` - Extract expensive work into memoized components
- `rerender-memo-with-default-value` - Hoist default non-primitive props
- `rerender-dependencies` - Use primitive dependencies in effects
- `rerender-derived-state` - Subscribe to derived booleans, not raw values
- `rerender-derived-state-no-effect` - Derive state during render, not effects
- `rerender-functional-setstate` - Use functional setState for stable callbacks
- `rerender-lazy-state-init` - Pass function to useState for expensive values
- `rerender-simple-expression-in-memo` - Avoid memo for simple primitives
- `rerender-split-combined-hooks` - Split hooks with independent dependencies
- `rerender-move-effect-to-event` - Put interaction logic in event handlers
- `rerender-use-ref-transient-values` - Use refs for transient frequent values
- `rerender-no-inline-components` - Don't define components inside components

### 4. Renderizado (MEDIO) — `rendering-`

- `rendering-animate-svg-wrapper` - Animate div wrapper, not SVG element
- `rendering-content-visibility` - Use content-visibility for long lists
- `rendering-hoist-jsx` - Extract static JSX outside components
- `rendering-svg-precision` - Reduce SVG coordinate precision
- `rendering-conditional-render` - Use ternary, not && for conditionals

### 5. JavaScript (BAJO-MEDIO) — `js-`

- `js-batch-dom-css` - Group CSS changes via classes or cssText
- `js-index-maps` - Build Map for repeated lookups
- `js-cache-property-access` - Cache object properties in loops
- `js-cache-function-results` - Cache function results in module-level Map
- `js-cache-storage` - Cache localStorage/sessionStorage reads
- `js-combine-iterations` - Combine multiple filter/map into one loop
- `js-length-check-first` - Check array length before expensive comparison
- `js-early-exit` - Return early from functions
- `js-hoist-regexp` - Hoist RegExp creation outside loops
- `js-min-max-loop` - Use loop for min/max instead of sort
- `js-set-map-lookups` - Use Set/Map for O(1) lookups
- `js-tosorted-immutable` - Immutable sort (en ui-kit: `[...arr].sort()`)
- `js-flatmap-filter` - Use flatMap to map and filter in one pass
- `js-request-idle-callback` - Defer non-critical work to browser idle time

### 6. Patrones avanzados (BAJO) — `advanced-`

- `advanced-event-handler-refs` - Store event handlers in refs
- `advanced-init-once` - Initialize app once per app load

## Al reportar una revisión

Indica la regla (`rules/<regla>.md`), el `archivo:línea` y la corrección adaptada a React 16.8 y
ES2019.
