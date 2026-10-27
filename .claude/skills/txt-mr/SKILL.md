---
name: txt-mr
description: Genera el título y la descripción de un pull request de GitHub para ui-kit, listos para pegar, a partir de los cambios de la rama contra main y con la plantilla incluida en esta skill. Úsala cuando el usuario pida el texto, la descripción o el contenido de un MR o PR. No crea el PR.
model: haiku
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Read
---

# Texto de merge request

Devuelve el título y la descripción del PR de la rama actual, en español, para que el usuario
los pegue en GitHub.

## Flujo

1. **Cambios de la rama:** `git log main..HEAD --format='%s%n%b'`, `git diff main...HEAD --stat`
   y `git status --short` (si hay cambios sin commitear, avísalo en una línea: no estarán en el PR).
   Ignora lockfiles y `CHANGELOG.md`. Abre el diff de un archivo (`git diff main...HEAD -- <archivo>`)
   solo si la lista no alcanza para entender el cambio.
2. **Plantilla:** ui-kit no tiene plantillas en el repo; usa la de la sección "Plantilla".
3. **Llénala:** respeta sus títulos y su orden; reemplaza los comentarios `<!--- ... -->` por el
   contenido y no los dejes en el resultado.
   - Datos que no se pueden sacar de git (ticket, solicitante, issue...): deja `TODO: <dato>` y
     menciónalo al final.
   - Marca con `x` las casillas que apliquen; no agregues casillas nuevas. "Breaking change" solo
     si se quitó o cambió un export de `src/index.ts` o una prop existente.

## Plantilla

```md
## Descripción

<!--- Describe tus cambios en detalle -->

## Motivación y contexto

<!--- ¿Por qué se requiere este cambio? ¿Qué problema soluciona? -->
<!--- Si soluciona un issue abierto, enlazarlo aquí. -->

## ¿Cómo puede ser probado esto?

<!--- Por favor, describe en detalle cómo pueden ser probados tus cambios. -->

## Tipos de cambios

<!--- ¿Qué tipo de cambios introduce su código? Pon un `x` en todas las casillas que apliquen: -->

- [ ] Bugfix (cambio ininterrumpido que soluciona un problema)
- [ ] Feature (cambio sin interrupciones que agrega funcionalidad)
- [ ] Breaking change (corrección o característica que haría que la funcionalidad existente no funcionara como se esperaba)
- [ ] Documentación (solo documentación, sin cambios en el código de la app)
```

## Contenido

- **Título:** el `type(scope): resumen` del commit principal; si hay varios commits, uno que los
  resuma con el mismo formato (≤72 caracteres). El PR se mergea con squash, así que el título
  queda como commit en `main` y define la versión que publica semantic-release.
- **Descripción:** qué cambia, en viñetas cortas agrupadas por componente o funcionalidad, no por
  archivo. Menciona props o exports nuevos.
- **Motivación y contexto:** el porqué, si se deduce de los commits; si no, `TODO: motivación`.
- **¿Cómo puede ser probado esto?:** pasos concretos en la documentación (`npm run docu`, página
  del componente, acción, resultado esperado) según lo que se tocó; si no hay cambios visibles,
  dilo.

## Salida

1. El título en un bloque de código.
2. La descripción en Markdown, en un bloque de código `md`, lista para pegar.
3. Si quedaron `TODO`, una línea con los datos que faltan.

Nada más: sin introducción, sin trailers de coautoría ni líneas de "generado por". No ejecutes
`git push` ni crees el PR.
