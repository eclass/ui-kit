---
name: playground
description: Arma una instancia de uno o varios componentes de ui-kit en `src/Playground.local.tsx` (ignorado por git) para probarlos a mano con `npm run dev`, con props de ejemplo y sus estados relevantes. Úsala cuando el usuario pida probar, ver o levantar un componente en el Playground, o antes de la prueba manual de teclado y lector de pantalla.
metadata:
  version: "1.0.0"
  argument-hint: <componente(s)>
---

# Playground de componentes

`npm run dev` monta `src/Playground.tsx` (versionado y vacío). Si existe `src/Playground.local.tsx`
(ignorado por git, ver `.gitignore`), `src/main.tsx` usa ese archivo en su lugar. Esta skill solo
escribe ese archivo local; **nunca edita `src/Playground.tsx`**.

## Pasos

1. **Qué probar**: los componentes que indique el usuario; si no indica, los componentes cambiados
   en `git diff main...HEAD --stat` (sin `src/documentation`). Si hay duda, pregunta cuáles.
2. **Leer cada componente**: su archivo, su `XProps` y, si existe, su página en
   `src/documentation` y sus pruebas, que traen props de ejemplo realistas. No inventes props.
3. **Escribir `src/Playground.local.tsx`** con `export function Playground(): JSX.Element`:
   - Importar con alias (`@atoms`, `@molecules`, `@organisms`, `@/...`) o rutas del propio repo,
     no desde `src/index.ts`.
   - `main.tsx` ya envuelve en `ChakraProvider` con el tema: no volver a envolver.
   - Un bloque por componente, con un título (`Heading`) y, si aplica, una variante por estado
     relevante: abierto/cerrado, vacío, texto largo, deshabilitado, con y sin props opcionales.
   - Modales y menús: un botón disparador real (`button`/`Button`) y estado con `useDisclosure`,
     para poder probar que el foco vuelve a él.
   - Callbacks de ejemplo (`onClick`, `onClose`) que escriban en `console.log`.
   - Texto de ejemplo en español; sin archivos estáticos nuevos (si hace falta una imagen,
     avisa al usuario: se sube a Cloudflare y se usa por URL).
   - Solo APIs de React 16.8 (es lo que debe soportar la librería).
4. **Levantar**: `npm run dev` (Vite con `VITE_APP_MODE=playground`) y mostrar la URL local. Con
   el navegador integrado, abrir la página y revisar que renderiza y que no hay errores en la
   consola.
5. **Guía de prueba manual** (corta, según los componentes): recorrido con `Tab`/`Shift+Tab`,
   `Enter`/`Espacio`/`Esc`/flechas, dónde debe volver el foco, y VoiceOver (`Cmd+F5`). Si usas el
   navegador integrado, puedes recorrer con `Tab` y leer el árbol de accesibilidad para comprobar
   nombres y roles, pero eso **no** reemplaza VoiceOver: déjalo como "Pendiente manual".

## Reglas

- No commitear `Playground.local.tsx`; confirma con `git status --short` que no aparece.
- Si ya existe un `Playground.local.tsx`, léelo antes de sobrescribirlo y conserva lo que el
  usuario haya agregado, salvo que pida reemplazarlo.
- Para limpiar: borrar `src/Playground.local.tsx` (el Playground vacío vuelve solo).
- No toques el resto de `src/`, ni exports, ni `package.json`.
