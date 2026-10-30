# Resumen del proyecto

## Qué es

- `@eclass/ui-kit`: librería de componentes UI transversales de eClass, basada en el
  [sistema de diseño](https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo).
- Se publica en npm (`dist/`, formatos ES y UMD + tipos `.d.ts`) y la consumen los fronts de
  eClass, por ejemplo v8 (React 16.14).
- El mismo repo genera el sitio de documentación (`src/documentation`), publicado en GitHub Pages.

## Stack

- React 17.0.2 en desarrollo, pero `peerDependencies` acepta React `^16.8` a `^19`: todo el
  código debe funcionar desde React 16.8 (solo hooks y APIs disponibles en esa versión; nada de
  `useId`, `useTransition`, `useSyncExternalStore`, etc.).
- TypeScript 4.9 con `strict: true`. Target ES2019 (sin polyfills: nada de `toSorted`, `at`, etc.).
  No subir a TS ≥ 5: los tipos de Chakra 1.8 hacen fallar `tsc` con TS2590 ("union type too
  complex") en archivos que cambian según el orden de chequeo. Por TS 4.9, `vite.config.ts` queda
  fuera de `tsconfig.json` (no resuelve los tipos de Vite 8).
- UI: Chakra UI 1.8 + Emotion 11 + framer-motion 6 (los cuatro son `peerDependencies` y quedan
  fuera del bundle).
- Otras dependencias: `date-fns` 4 (fechas), `html-react-parser` + `dompurify` (HTML recibido por
  props), `react-hot-toast` (notificaciones), `react-ripples`.
- `@eclass/api` y `@eclass/sequelize-models` son solo tipos (`@types/eclass__*` por git+ssh).
- Build con Vite 8 (modo librería, `build.target: 'es2019'`) + `tsc` para los tipos.
- Tests: Vitest 5 (jsdom 29) + Testing Library.

## Glosario de dominio

- Átomos, moléculas y organismos: niveles del diseño atómico, uno por carpeta en `src/`.
- Consumidor: el front que instala la librería (v8 u otro). No tiene acceso a lo que no se
  exporte desde `src/index.ts`.
