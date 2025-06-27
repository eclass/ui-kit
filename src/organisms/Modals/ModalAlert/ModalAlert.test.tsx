import { render, screen, fireEvent } from '@testing-library/react'
import { ModalAlertNew } from './ModalAlert'
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

describe('ModalAlertNew Component', () => {
  it('renders with title and description', () => {
    renderWithChakra(
      <ModalAlertNew
        isOpen
        onClose={() => {}}
        title="Test Title"
        description="Test Description"
        type="info"
        status="info"
      />
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    renderWithChakra(<ModalAlertNew isOpen onClose={() => {}} type="loading" status="info" />)
    expect(screen.getByTestId('loading-svg')).toBeInTheDocument() // Assuming Loading component has data-testid="loading-svg"
  })

  it('renders buttons and calls action on click', () => {
    const actionMock = jest.fn()
    renderWithChakra(
      <ModalAlertNew
        isOpen
        onClose={() => {}}
        title="Test Title"
        type="info"
        status="info"
        buttons={[{ text: 'Action Button', action: actionMock }]}
      />
    )
    const button = screen.getByText('Action Button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(actionMock).toHaveBeenCalledTimes(1)
  })
})
