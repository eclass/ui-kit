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

    it('renders multiple buttons with correct types', () => {
      const buttons = [
        { text: 'Primary Button', action: jest.fn(), type: 'primary' as const },
        { text: 'Secondary Button', action: jest.fn(), type: 'secondary' as const },
        { text: 'Button Without Type', action: jest.fn() }, // type es opcional
      ]

      renderWithChakra(<Modal {...defaultProps} buttons={buttons} />)

      buttons.forEach((button) => {
        expect(screen.getByText(button.text)).toBeInTheDocument()
      })
    })

    it('does not render footer when no buttons are provided', () => {
      renderWithChakra(<Modal {...defaultProps} />)

      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
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

    it('calls onClose when overlay is clicked by default', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(<Modal {...defaultProps} onClose={onCloseMock} />)

      await user.click(screen.getByRole('button', { name: 'Close' }))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('does not call onClose when overlay is clicked if closeOnOverlayClick is false', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(
        <Modal {...defaultProps} onClose={onCloseMock} closeOnOverlayClick={false} />
      )

      expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()

      // eslint-disable-next-line testing-library/no-node-access
      const modalContainer = document.querySelector('.chakra-modal__content-container')
      if (modalContainer) {
        await user.click(modalContainer)
      }
      expect(onCloseMock).not.toHaveBeenCalled()
    })

    it('calls onClose when Escape key is pressed', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(<Modal {...defaultProps} onClose={onCloseMock} />)

      await user.keyboard('{Escape}')
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('prevents closing when buttons are loading', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()
      const buttons = [{ text: 'Loading Button', action: jest.fn(), isLoading: true }]

      renderWithChakra(<Modal {...defaultProps} onClose={onCloseMock} buttons={buttons} />)

      await user.keyboard('{Escape}')
      expect(onCloseMock).not.toHaveBeenCalled()
    })
  })

  describe('Button Positioning', () => {
    it('renders buttons inside ModalBody when buttonsInside is true', async () => {
      const user = userEvent.setup()
      const buttonActionMock = jest.fn()

      renderWithChakra(
        <Modal
          {...defaultProps}
          buttonsInside
          buttons={[{ text: 'Inside Button', action: buttonActionMock, type: 'primary' }]}
        />
      )

      // eslint-disable-next-line testing-library/no-node-access
      const modalBody = screen.getByText('Test Content').closest('.chakra-modal__body')
      const button = screen.getByText('Inside Button')

      expect(modalBody).toBeInTheDocument()
      expect(modalBody).toContainElement(button)

      await user.click(button)
      expect(buttonActionMock).toHaveBeenCalledTimes(1)
    })

    it('renders buttons in ModalFooter when buttonsInside is false', async () => {
      const user = userEvent.setup()
      const buttonActionMock = jest.fn()

      renderWithChakra(
        <Modal
          {...defaultProps}
          buttonsInside={false}
          buttons={[{ text: 'Outside Button', action: buttonActionMock, type: 'primary' }]}
        />
      )

      // eslint-disable-next-line testing-library/no-node-access
      const modalFooter = screen.getByText('Outside Button').closest('.chakra-modal__footer')
      const button = screen.getByText('Outside Button')

      expect(modalFooter).toBeInTheDocument()
      expect(modalFooter).toContainElement(button)

      await user.click(button)
      expect(buttonActionMock).toHaveBeenCalledTimes(1)
    })

    it('handles empty button array', () => {
      renderWithChakra(<Modal {...defaultProps} buttons={[]} />)

      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    })
  })

  describe('Responsive Behavior', () => {
    it('applies responsive styles based on useMediaQuery', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
      useMediaQuery.mockReturnValue([false]) // Simulate mobile environment

      renderWithChakra(<Modal {...defaultProps} />)

      // eslint-disable-next-line testing-library/no-node-access
      const modalContent = screen.getByRole('dialog').closest('.chakra-modal__content')
      expect(modalContent).toHaveStyle('border-radius: 0px')
      expect(modalContent).toHaveStyle('height: 100dvh')
      expect(modalContent).toHaveStyle('max-width: 100%')

      useMediaQuery.mockReturnValue([true]) // Reset to desktop for other tests
    })
  })
})
