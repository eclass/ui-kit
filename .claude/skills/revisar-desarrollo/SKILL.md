---
name: revisar-desarrollo
description: Revisión final de un desarrollo ya terminado y validado manualmente en ui-kit. Evalúa el riesgo del cambio y según eso revisa convenciones, API pública, lint, pruebas, documentación, rendimiento, accesibilidad y posibles fallos. Úsala solo cuando el usuario la pida explícitamente (por ejemplo "revisa el desarrollo" o "/revisar-desarrollo"), no durante el desarrollo.
disable-model-invocation: true
---

# Revisión final del desarrollo

El desarrollo ya está terminado y validado manualmente. El objetivo es encontrar problemas, no
reescribir: reporta hallazgos y **no modifiques archivos** hasta que el usuario elija cuáles aplicar.

## 1. Alcance

- Cambios de la rama contra `main` más lo no commiteado: `git diff main...HEAD --stat`,
  `git diff --stat` y `git status --short`.
- Ignora lockfiles, `CHANGELOG.md`, `dist/`, `coverage/` y archivos borrados.
- Si el usuario indica archivos, una carpeta o "solo lo no commiteado", limita a eso.
- Lee el diff completo **una sola vez** (`git diff main...HEAD -- <archivos>` y `git diff`) y
  reutilízalo en todas las revisiones. Abre un archivo entero solo si el diff no alcanza.

## 2. Riesgo (antes de revisar)

Clasifica con la lista de archivos y el diff:

| Riesgo | Cuándo |
|---|---|
| **Bajo** | Solo estilos (`sx`, props de Chakra) de un componente, textos, `src/documentation`, `.md` o configuración sin lógica |
| **Medio** | Componentes con lógica de render o estado local, props nuevas opcionales, sin efectos nuevos |
| **Alto** | Hooks, `useEffect`, listeners, `localStorage`/cookies, foco y modales, fechas, `src/theme` (afecta a todos los componentes), exports de `src/index.ts`, props existentes, dependencias o build (`package.json`, `vite.config.ts`, `tsconfig*.json`) |

Si un archivo es de riesgo alto, todo el cambio es alto. Indica el riesgo en una línea al
empezar, con el motivo.

## 3. Revisiones según el riesgo

| Revisión | Bajo | Medio | Alto |
|---|---|---|---|
| A. Lint y tipos | ✓ | ✓ | ✓ |
| B. Convenciones | ✓ | ✓ | ✓ |
| C. API pública y compatibilidad | si toca `src/index.ts` o props | ✓ | ✓ |
| D. Pruebas y documentación | — | ✓ | ✓ |
| E. Accesibilidad y UI | si hay JSX | si hay JSX | si hay JSX |
| F. Rendimiento | — | ✓ | ✓ |
| G. Posibles fallos | — | `code-review low` | `code-review high` |

**A. Lint y tipos** (herramienta, no lectura):
- Sobre los `.ts/.tsx/.mdx` de `src` del alcance: `npx eslint <archivos>` (sin `--fix`).
- Tipos: `npm run ts-compile-check` (el mismo `tsc` que corre el pre-commit).
- Reporta los errores tal cual; no los repitas en las demás revisiones.

**B. Convenciones del proyecto**: reglas de `.claude/rules/` sobre el diff (Chakra y `vars()`,
responsive, `useMediaQuery` solo para lógica en código nuevo, textos por props, JSDoc en español,
export nombrado, archivos estáticos, sin `CHANGELOG.md` ni versión editados a mano). No usa skills.

**C. API pública y compatibilidad**:
- Componente nuevo exportado en el barrel de su nivel y en `src/index.ts`, con sus tipos si el
  consumidor los necesita.
- Export quitado o renombrado, prop quitada, cambio de tipo o de valor por defecto → cambio
  incompatible: debe ir con `BREAKING CHANGE:` en el commit (ver `.claude/rules/git-workflow.md`)
  o rehacerse de forma compatible. Gravedad alta.
- Props nuevas opcionales y con valor por defecto que mantiene el comportamiento actual.
- APIs fuera de React 16.8 o ES2019 (`useId`, `toSorted`, `at`...). Dependencia nueva que entra
  al bundle.

**D. Pruebas y documentación** (herramienta primero):
- Corre solo los `.test.ts(x)` que están en el alcance o junto a los archivos tocados
  (`X.tsx` → `X.test.tsx`): `npx jest <archivos .test>`. Si no hay ninguno, no corras pruebas.
  No uses `npm run test` ni `--findRelatedTests`: corren toda la suite y tardan demasiado.
- Reporta las que fallan con su error.
- Luego, según `.claude/rules/testing/testing.md`, señala código nuevo sin pruebas y casos
  críticos no cubiertos (props opcionales ausentes, textos vacíos o largos, callbacks, foco,
  mobile con `useMediaQuery` en `false`). Solo los que importan, no una lista exhaustiva.
- Según `.claude/rules/documentation/documentation.md`: componente nuevo sin página o ruta en
  `src/documentation`, o prop nueva / cambio de comportamiento sin su sección.

**E. Accesibilidad y UI**: skill `web-design-guidelines` solo sobre los archivos con JSX
modificado (fuera de `src/documentation`).

**F. Rendimiento**: skill `react-best-practices`, solo las reglas relacionadas con lo que
cambió (efectos, memo, listeners, storage, listas, SVG).

**G. Posibles fallos**: skill `code-review` con el nivel de la tabla, sobre el diff de la rama.

## 4. Formato de salida

```
Riesgo: <bajo|medio|alto> — <motivo>

### <Revisión>
- [alta|media|baja] `archivo:línea` — problema → sugerencia
```

- Riesgo bajo: muestra solo hallazgos de gravedad alta y media.
- No repitas un hallazgo en dos revisiones; déjalo en la más específica.
- Omite las revisiones sin hallazgos y nómbralas en una línea al final ("Sin hallazgos: ...").
- Si una herramienta no pudo correr (Node, dependencias), dilo y sigue con el resto.
- Cierra preguntando qué hallazgos aplicar. Aplícalos de a uno, sin commitear.
