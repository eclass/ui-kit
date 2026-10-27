# Flujo de git

- Commits con la skill `txt-commit`: `type(scope): resumen`, scope corto en minúsculas (dominio o
  componente, p. ej. `modals`, `calendar`, `documentation`), resumen en español de ≤72
  caracteres. commitlint (`config-conventional`) valida el formato.
- Commit normal, con los hooks de husky activos (sin `-n`):
  - pre-commit: `npm run ts-compile-check` y luego lint-staged, que ejecuta `npm run lint`
    (prettier sobre todo `src` + `eslint --fix`). Puede dejar formateados archivos que no estaban
    en el commit: revisar `git status` después de commitear.
  - commit-msg: commitlint.
- semantic-release en `main` publica en npm y actualiza `CHANGELOG.md` y la versión
  (`.releaserc.json` sin `releaseRules`, preset por defecto): `feat` → minor; `fix`/`perf` →
  patch; `refactor`, `docs`, `test`, `chore`, etc. no publican versión.
- Cambio incompatible de la API pública (ver `.claude/rules/architecture.md`): `BREAKING CHANGE: <qué
  se rompe>` en el cuerpo del commit → versión major. El preset por defecto (angular) no
  reconoce el `!` del título por sí solo, así que el pie `BREAKING CHANGE:` es obligatorio. Confirmar con el usuario antes, porque obliga
  a actualizar a todos los consumidores.
- Ramas: `fix|feat|feature|bugfix/<nombre>` (las más usadas en el repo).
- Los PR se mergean a `main` con squash en GitHub; el título del PR queda como commit, por eso
  debe cumplir el mismo formato.
- CI (GitHub Actions, `.github/workflows/nodejs.yml`) en cada push: `npm run lint:check` +
  `npm run test`. En `main` además: build, release y deploy de la documentación a GitHub Pages.
