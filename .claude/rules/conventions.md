# Convenciones

## Código

- Componentes funcionales en PascalCase con export nombrado (`export function X(...)`); no se usa
  `export default` en la librería (solo en las páginas de la documentación, que son lazy).
- Props tipadas con una interfaz `XProps`; exportarla si el consumidor la necesita. Valores por
  defecto en la desestructuración (`size = 'md'`).
- Hooks `useX`. Sin componentes de clase.
- Funciones, hooks y componentes nuevos llevan JSDoc en español: qué hacen, y `@param`/`@returns`
  cuando no es obvio. En componentes, `@example` con su uso (ver `Label`, `ModalButtons`).
- Pruebas y página de documentación obligatorias en todo lo nuevo (ver
  `.claude/rules/testing/testing.md` y `.claude/rules/documentation/documentation.md`).

## Compatibilidad (la librería corre en el front del consumidor)

- Solo APIs de React 16.8 y JavaScript ES2019 (ver `.claude/rules/project-overview.md`).
- No cambiar la API pública sin avisar (ver `.claude/rules/architecture.md`): props nuevas siempre
  opcionales y con un valor por defecto que mantenga el comportamiento actual.
- Sin estado global ni efectos fuera del componente (nada de `window.x = ...`, listeners sin
  limpiar o `localStorage` sin necesidad): el componente vive dentro de la app del consumidor.

## Textos

- No hay sistema de traducciones. Los textos visibles que pueda necesitar cambiar el consumidor
  se reciben por props con un valor por defecto en español
  (`text?.seeMore.see ?? 'Ver más fechas en'`).

## Estilos

- Solo Chakra: `Box`/`Flex` + props/`sx`, colores y tokens con `vars('colors-...')` del tema
  (`src/theme`), nunca hexadecimales sueltos si el color existe en el tema.
- Responsive con Chakra:
  - Pocos atributos: valor por breakpoint en cada atributo, p. ej. `fontSize={{ base: '12px', md: '16px' }}`.
  - Muchos cambios: agruparlos en `sx` con `'@media screen and (max-width: 640px)': { ... }`.
  - En código nuevo, `useMediaQuery` solo cuando cambia la lógica o qué se renderiza, no para
    estilos. El código existente que lo usa para estilos no se migra salvo que se pida. En las
    pruebas `useMediaQuery` siempre devuelve `false` (`vitest-setup.ts`).
  - El punto de quiebre depende del componente; en el repo se usan 900px, 768px, 640px, 577px,
    480px y 425px, entre otros.
- No usar styled-components, `@emotion/styled`, scss ni css nuevos.

## Rendimiento y accesibilidad (al escribir código)

Lo esencial de las skills `react-best-practices` y `web-design-guidelines`; la revisión completa
se hace al final con `/revisar-desarrollo`.

- No definir componentes dentro de otros componentes.
- Derivar valores durante el render en vez de `useEffect` + `setState`.
- Dependencias de efectos primitivas; no objetos ni arrays creados en el render.
- `useMemo`/`useCallback`/`memo` solo para cálculos caros o props de hijos memoizados.
- Condicionales con ternario cuando la condición puede ser `0` o `''` (no `&&`).
- Elementos clicables con `button`/`a` (no `div` con `onClick`); botones solo con ícono con
  `aria-label`; imágenes con `alt`; inputs con label asociado.
- HTML recibido por props: sanitizar con `dompurify` antes de parsearlo con `html-react-parser`.

## Qué NO hacer

- No editar a mano `CHANGELOG.md` ni la versión de `package.json` (semantic-release).
- No editar `dist/` ni `coverage/` (generados).
- No agregar al repo archivos estáticos (imágenes, videos, audios, PDF): se suben a mano a
  Cloudflare y se usan por URL (`https://cdn.eclass.com/...`). Si una tarea necesita uno, o se
  detecta uno nuevo en los cambios, avisar al usuario de inmediato para que lo suba y entregue la
  URL. Los íconos son componentes SVG en `src/atoms/Icons`.
