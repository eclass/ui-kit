export interface AvatarProps {
  /** Nombre completo del usuario (se usan las primeras 2 iniciales como fallback) */
  fullName: string
  /** ID del usuario (determina el color de fondo de forma determinista) */
  userId: number
  /** URL de la foto de perfil (opcional) */
  picture?: string
  /** Diámetro en píxeles */
  size?: number
  /** Tamaño de fuente en píxeles para las iniciales */
  fontSize?: number
  /** Descripción accesible de la imagen */
  alt?: string
  /** ID del elemento raíz */
  id?: string
  /** Borde decorativo usando el color primario del tema */
  borderDecoration?: boolean
}
