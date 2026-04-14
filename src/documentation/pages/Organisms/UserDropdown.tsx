import { Code, MyHeading, MyText, MyTitle } from '@/documentation/components'
import { UserDropdown, ProfileMenuItem } from '@/organisms'
import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

const user = {
  name: 'Josefin ferrada',
  id: 564654,
  picture: 'https://i.pravatar.cc/150?img=12',
}

const onLogout = (): void => {
  console.log('cerrar sesión')
}

const profileMenuItems: ProfileMenuItem[] = [
  { label: 'Mis Cursos activos', type: 'courses', href: '/courses' },
  { label: 'Mi Calendario', type: 'calendar', href: '/calendar' },
  { label: 'Mi Historial académico', type: 'academic-history', href: '/courses-past' },
  { label: 'Mi perfil', type: 'profile', href: '/profile' },
  { label: 'Cerrar sesión', type: 'logout', onClick: onLogout },
]

export const UserDropdownPage = (): JSX.Element => {
  return (
    <>
      <MyHeading>UserDropdown</MyHeading>

      <MyText>
        El componente <strong>UserDropdown</strong> es un menú desplegable de perfil de usuario
        accesible. Muestra un avatar como botón disparador que, al hacer clic, despliega un dropdown
        con:
        <ul style={{ listStylePosition: 'inside', marginTop: '8px' }}>
          <li>El nombre del usuario en el encabezado del menú</li>
          <li>Una lista de links de navegación</li>
          <li>Un botón de cerrar sesión (opcional)</li>
        </ul>
        <br />
        El componente es responsivo: en pantallas móviles ({'<'}480px) el menú ocupa toda la
        pantalla con un overlay de fondo. Soporta navegación por teclado con las teclas de flecha y
        es compatible con lectores de pantalla.
        <br />
        <br />
        El estado del menú puede manejarse de forma <strong>interna</strong> (sin pasar props) o de
        forma <strong>controlada</strong> externamente (pasando <code>isOpen</code>,{' '}
        <code>onOpen</code> y <code>onClose</code>), lo que permite coordinarlo con otros menús.
      </MyText>

      <MyTitle>Demo</MyTitle>

      <Box
        bg="rgb(34, 34, 34)"
        border={`1px solid ${vars('colors-neutral-platinum')}`}
        display="flex"
        justifyContent="end"
        p="40px 10px"
        position="relative"
        zIndex={10} // Aseguramos que el menú esté por encima del resto
      >
        <UserDropdown userInfo={user} menuItems={profileMenuItems} />
      </Box>

      <Box id="ViewContainer" mt="20px">
        <MyTitle>Uso</MyTitle>
        <MyText>Importa el componente desde el paquete de ui-kit:</MyText>
        <Code language="jsx" text={`import { UserDropdown } from '@eclass/ui-kit'`} />

        <MyTitle>Uso básico</MyTitle>
        <MyText>
          Ejemplo mínimo con estado interno (el componente maneja su propio open/close):
        </MyText>
        <Code
          language="jsx"
          text={`import { UserDropdown } from '@eclass/ui-kit'

const menuItems = [
  { label: 'Cursos', type: 'courses', href: '/courses' },
  { label: 'Mi perfil', type: 'profile', href: '/profile' },
  { label: 'Cerrar sesión', type: 'logout', onClick: () => console.log('logout') },
]

<UserDropdown
  userInfo={{
    name: 'Josefin',
    id: 12345,
    picture: 'https://ejemplo.com/avatar.jpg',
  }}
  menuItems={menuItems}
/>`}
        />

        <MyTitle>Uso controlado</MyTitle>
        <MyText>
          Pasa <code>isOpen</code>, <code>onOpen</code> y <code>onClose</code> para controlar el
          estado externamente, útil cuando hay otros menús que deben cerrarse al abrir éste:
        </MyText>
        <Code
          language="jsx"
          text={`const [isOpen, setIsOpen] = useState(false)

<UserDropdown
  userInfo={userInfo}
  menuItems={menuItems}
  isOpen={isOpen}
  onOpen={() => setIsOpen(true)}
  onClose={() => setIsOpen(false)}
/>`}
        />

        <MyTitle>Props</MyTitle>
        <MyText>El componente acepta los siguientes props:</MyText>
        <Code
          language="tsx"
          text={`type ProfileMenuItemType = 'courses' | 'calendar' | 'academic-history' | 'profile' | 'logout'

interface ProfileMenuItem {
  label: string              // Texto del link o botón
  type: ProfileMenuItemType // Tipo de ícono predefinido
  href?: string              // URL de destino (si es un link)
  onClick?: () => void       // Función a ejecutar (si es un botón)
}

interface AccesibleProfileMenuProps {
  userInfo: {
    name: string    // Nombre del usuario (se muestra en el header del menú)
    id: number      // ID del usuario
    picture: string // URL del avatar del usuario
  }
  menuItems: ProfileMenuItem[]  // Lista de items del menú (links o acciones)

  // Control externo del estado (opcional)
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}`}
        />
      </Box>
    </>
  )
}

export default UserDropdownPage
