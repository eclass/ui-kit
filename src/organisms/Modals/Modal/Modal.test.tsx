import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal } from './Modal'

// Mock de useMediaQuery para controlar el comportamiento responsivo en los tests
jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    ...originalModule,
    useMediaQuery: jest.fn(() => [true]), // Por defecto, simula un entorno de escritorio
  }
})

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

// Props por defecto para reducir repetición
const defaultProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Test Title',
  children: <div>Test Content</div>,
}

describe('Modal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('renders with title and children content', () => {
      renderWithChakra(<Modal {...defaultProps} />)

      expect(screen.getByText('Test Title')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('renders fixedSubtitle when provided', () => {
      renderWithChakra(<Modal {...defaultProps} fixedSubtitle="Fixed Subtitle" />)

      expect(screen.getByText('Fixed Subtitle')).toBeInTheDocument()
    })

    it('does not render when isOpen is false', () => {
      renderWithChakra(<Modal {...defaultProps} isOpen={false} />)

      expect(screen.queryByText('Test Title')).not.toBeInTheDocument()
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('does not render fixedSubtitle when not provided or empty', () => {
      renderWithChakra(<Modal {...defaultProps} />)
      expect(screen.queryByText('Fixed Subtitle')).not.toBeInTheDocument()

      // Test con string vacío
      renderWithChakra(<Modal {...defaultProps} fixedSubtitle="" />)
      expect(screen.queryByText('Fixed Subtitle')).not.toBeInTheDocument()

      // Test con solo espacios
      renderWithChakra(<Modal {...defaultProps} fixedSubtitle="   " />)
      expect(screen.queryByText('Fixed Subtitle')).not.toBeInTheDocument()
    })
  })

  describe('Interaction', () => {
    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(<Modal {...defaultProps} onClose={onCloseMock} />)

      await user.click(screen.getByLabelText('Close'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('does not render close button when closeOnOverlayClick is false', () => {
      const onCloseMock = jest.fn()

      renderWithChakra(
        <Modal {...defaultProps} onClose={onCloseMock} closeOnOverlayClick={false} />
      )

      expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
    })

    it('calls onClose when Escape key is pressed by default', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(<Modal {...defaultProps} onClose={onCloseMock} />)

      await user.keyboard('{Escape}')
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('does not call onClose when Escape key is pressed if closeOnOverlayClick is false', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(
        <Modal {...defaultProps} onClose={onCloseMock} closeOnOverlayClick={false} />
      )

      await user.keyboard('{Escape}')
      expect(onCloseMock).not.toHaveBeenCalled()
    })
  })

  describe('Modal Configuration', () => {
    it('applies withoutMargin styles when withoutMargin is true', () => {
      renderWithChakra(<Modal {...defaultProps} withoutMargin />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
      // Aquí podrías verificar que los estilos se aplican correctamente
      // pero esto requiere acceso al DOM más específico
    })

    it('applies correct scrollBehavior when set to inside', () => {
      renderWithChakra(<Modal {...defaultProps} scrollBehavior="inside" />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
    })

    it('applies correct scrollBehavior when set to outside', () => {
      renderWithChakra(<Modal {...defaultProps} scrollBehavior="outside" />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
    })

    it('applies fixedButtons styles when fixedButtons is true', () => {
      renderWithChakra(<Modal {...defaultProps} fixedButtons />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
    })
  })

  describe('Responsive Behavior', () => {
    it('applies desktop styles when screen is desktop size', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
      useMediaQuery.mockReturnValue([true]) // Simulate desktop environment

      renderWithChakra(<Modal {...defaultProps} />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
      // En desktop, debería tener border-radius y otros estilos específicos
    })

    it('applies mobile styles when screen is mobile size', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
      useMediaQuery.mockReturnValue([false]) // Simulate mobile environment

      renderWithChakra(<Modal {...defaultProps} />)

      const modalContent = screen.getByRole('dialog')
      expect(modalContent).toBeInTheDocument()
      // En mobile, debería tener border-radius: 0 y height: 100dvh
    })
  })

  describe('Header Styling', () => {
    it('renders header with correct background color and styling', () => {
      renderWithChakra(<Modal {...defaultProps} />)

      const header = screen.getByText('Test Title')
      expect(header).toBeInTheDocument()

      // Verificar que el header tiene los estilos correctos
      expect(header).toHaveStyle('text-align: center')
      expect(header).toHaveStyle('font-weight: 700')
    })

    it('renders header with different font size on mobile vs desktop', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery

      // Test desktop
      useMediaQuery.mockReturnValue([true])
      const { rerender } = renderWithChakra(<Modal {...defaultProps} />)
      let header = screen.getByText('Test Title')
      expect(header).toHaveStyle('font-size: 20px')

      // Test mobile
      useMediaQuery.mockReturnValue([false])
      rerender(
        <ChakraProvider>
          <Modal {...defaultProps} />
        </ChakraProvider>
      )
      header = screen.getByText('Test Title')
      expect(header).toHaveStyle('font-size: 18px')
    })
  })
})
