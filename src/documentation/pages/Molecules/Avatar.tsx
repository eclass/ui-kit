import { Box } from '@chakra-ui/react'
import { Avatar } from '@molecules'
import { ListComponent, MyHeading, MyText, MyTitle, Code } from '@/documentation/components'

export const ViewAvatar = (): JSX.Element => {
  return (
    <>
      <MyHeading>Avatar</MyHeading>
      <MyText>
        Muestra la foto de perfil de un usuario dentro de un círculo. Si la imagen no está
        disponible o no se proporciona, muestra las primeras dos iniciales del nombre completo sobre
        un fondo de color determinista según el <code>userId</code>.
      </MyText>
      <Code text={`import { Avatar } from '@eclass/ui-kit'`} />

      {/* ── Uso básico ─────────────────────────────────────────────── */}
      <MyTitle>Uso básico</MyTitle>
      <MyText>
        Proporciona <code>fullName</code> y <code>userId</code>. Cuando no hay imagen, se renderizan
        las iniciales con un color de fondo único para ese usuario.
      </MyText>
      <ListComponent>
        <Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
        <Avatar fullName="Carlos López" userId={12} size={40} />
        <Avatar fullName="Ana María Torres" userId={7} size={40} />
      </ListComponent>
      <Code
        text={`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Carlos López" userId={12} size={40} />
<Avatar fullName="Ana María Torres" userId={7} size={40} />`}
      />

      {/* ── Con imagen ─────────────────────────────────────────────── */}
      <MyTitle>Con foto de perfil</MyTitle>
      <MyText>
        Cuando se proporciona <code>picture</code>, el componente intenta cargar la imagen. Si la
        URL es inválida, cae automáticamente en las iniciales.
      </MyText>
      <ListComponent>
        <Avatar
          fullName="Josefin Ferrada"
          userId={564654}
          picture="https://i.pravatar.cc/150?img=12"
          size={40}
        />
        <Avatar
          fullName="Josefin Ferrada"
          userId={3}
          picture="https://url-que-no-existe.xyz/foto.jpg"
          size={40}
        />
      </ListComponent>
      <Code
        text={`<Avatar
  fullName="Josefin Ferrada"
  userId={564654}
  picture="https://i.pravatar.cc/150?img=12"
  size={40}
/>
{/* Si la URL falla, muestra las iniciales */}
<Avatar
  fullName="Josefin Ferrada"
  userId={3}
  picture="https://url-que-no-existe.xyz/foto.jpg"
  size={40}
/>`}
      />

      {/* ── Tamaños ────────────────────────────────────────────────── */}
      <MyTitle>Tamaños</MyTitle>
      <MyText>
        El prop <code>size</code> controla el diámetro en píxeles. El valor por defecto es{' '}
        <code>50</code>. <code>fontSize</code> ajusta el tamaño de las iniciales (por defecto{' '}
        <code>14</code>).
      </MyText>
      <ListComponent gap="1.5rem">
        <Box display="flex" flexDir="column" alignItems="center" gap="0.25rem">
          <Avatar fullName="Josefin Ferrada" userId={564654} size={24} fontSize={10} />
          <code style={{ fontSize: '11px' }}>24px</code>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center" gap="0.25rem">
          <Avatar fullName="Josefin Ferrada" userId={564654} size={32} fontSize={12} />
          <code style={{ fontSize: '11px' }}>32px</code>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center" gap="0.25rem">
          <Avatar fullName="Josefin Ferrada" userId={564654} size={40} fontSize={14} />
          <code style={{ fontSize: '11px' }}>40px</code>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center" gap="0.25rem">
          <Avatar fullName="Josefin Ferrada" userId={564654} />
          <code style={{ fontSize: '11px' }}>50px (default)</code>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center" gap="0.25rem">
          <Avatar fullName="Josefin Ferrada" userId={564654} size={64} fontSize={22} />
          <code style={{ fontSize: '11px' }}>64px</code>
        </Box>
      </ListComponent>
      <Code
        text={`<Avatar fullName="Josefin Ferrada" userId={564654} size={24} fontSize={10} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={32} fontSize={12} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} fontSize={14} />
<Avatar fullName="Josefin Ferrada" userId={564654} /> {/* default */}
<Avatar fullName="Josefin Ferrada" userId={564654} size={64} fontSize={22} />`}
      />

      {/* ── Color determinista ─────────────────────────────────────── */}
      <MyTitle>Color por userId</MyTitle>
      <MyText>
        El color de fondo se calcula a partir del último dígito del <code>userId</code>, por lo que
        siempre es consistente para el mismo usuario en todas las vistas.
      </MyText>
      <ListComponent gap="1rem">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
          <Box key={digit} display="flex" flexDir="column" alignItems="center" gap="0.25rem">
            <Avatar fullName={`User ${digit}`} userId={digit} size={40} />
            <code style={{ fontSize: '11px' }}>id: {digit}</code>
          </Box>
        ))}
      </ListComponent>
      <Code
        text={`{/* Cada userId termina en un dígito → 10 colores posibles */}
<Avatar fullName="User 0" userId={0} size={40} />
<Avatar fullName="User 1" userId={1} size={40} />
{/* ... hasta userId terminado en 9 */}`}
      />

      {/* ── Borde decorativo ───────────────────────────────────────── */}
      <MyTitle>Borde decorativo</MyTitle>
      <MyText>
        El prop <code>borderDecoration</code> añade un borde en el color primario del sistema de
        diseño (<code>#0189FF</code>). Útil para destacar al usuario activo en un listado.
      </MyText>
      <ListComponent>
        <Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
        <Avatar fullName="Josefin Ferrada" userId={564654} size={40} borderDecoration />
      </ListComponent>
      <Code
        text={`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} borderDecoration />`}
      />

      {/* ── Props ──────────────────────────────────────────────────── */}
      <MyTitle>Props</MyTitle>
      <Code
        language="typescript"
        text={`interface AvatarProps {
  fullName: string         // Nombre completo (para iniciales y accesibilidad)
  userId: number           // Determina el color de fondo de forma determinista
  picture?: string         // URL de la foto de perfil (opcional)
  size?: number            // Diámetro en px (default: 50)
  fontSize?: number        // Tamaño fuente de iniciales en px (default: 14)
  alt?: string             // Texto alternativo accesible (default: 'Avatar')
  id?: string              // ID del elemento
  borderDecoration?: boolean // Borde en color primario (default: false)
}`}
      />
    </>
  )
}

export default ViewAvatar
