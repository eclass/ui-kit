# UserDropdown

Exports: `UserDropdown`.
Tipos: `dist/organisms/User/UserDropdown.d.ts` (`AccesibleProfileMenuProps`, `ProfileMenuItem`,
ambos exportados; `ProfileMenuItemType` no se exporta desde el paquete).

Menú de perfil del header: el avatar del usuario abre un menú con su nombre, enlaces de
navegación y "Cerrar sesión".

## Cuándo usarlo

- Avatar del usuario en el header que despliega el menú de perfil. No reimplementar este menú
  con `Menu` de Chakra.

## Ejemplo

```tsx
import { UserDropdown, ProfileMenuItem } from '@eclass/ui-kit'

const menuItems: ProfileMenuItem[] = [
  { label: 'Mis cursos activos', type: 'courses', href: '/courses' },
  { label: 'Mi calendario', type: 'calendar', href: '/calendar' },
  { label: 'Mi historial académico', type: 'academic-history', href: '/courses-past' },
  { label: 'Mi perfil', type: 'profile', href: '/profile' },
  { label: 'Cerrar sesión', type: 'logout', onClick: () => logout() },
]

export function HeaderProfile(): JSX.Element {
  return (
    <UserDropdown
      userInfo={{ name: 'Josefina Ferrada', id: 564654, picture: 'https://…/avatar.jpg' }}
      menuItems={menuItems}
    />
  )
}
```

## Props clave (`AccesibleProfileMenuProps`)

- `userInfo` (obligatoria): `{ name, id, picture }`. `name` va en la cabecera del menú y en el
  avatar; si `picture` no carga, el avatar muestra las iniciales.
- `menuItems` (obligatoria): `ProfileMenuItem[]`, en el orden en que se muestran.
  - `type`: `'courses' | 'calendar' | 'academic-history' | 'profile' | 'logout'`. Define el
    ícono; `logout` no lleva ícono y tiene otro estilo (ver abajo).
  - `href`: el ítem se renderiza como enlace.
  - `onClick`: el ítem se renderiza como `button` (y se ignora `href`).
  - `label` se usa también como `key`: no repetir textos.
- `isOpen`, `onOpen`, `onClose` (opcionales): control externo, para coordinarlo con otros
  menús del header (cerrar uno al abrir otro). Sin ellos el estado es interno.
- Navegación con flechas y Tab entre los ítems. El avatar tiene el tooltip "Mi perfil".
- En pantallas de 480px o menos, al abrirse ocupa toda la pantalla bajo el header (desde
  `top: 56px`), bloquea el scroll del `body` y oculta el contenido de la página: en v8
  `#ViewContainer` y `#Footer`; en Campus Virtual `.browse` y el bloque que sigue a
  `header.header` dentro de `.main`. Lo restaura al cerrar.

## Cómo se ve (para reconocerlo en un diseño)

- Disparador: avatar circular de 30px (foto, o iniciales blancas sobre un color según el
  nombre). Abierto, aparece un triángulo gris oscuro bajo el avatar apuntando al menú.
- Menú alineado a la derecha del avatar, 290px de ancho, bordes redondeados de 10px y sombra
  difusa. Arriba, franja gris oscuro `neutral-davysGrey` (#5C5C5C) con el nombre en blanco,
  Roboto 15px peso 500.
- Debajo, bloque blanco con los ítems: ícono circular de 45px con fondo celeste (#E0EEFA) e
  ilustración de colores, y texto en mayúsculas 12px peso 500 color `neutral-spanishGrey`
  (#999999), separados por líneas `neutral-platinum` (#E8E8E8). Hover: fondo
  `neutral-cultured` (#F4F4F4).
- "Cerrar sesión": último ítem, texto centrado sin ícono, 14px peso 500 en azul
  `alert-deepSkyBlue` (#0189FF), sin mayúsculas forzadas.
- Mobile (≤480px): menú a pantalla completa, sin bordes redondeados ni sombra.
