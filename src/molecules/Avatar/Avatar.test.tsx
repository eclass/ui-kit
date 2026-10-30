import { fireEvent, render, screen } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  test('sin nombre renderiza solo el círculo, oculto para lectores de pantalla', () => {
    render(<Avatar fullName="" id="avatar-vacio" />)

    const avatar = screen.getByTestId('Avatar')
    expect(avatar).toBeEmptyDOMElement()
    expect(avatar).toHaveAttribute('aria-hidden', 'true')
    expect(avatar).toHaveAttribute('id', 'avatar-vacio')
    expect(avatar).toHaveStyle({ backgroundColor: '#fff' })
  })

  test('sin foto muestra hasta dos iniciales en mayúsculas', () => {
    render(<Avatar fullName="juan carlos pérez" />)

    expect(screen.getByText('JC')).toBeInTheDocument()
  })

  test('ignora los espacios extra del nombre al armar las iniciales', () => {
    render(<Avatar fullName=" Juan  Pérez" />)

    expect(screen.getByText('JP')).toBeInTheDocument()
  })

  test.each([
    ['Ana', '#30baed'],
    ['Ana Soto', '#f6712f'],
    // El color usa el largo del nombre sin espacios en los extremos
    ['  Ana Soto  ', '#f6712f'],
    ['Antonia Gonzalez', '#d84315'],
  ])('el nombre "%s" siempre usa el color %s', (fullName, color) => {
    render(<Avatar fullName={fullName} />)

    expect(screen.getByTestId('Avatar')).toHaveStyle({ backgroundColor: color })
  })

  test('aplica el tamaño, el tamaño de fuente y el id recibidos', () => {
    render(<Avatar fullName="Ana Soto" size={80} fontSize={20} id="mi-avatar" />)

    expect(screen.getByTestId('Avatar')).toHaveStyle({ width: '80px', height: '80px' })
    const initials = screen.getByText('AS')
    expect(initials).toHaveStyle({ fontSize: '20px' })
    expect(initials).toHaveAttribute('id', 'mi-avatar')
  })

  test('agrega el borde decorativo solo con borderDecoration', () => {
    const { rerender } = render(<Avatar fullName="Ana Soto" />)
    expect(screen.getByTestId('Avatar')).not.toHaveStyle({ borderStyle: 'solid' })

    rerender(<Avatar fullName="Ana Soto" borderDecoration />)
    expect(screen.getByTestId('Avatar')).toHaveStyle({
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: '#0189FF',
    })
  })

  describe('con foto', () => {
    const picture = 'https://cdn.eclass.com/avatar.png'

    test('muestra las iniciales mientras la imagen carga', () => {
      render(<Avatar fullName="Ana Soto" picture={picture} alt="Foto de Ana" />)

      expect(screen.getByText('AS')).toBeInTheDocument()
      expect(screen.getByAltText('Foto de Ana')).toHaveStyle({ display: 'none' })
    })

    test('cuando la imagen carga la muestra en lugar de las iniciales y le pasa el id', () => {
      render(<Avatar fullName="Ana Soto" picture={picture} alt="Foto de Ana" id="mi-avatar" />)

      const image = screen.getByAltText('Foto de Ana')
      fireEvent.load(image)

      expect(screen.queryByText('AS')).not.toBeInTheDocument()
      expect(image).toHaveStyle({ display: 'block' })
      expect(image).toHaveAttribute('src', picture)
      expect(image).toHaveAttribute('id', 'mi-avatar')
    })

    test('si la imagen falla vuelve a mostrar las iniciales', () => {
      render(<Avatar fullName="Ana Soto" picture={picture} alt="Foto de Ana" />)

      const image = screen.getByAltText('Foto de Ana')
      fireEvent.load(image)
      fireEvent.error(image)

      expect(screen.getByText('AS')).toBeInTheDocument()
      expect(image).toHaveStyle({ display: 'none' })
    })

    test('usa "Avatar" como texto alternativo por defecto', () => {
      render(<Avatar fullName="Ana Soto" picture={picture} />)

      expect(screen.getByAltText('Avatar')).toBeInTheDocument()
    })
  })
})
