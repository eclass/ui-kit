---
name: ui-kit
description: 'Catálogo de componentes de @eclass/ui-kit (modales, botones, alertas, tooltip, íconos, calendario, cursos, tema y vars). Úsala SIEMPRE antes de crear o cambiar UI en un front que usa @eclass/ui-kit (v8, Campus Virtual): un modal, un botón, una alerta o notificación, un tooltip, un ícono, una pantalla nueva o una pantalla que viene de Figma.'
---

# ui-kit: usar los componentes de eClass antes que escribirlos

Esta skill viene dentro del paquete `@eclass/ui-kit` y describe **la versión instalada** en el
proyecto. La carpeta de la skill es `node_modules/@eclass/ui-kit/ai/`.

## Pasos

1. Lee [README.md](README.md): reglas e índice de componentes.
2. Abre solo las fichas de `components/` que apliquen a lo que vas a construir.
3. Antes de escribir código, di qué componentes de ui-kit vas a usar y para qué parte de la
   pantalla. Si una parte no tiene componente en ui-kit, dilo también.
4. Implementa con esos componentes. Para el detalle de props, lee los tipos publicados en
   `node_modules/@eclass/ui-kit/dist/` (por ejemplo `dist/index.d.ts` y los `types.d.ts` que
   indica cada ficha).
5. Si ningún componente sirve: usa Chakra UI 1.8 (`Box`, `Flex`, etc.) con colores del tema vía
   `vars('colors-...')` (ver `components/tema.md`) y propón al usuario agregar el componente a
   ui-kit si se va a repetir.

## Reglas

- No reimplementes con Chakra un modal, botón, alerta o tooltip que ya existe en ui-kit, ni
  copies su código: impórtalo de `@eclass/ui-kit`.
- No envuelvas un componente de ui-kit solo para cambiarle el estilo; si el diseño pide otra
  variante, avisa: quizás falta una prop en ui-kit.
- Importa siempre desde `@eclass/ui-kit` (nunca rutas internas como `@eclass/ui-kit/dist/...`).
- Si el proyecto tiene sus propias reglas o componentes que envuelven a ui-kit, sigue esas
  reglas: esta skill no las reemplaza.
- Si una ficha no coincide con lo que dicen los tipos de `dist/`, mandan los tipos; avisa al
  usuario para corregir la ficha en ui-kit.
