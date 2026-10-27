# Comandos

## Entorno

- Node 24.22.0 (`.nvmrc`) y npm 11.13.0 (`packageManager`), los mismos que usa CI.
- Instalar con `npm ci` (CI no regenera el lockfile). Requiere acceso SSH a gitlab.com por los
  paquetes de tipos `@types/eclass__*`.

## Desarrollo

```bash
npm run dev      # Playground (src/Playground.tsx) para probar componentes en local
npm run docu     # sitio de documentación en local
npm run build    # build de la librería en dist/ (lo corre CI al publicar)
```

- `npm run storybook`, que menciona el README, no existe.

## Tests

```bash
npx jest <rutas de .test.tsx>
```

- `npm run test` corre la suite completa con coverage: en local no usarlo, ni
  `--findRelatedTests`, porque es muy pesado para el equipo de desarrollo. La suite completa corre
  en CI (GitHub Actions).
- En local, correr solo los `.test.ts(x)` de los archivos tocados, pasando sus rutas, y solo
  cuando la tarea lo requiera.

## Formato, lint y tipos

- Revisar solo los archivos tocados:
  `npx prettier --write <archivos>` y `npx eslint <archivos>`.
- `npm run lint` formatea y corrige todo `src` (prettier + `eslint --fix`); `npm run lint:check`
  revisa todo `src` sin corregir (es lo que corre CI).
- Tipos: `npm run ts-compile-check` (`tsc` de todo el proyecto). Lo corre el pre-commit de husky,
  así que un error de tipos bloquea el commit.
