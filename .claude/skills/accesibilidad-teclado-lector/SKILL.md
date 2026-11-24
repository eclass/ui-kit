---
name: accesibilidad-teclado-lector
description: Guía y revisa accesibilidad de teclado y lector de pantalla (WCAG 2.1 AA) en los componentes de ui-kit (React desde 16.8, Chakra 1.8, librería consumida por otros fronts). Úsala al crear o modificar componentes, menús, modales o botones, y cuando se pida revisar accesibilidad. Complementa a `web-design-guidelines`; no la reemplaza ni repite sus reglas.
metadata:
  version: "1.0.0"
  argument-hint: <archivo-o-carpeta>
---

# Accesibilidad: teclado y lector de pantalla

Meta: WCAG 2.1 AA, centrado en teclado y lectores de pantalla. El contraste, el zoom y el
movimiento reducido quedan fuera de esta fase; si los ves, menciónalos en una línea sin
desarrollarlos. El widget UserWay del consumidor no sustituye ningún arreglo.

## Modo de trabajo

- **Revisar**: separa los hallazgos en dos clases.
  - **Mecánicos**: se aplican de inmediato, sin pedir confirmación, con el cambio mínimo y solo
    en los archivos del alcance. Son únicamente estos:
    1. `aria-hidden="true"` en un ícono claramente decorativo (acompañado de texto visible).
    2. `outline: none` / `boxShadow: 'none'` en foco → reemplazo con `_focusVisible` ya usado en
       el mismo componente o en `NavBarButton`.
    3. Quitar un `role` repetido en un elemento que ya lo tiene, o un `role` con un nombre
       inventado, solo si ninguna prueba ni estilo lo usa como selector.
    4. `alt=""` en una imagen decorativa sin `alt`.
    5. Quitar `aria-hidden` de un contenedor con elementos enfocables o de lectura.
  - **Con decisión del usuario**: todo lo demás (cambiar `Box` por `MenuItem`, cualquier
    `aria-label` nuevo o cambiado, props nuevas, cambios de API pública, foco en modales,
    anuncios) se reporta con el arreglo propuesto y no se aplica hasta que el usuario elija.
  - Tras aplicar mecánicos: lista cada cambio (`archivo:línea`, antes → después y criterio WCAG),
    corre `npx prettier --write` y `npx eslint` sobre los archivos tocados y las pruebas de esos
    archivos (`npx vitest run <rutas>`); si una falla, revierte ese cambio y pásalo a "con
    decisión". No commitees.
- **Escribir**: aplica las reglas al código nuevo con los cambios mínimos, solo Chakra (`sx`,
  `_focusVisible`), sin styled-components nuevos, con prueba y `getByRole` cuando corresponda.
- Leer el código no verifica teclado ni lector de pantalla. Todo lo que dependa de eso queda como
  tarea manual pendiente del usuario, nunca como "verificado".
- ui-kit es una librería: un arreglo no puede cambiar la API pública. Props nuevas siempre
  opcionales y con un valor por defecto que mantenga el comportamiento actual (ver
  `.claude/rules/conventions.md`).

## Pasos

1. **Alcance**: los archivos indicados; si no hay, el diff (`git diff main...HEAD`): los `.tsx`
   con JSX (sin `src/documentation`) y también hooks que manejen foco, modales o anuncios.
2. **Checklist**: aplica `references/checklist-revision.md` en este orden de prioridad:
   roles ARIA válidos → nombre accesible → teclado y foco → anuncios dinámicos → estructura.
3. **Hijos compartidos**: el problema puede estar en un componente reutilizado (`Icon`, `Icons/*`,
   `NavBarButton`, `BtnLink`, `BtnTertiary`) y no en el archivo revisado. Ábrelos antes de dar un
   archivo por `✓ ok`. Abre primero los que renderizan listas o ítems clicables (`onClick`,
   `map`). Si algún hijo no lo abres, dilo en la primera línea del informe, no solo al final.
4. **Patrones por librería**: si el código usa Chakra o los botones y modales propios de ui-kit,
   consulta `references/patrones-chakra-v1.md`.
5. **Puntos críticos de ui-kit**: si toca el calendario, el menú de usuario, `NavBarButton` o los
   íconos, consulta `references/puntos-criticos-ui-kit.md`.
6. **Reglas básicas**: aplica también las de `web-design-guidelines` (aria-label en íconos,
   `div`/`Box` con `onClick`, `outline: none`, `aria-live` básico) sobre los archivos y sus
   hijos, salvo que el usuario ya haya corrido esa guía en esta revisión.

## Formato de salida

Agrupado por archivo, un hallazgo por línea:

`archivo:línea - problema (WCAG x.x.x) → corrección → cómo verificar`

- Marca `[verificar]` cuando el hallazgo salga de leer código y no de una herramienta.
- Archivo sin hallazgos: `✓ ok` (solo tras revisar sus hijos compartidos).
- Lista solo hallazgos de accesibilidad con texto completo. No numeres ítems vacíos, "no es
  hallazgo" ni observaciones de código ajeno sin relación (menciónalas en una línea aparte).
- Cita `archivo:línea` solo después de leer el archivo con numeración de líneas y comprobar que la
  ruta existe. Si no puedes confirmarla, cita el archivo sin línea. Nunca des rutas ni líneas de
  memoria. Una línea citada no puede superar el total de líneas del archivo leído.
- Si hay cambios sin commitear, avísalo: pueden desplazar líneas o incluir código de prueba.
- Cierra con "Pendiente manual": los pasos de teclado/lector que el usuario debe probar.
- Si añades un "Siguiente paso", que sean solo arreglos de hallazgos ya listados; no agregues
  ítems nuevos ahí.

## Cómo comprobar

- Lint: `plugin:jsx-a11y` está comentado en `.eslintrc.json`, así que `npx eslint` **no** detecta
  problemas de accesibilidad en este repo. Hay una configuración aparte, solo para esto:
  `npx eslint --no-eslintrc -c .claude/hooks/eslint-a11y.json <archivos>` (roles ARIA, `alt`,
  `onClick` sin teclado, `outline: none`; mapea `Box`, `Button`, `Link`, etc. de Chakra). El hook
  `.claude/hooks/a11y-check.cjs` la corre solo sobre cada `.tsx` de `src` (sin pruebas ni
  documentación) que Claude edita y le devuelve solo los hallazgos que se cruzan con las líneas
  modificadas (respecto a `HEAD`; en un archivo nuevo, todos). La deuda anterior del archivo no
  se reporta en el hook: aparece en una revisión completa y se informa aparte.
- Límite del lint: no ve dentro de componentes propios. Un `onClick` pasado a un hijo (como
  `EventsList` en `EventsGroup.tsx`) no se detecta: sigue el paso "Hijos compartidos".
- Pruebas: `npx vitest run <rutas de .test.tsx>` con consultas `getByRole`/`getByLabelText`
  (Testing Library) y `userEvent` para teclado. Una prueba verde no demuestra accesibilidad.
- Probar a mano en la documentación (`npm run docu`) o, antes de publicar, en un consumidor con
  yalc (ver `.claude/rules/commands.md`). Teclado y lector de pantalla se prueban a mano.
