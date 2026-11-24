# Cómo usar la skill de accesibilidad (guía para el equipo)

La skill `accesibilidad-teclado-lector` ayuda a escribir y revisar código accesible de teclado y
lector de pantalla (WCAG 2.1 AA) en los componentes de ui-kit. **Propone; no verifica por sí
sola.** Lo que depende de teclado o lector de pantalla siempre hay que probarlo a mano.

## Antes de empezar

- Estar en la raíz de ui-kit, con Node 24.22.0 (`nvm use`) y `npm ci` hecho.
- Tener la skill disponible: viene en `.claude/skills/` del repo, no hay que instalar nada.

## A. Al escribir un componente nuevo

1. Pídele a Claude Code el componente, mencionando la skill. Por ejemplo:
   `Crea un botón de ayuda que abra un modal. Usa la skill accesibilidad-teclado-lector.`
2. Léelo antes de aceptarlo. Debe cumplir:
   - botones solo con ícono con `aria-label`, íconos decorativos con `aria-hidden`;
   - ningún `role` inventado ni puesto sobre `Box` sin necesidad;
   - foco visible con `_focusVisible`, nada de `outline: none`;
   - props de accesibilidad nuevas opcionales, estilos solo con Chakra, JSDoc en español.
3. Corre sus pruebas (`npx vitest run <ruta del .test.tsx>`). El lint de ui-kit no revisa
   accesibilidad (`jsx-a11y` está desactivado), así que no lo tomes como comprobación.
4. Haz la **prueba manual** que la skill deja como "Pendiente manual" (ver más abajo).

## B. Al revisar un archivo que ya existe

1. En Claude Code escribe: `/accesibilidad-teclado-lector src/ruta/al/archivo.tsx`
   (acepta varios archivos o una carpeta).
2. Recibirás hallazgos con este formato:
   `archivo:línea - problema (WCAG x.x.x) → corrección → cómo verificar`
3. La skill **no edita**. Elige qué hallazgos aplicar y pídele que los aplique de a uno.
4. Si el arreglo cambia un rol o un `aria-label` existente, avisa: puede romper pruebas de los
   consumidores.
5. `[verificar]` significa que salió de leer código. Confírmalo en el navegador antes de darlo por
   cierto. Una línea `✓ ok` no significa que todo esté bien.

## Prueba manual mínima (5 minutos por componente)

1. **Teclado**: en `npm run docu`, recorre todo con `Tab` y `Shift+Tab`. ¿Todo se alcanza, en
   orden lógico y con el foco siempre visible? Opera con `Enter`, `Espacio`, `Esc` y flechas donde
   corresponda.
2. **Modales y menús**: ábrelos con teclado. El foco entra y, al cerrar con `Esc`, vuelve al
   botón que lo abrió.
3. **Lector de pantalla** (macOS): activa VoiceOver con `Cmd+F5`, navega con `Ctrl+Opción` +
   flechas. Cada control debe anunciar nombre, rol y estado; los avisos dinámicos deben leerse sin
   mover el foco. Desactívalo con `Cmd+F5`.
4. Antes de publicar, repetirlo en un consumidor (p. ej. v8) con yalc.

## Lo que la skill no hace

- No mide contraste, zoom ni movimiento reducido (fuera de esta fase).
- No reemplaza la prueba con teclado y lector de pantalla, ni una auditoría formal.
- Puede equivocarse: si un hallazgo es falso o falta uno real, avisa para ajustar
  `references/` y no repetir el error.
