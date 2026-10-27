---
name: txt-commit
description: Genera el texto de commit listo para pegar a partir de los cambios actuales de git, con formato `type(scope): resumen corto` en español y un listado de cambios adicionales cuando corresponde. Úsala cuando el usuario pida el mensaje, texto o comentario de commit. Para el texto de un MR usa la skill `txt-mr`. No hace commit.
model: haiku
allowed-tools: Bash(git status:*), Bash(git diff:*), Read
---

# Texto de commit

Revisa los cambios actuales de git y devuelve solo el texto de commit para que el usuario lo pegue manualmente. No mira el historial de commits: el formato es siempre el definido aquí.

## Flujo

1. **Convenciones del proyecto:** si existe `CLAUDE.md`, `AGENTS.md` o `.claude/CLAUDE.md` con reglas de commit, esas reglas tienen prioridad sobre las de esta skill.
2. **Cambios:** ejecuta `git status --short` y `git diff --stat`, incluyendo lo que esté en stage (`git diff --cached --stat`).
3. **Descarta archivos generados:** ignora lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock` y equivalentes) para decidir el tipo, el scope y el resumen. Solo tenlos en cuenta si el usuario pide incluir un cambio que sea únicamente de lockfile.
4. **Detalle, solo si hace falta:** abre el diff de archivos concretos (`git diff -- <archivo>`) únicamente cuando la lista de archivos no alcance para entender el cambio.
5. **Decide el mensaje:**
   - `type` según la tabla de tipos.
   - `scope`: el dominio o funcionalidad tocada, en minúsculas y corto (por ejemplo `work`, `units`, `group`). Si no hay un dominio claro, omite el scope: `type: resumen`.
   - `resumen`: una frase corta en español, en presente o infinitivo, sin punto final, de 72 caracteres o menos en total.
6. **Listado:** si además del cambio principal hay otros cambios relevantes, agrégalos como lista debajo del resumen (ver Formato).
7. **Respuesta:** devuelve solo el texto.

## Formato

Un solo cambio:

```
type(scope): resumen corto
```

Cambio principal con otros cambios:

```
type(scope): resumen corto

- otro cambio relevante
- otro cambio relevante
```

- Deja una línea en blanco entre el resumen y la lista.
- Cada punto de la lista describe qué cambió, en español y en una línea.
- No repitas en la lista lo que ya dice el resumen.
- No agregues la lista cuando el cambio es uno solo.
- Para un cambio incompatible (breaking change), agrega `!` después del type o del scope (`feat(api)!: resumen`) y un punto en la lista que explique qué se rompe.

## Tipos

| Tipo | Cuándo |
|---|---|
| `feat` | Comportamiento nuevo, flujos, pantallas o datos nuevos expuestos |
| `fix` | Corrección de errores, validaciones, condiciones o ajustes de comportamiento |
| `refactor` | Reestructuración sin cambiar el comportamiento |
| `perf` | Mejora de rendimiento |
| `test` | Solo pruebas nuevas o corregidas |
| `docs` | Solo documentación |
| `style` | Solo formato, sin cambio de significado |
| `build` | Sistema de build o dependencias |
| `ci` | Configuración o scripts de CI |
| `chore` | Mantención, versiones u otras tareas que no tocan código ni pruebas |

Si hay pruebas que acompañan a un cambio de código, el tipo lo define el cambio de código, no las pruebas.

## Reglas de salida

- **Mensaje de commit:** la respuesta completa es solo el texto del commit, en texto plano. Nada antes ni después: sin frases de introducción ("El texto de commit…", "Aquí está…"), sin explicaciones, sin bloques de código y sin prefijos como "Commit:".
- **MR:** el texto de un MR lo genera la skill `txt-mr`, no esta.
- **Cambios no relacionados:** si los cambios no corresponden a un solo cambio lógico, devuelve un texto por grupo, separado por una línea en blanco, e indica antes de cada uno qué archivos incluye. Esa es la única excepción en la que se agrega algo fuera del texto del commit.
- No ejecutes `git add`, `git commit` ni `git push`.
- No agregues trailers de coautoría ni líneas de "generado por".
- No inventes scopes que no correspondan a los archivos o a la funcionalidad tocada.
