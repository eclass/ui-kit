# Catálogo para agentes (`ai/`)

`ai/` se publica en el paquete npm (`files` de `package.json`) y es una skill de Claude Code:
v8 y Campus Virtual la enlazan con `.claude/skills/ui-kit -> ../../node_modules/@eclass/ui-kit/ai`
para que sus agentes usen los componentes de ui-kit (también al implementar diseños de Figma).

- `ai/SKILL.md`: instrucciones de la skill (frontmatter `name: ui-kit` + `description`).
- `ai/README.md`: reglas e índice. Una fila `` | `Export` | Para qué | [ficha](components/x.md) | ``
  por cada export de valor de `src/index.ts`.
- `ai/components/<familia>.md`: una ficha por familia de componentes.

## Al agregar, quitar o cambiar un componente

- Actualizar su fila del índice y su ficha en el mismo cambio que el código, las pruebas y la
  documentación. `src/ai-catalog.test.ts` falla si un export no está en el índice o si una
  ficha enlazada no existe.
- Ficha: exports y ruta de sus tipos en `dist/`; cuál usar si hay variantes; ejemplo mínimo
  que importe de `@eclass/ui-kit`; props clave con efecto y valor por defecto (no copiar la
  tabla completa: los `.d.ts` viajan en el paquete); sección "Cómo se ve" con rasgos visuales
  (tokens de color, tamaños, mobile) para reconocerlo en un diseño.
- Solo lo que dice el código; si la página de documentación no coincide, manda el código.
- Los cambios en `ai/` llegan a los consumidores al publicar una versión: un cambio solo de
  fichas va con `docs(ai)` y no publica; acompáñalo con el `feat`/`fix` del componente.
