# Arquitectura

## Carpetas

- `src/atoms/`, `src/molecules/`, `src/organisms/`: componentes de la librería según diseño
  atómico. Una carpeta por componente (`Label/Label.tsx`); los organismos grandes agrupan dentro
  `components/`, `utils/`, `services/` y `types.d.ts` (ver `organisms/CourseList`).
- Cada nivel tiene su barrel `index.ts` (`src/atoms/index.ts`, ...).
- `src/theme/`: tema de Chakra (`extendTheme` con `colors`, `typography`, `utils`, `styles`) y
  `vars()`, que devuelve la variable CSS de Chakra (`vars('colors-main-deepSkyBlue')` →
  `var(--chakra-colors-main-deepSkyBlue)`). Los colores siguen el sistema de diseño.
- `src/services/`: utilidades sin UI (`uniqueId`).
- `src/test/jest-setup.ts`: configuración global de Jest (ver `.claude/rules/testing/testing.md`).
- `src/documentation/`: sitio de documentación (ver `.claude/rules/documentation/documentation.md`).
- `src/Playground.tsx`: página vacía para probar componentes en local; no se publica.
- `src/main.tsx`: entrada de Vite. Con `VITE_REACT_DEPLOY_DOCUMENTATION=DOCUMENTATION` (en `.env`)
  monta la documentación o el Playground; si no, solo importa `src/index.ts`.

## Imports

- Alias de `tsconfig.json`: `@/*` → `src/*`, `@atoms`, `@molecules`, `@organisms`, `@theme`,
  `@theme/*`, `@icons` (→ `src/atoms/Icons`). En el código existente conviven alias y rutas
  relativas; respetar lo que use el archivo.
- `typescript-transform-paths` reescribe los alias en los `.d.ts` generados.

## API pública

- `src/index.ts` es la entrada de la librería: lo que no se exporta ahí no existe para el
  consumidor.
- Componente nuevo: exportarlo en el barrel de su nivel **y** en `src/index.ts`, en la sección
  de su nivel (Átomos, Moléculas, Organismos). Exportar también sus tipos de props si el
  consumidor los necesita (`export type { ... }`).
- Quitar o renombrar un export, o una prop, o cambiar su tipo o comportamiento por defecto, es un
  cambio incompatible (ver `.claude/rules/git-workflow.md`).

## Build

- `npm run build`: `tsc` + `vite build` en modo librería (`dist/eclass-ui-kit.es.js` y `.umd.js`)
  + tipos (`tsconfig.types.json`) + copia de los `.d.ts` de `src`.
- `react`, `react-dom`, `@chakra-ui/react`, `@emotion/*` y `framer-motion` son `external`:
  no se empaquetan, los pone el consumidor. Cualquier otra dependencia nueva sí entra al bundle
  de todos los consumidores: evaluar su peso antes de agregarla.
