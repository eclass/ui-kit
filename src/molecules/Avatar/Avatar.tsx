import * as React from 'react'
import { useState, useEffect } from 'react'
import { AvatarProps } from './Avatar.types'

/** Los mismos 10 colores que usaba la v8, determinados por el último dígito del userId */
const AVATAR_COLORS = [
  '#0076ba',
  '#229f9c',
  '#2cb26b',
  '#30baed',
  '#95569e',
  '#9bc03a',
  '#d84315',
  '#f5a623',
  '#f6712f',
  '#ff6363',
]

const getColorByUserId = (userId: number): string => {
  if (userId >= 0) {
    const digits = userId.toString().split('')
    const position = parseInt(digits[digits.length - 1], 10)
    return AVATAR_COLORS[position]
  }
  return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
}

const getInitials = (fullName: string): string =>
  fullName
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

/**
 * Muestra la foto de perfil del usuario o un placeholder circular con sus iniciales.
 * El color de fondo es determinista según el `userId`.
 */
export const Avatar = ({
  fullName,
  userId,
  picture,
  size = 50,
  fontSize = 14,
  alt = 'Avatar',
  id,
  borderDecoration = false,
}: AvatarProps): React.ReactElement => {
  const [bgColor, setBgColor] = useState<string>('')
  const [imageValid, setImageValid] = useState<boolean>(false)

  useEffect(() => {
    setBgColor(getColorByUserId(userId))
  }, [userId])

  const wrapperStyle: React.CSSProperties = {
    alignItems: 'center',
    backgroundColor: fullName?.length === 0 ? '#fff' : bgColor,
    border: borderDecoration ? `3px solid #0189FF` : 'none',
    borderRadius: '50%',
    display: 'flex',
    flexShrink: 0,
    height: `${size}px`,
    justifyContent: 'center',
    margin: 0,
    overflow: 'hidden',
    width: `${size}px`,
  }

  const initialsStyle: React.CSSProperties = {
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    fontSize: `${fontSize}px`,
    fontWeight: 'bold',
    lineHeight: '30px',
    textTransform: 'uppercase',
  }

  const imgStyle: React.CSSProperties = {
    height: 'auto',
    maxWidth: '100%',
  }

  // Sin nombre: no hay nada que mostrar
  if (!fullName || fullName.length === 0) {
    return <figure style={wrapperStyle} data-testid="Avatar" aria-hidden="true" id={id} />
  }

  // Con foto: se intenta cargar la imagen; si falla, cae en iniciales
  if (picture) {
    return (
      <figure style={wrapperStyle} data-testid="Avatar" role="presentation">
        {/* La imagen se carga en background; si no es válida, mostramos iniciales */}
        {!imageValid && (
          <span style={initialsStyle} id={id} aria-hidden="true">
            {getInitials(fullName)}
          </span>
        )}
        <img
          src={picture}
          alt={alt}
          id={imageValid ? id : undefined}
          role="presentation"
          style={{ ...imgStyle, display: imageValid ? 'block' : 'none' }}
          onLoad={() => setImageValid(true)}
          onError={() => setImageValid(false)}
        />
      </figure>
    )
  }

  // Sin foto: sólo iniciales
  return (
    <figure style={wrapperStyle} data-testid="Avatar" role="presentation">
      {bgColor ? (
        <span style={initialsStyle} id={id} aria-hidden="true">
          {getInitials(fullName)}
        </span>
      ) : null}
    </figure>
  )
}

Avatar.displayName = 'Avatar'
