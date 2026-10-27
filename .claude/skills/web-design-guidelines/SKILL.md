---
name: web-design-guidelines
description: Revisa accesibilidad y UI de componentes React de ui-kit (Chakra UI 1.8, librería consumida por otros fronts) con las Web Interface Guidelines de Vercel, adaptadas al proyecto. Úsala cuando se pida revisar la UI, la accesibilidad o la UX de archivos .tsx.
license: MIT
metadata:
  author: vercel (adaptada por eClass)
  version: "1.0.0"
  argument-hint: <archivo-o-patrón>
---

# Guías de interfaz (ui-kit)

Reglas de [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines)
que aplican a ui-kit: componentes de librería en React (desde 16.8) sin SSR, estilos con Chakra,
textos por props. Se quitaron las de hidratación, modo oscuro, tipografía y redacción en inglés,
fuentes, detección de idioma, traducciones y las de flujo de la app (avisar al salir con cambios
sin guardar, confirmar acciones destructivas), que son decisión del consumidor.

`plugin:jsx-a11y` está desactivado en `.eslintrc.json`: estas reglas no las revisa el lint.

Revisa solo los archivos indicados (o los `.tsx` con JSX del diff, sin `src/documentation`). Si
no se indican, pregunta cuáles.

## Reglas

### Accesibilidad

- Botones solo con ícono: `aria-label`. Íconos decorativos: `aria-hidden="true"`.
- Los íconos de `src/atoms/Icons` (vía `Base.tsx`) traen `<title>icon-<nombre></title>`, que no es
  un texto legible: si el ícono comunica algo, quien lo usa debe dar un `aria-label` en español.
- Acciones con `<button>` (o `Box as="button"`), navegación con `<a>`/`Link`; nunca `div`/`span`
  con `onClick`.
- Elementos interactivos operables con teclado.
- Imágenes con `alt` (`alt=""` si son decorativas); si el `alt` depende del contenido, recibirlo
  por props.
- Actualizaciones asíncronas (alertas, notificaciones) con `role="alert"`/`aria-live="polite"`.
- HTML semántico antes que ARIA; títulos `h1`–`h6` en orden jerárquico. Si el nivel del título
  depende de dónde lo use el consumidor, permitir cambiarlo por props (`as`).

### Componente de librería

- Aceptar y reenviar las props de accesibilidad que el consumidor pueda necesitar (`aria-*`,
  `id`, `as`, etc.) en vez de fijarlas.
- `id` internos únicos por instancia con `uniqueId()` (`src/services`), no fijos: el componente
  puede aparecer varias veces en la misma página (ver los íconos con `clipPath`).
- Modales y menús: foco dentro al abrir y de vuelta al disparador al cerrar (ver
  `returnFocusOnClose` en `Modals`); cerrar con Escape.

### Foco

- Foco visible en todo elemento interactivo (`_focusVisible` en Chakra).
- Nunca `outline: none` / `boxShadow: 'none'` en foco sin un reemplazo visible.
- Preferir `:focus-visible` sobre `:focus`.

### Formularios (si el componente incluye controles)

- Controles con `<label>` asociado (`htmlFor` o envolviendo) o `aria-label`.
- `type` correcto (`email`, `tel`, `number`...) y `name` significativo.
- Inputs con `value` llevan `onChange` (o usar `defaultValue`).
- No bloquear el pegado (`onPaste` + `preventDefault`).
- Checkbox/radio y su label comparten la misma zona de clic.
- Botones con estado de carga (`isLoading` en `Btn`) deshabilitados mientras dura la acción.

### Animación

- Respetar `prefers-reduced-motion`.
- Animar solo `transform`/`opacity`; nunca `transition: all`.
- Animaciones interrumpibles por el usuario.

### Contenido

- Contenedores de texto preparados para textos largos (`noOfLines`, `wordBreak`); hijos flex
  con `minW="0"` para poder truncar.
- Estados vacíos manejados: no renderizar UI rota con props opcionales ausentes, strings o arrays
  vacíos.
- Textos de props: considerar textos cortos, normales y muy largos.
- Botones con etiquetas específicas ("Guardar cambios", no "Continuar") en los textos por defecto.

### Imágenes y medios

- `<img>`/`Image` con `width` y `height` explícitos o contenedor con tamaño fijo; `loading="lazy"`
  si puede quedar bajo el pliegue.
- Archivos estáticos por URL del CDN, nunca en el repo (ver `.claude/rules/conventions.md`).

### Rendimiento

- Listas que pueden ser largas (>50 ítems): `content-visibility: auto` o paginar.
- Sin lecturas de layout en el render (`getBoundingClientRect`, `offsetHeight`, `scrollTop`).

### Fechas y números

- Formatear con `date-fns` o `Intl.*`, no con formatos escritos a mano.

### Anti-patrones (reportar siempre)

- `onPaste` con `preventDefault`.
- `transition: all`.
- `outline: none` sin foco visible de reemplazo.
- `div`/`span` con `onClick`.
- Inputs sin label; botones solo con ícono sin `aria-label`.
- `id` fijo en un componente que puede repetirse.
- Imágenes sin dimensiones.

## Formato de salida

Agrupado por archivo, `archivo:línea - problema → corrección`. Hallazgos breves, sin
introducción. Archivo sin problemas: `✓ ok`.
