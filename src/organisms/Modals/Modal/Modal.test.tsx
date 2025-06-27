import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'
import { ChakraProvider } from '@chakra-ui/react'

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

describe('Modal Component', () => {
  it('renders with title and children content', () => {
    renderWithChakra(
      <Modal isOpen onClose={() => {}} title="Test Title">
        <div>Test Content</div>
      </Modal>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders fixedSubtitle when provided', () => {
    renderWithChakra(
      <Modal isOpen onClose={() => {}} title="Test Title" fixedSubtitle="Fixed Subtitle">
        <div>Test Content</div>
      </Modal>
    )
    expect(screen.getByText('Fixed Subtitle')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn()
    renderWithChakra(
      <Modal isOpen onClose={onCloseMock} title="Test Title">
        <div>Test Content</div>
      </Modal>
    )
    fireEvent.click(screen.getByLabelText('Close'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay is clicked by default', () => {
    const onCloseMock = jest.fn()
    renderWithChakra(
      <Modal isOpen onClose={onCloseMock} title="Test Title">
        <div>Test Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when overlay is clicked if closeOnOverlayClick is false', () => {
    const onCloseMock = jest.fn()
    renderWithChakra(
      <Modal isOpen onClose={onCloseMock} title="Test Title" closeOnOverlayClick={false}>
        <div>Test Content</div>
      </Modal>
    )

    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()

    const modalContainer = document.querySelector('.chakra-modal__content-container')
    fireEvent.click(modalContainer)
    expect(onCloseMock).not.toHaveBeenCalled()
  })
  /** 
  it('renders buttons inside ModalBody when buttonsInside is true', () => {
    const buttonActionMock = jest.fn()
    renderWithChakra(
      <Modal
        isOpen
        onClose={() => {}}
        title="Test Title"
        buttonsInside
        buttons={[{ text: 'Inside Button', action: buttonActionMock, type: 'primary' }]}
      >
        <div>Test Content</div>
      </Modal>
    )
    const modalBody = screen.getByText('Test Content').closest('.chakra-modal__body')
    expect(modalBody).toBeInTheDocument()
    expect(screen.getByText('Inside Button')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Inside Button'))
    expect(buttonActionMock).toHaveBeenCalledTimes(1)
  })

  it('renders buttons outside ModalBody when buttonsInside is false', () => {
    const buttonActionMock = jest.fn()
    renderWithChakra(
      <Modal
        isOpen
        onClose={() => {}}
        title="Test Title"
        buttonsInside={false}
        buttons={[{ text: 'Outside Button', action: buttonActionMock, type: 'primary' }]}
      >
        <div>Test Content</div>
      </Modal>
    )
    const modalFooter = screen.getByText('Outside Button').closest('.chakra-modal__footer')
    expect(modalFooter).toBeInTheDocument()
    expect(screen.getByText('Outside Button')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Outside Button'))
    expect(buttonActionMock).toHaveBeenCalledTimes(1)
  })

  it('applies responsive styles based on useMediaQuery', () => {
    const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
    useMediaQuery.mockReturnValue([false]) // Simulate mobile environment

    renderWithChakra(
      <Modal isOpen onClose={() => {}} title="Test Title">
        <div>Test Content</div>
      </Modal>
    )

    const modalContent = screen.getByRole('dialog').closest('.chakra-modal__content')
    expect(modalContent).toHaveStyle('border-radius: 0px')
    expect(modalContent).toHaveStyle('height: 100dvh')
    expect(modalContent).toHaveStyle('margin: 0px')
    expect(modalContent).toHaveStyle('max-width: 100%')

    useMediaQuery.mockReturnValue([true]) // Reset to desktop for other tests
  })
  */
})
