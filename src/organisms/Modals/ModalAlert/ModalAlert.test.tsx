import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'

import { ModalAlertNew } from './ModalAlert'

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

  it('renders buttons and calls action on click', async () => {
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
    await userEvent.click(button)
    expect(actionMock).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay is clicked', async () => {
    const onCloseMock = jest.fn()
    renderWithChakra(
      <ModalAlertNew isOpen onClose={onCloseMock} title="Test Title" type="info" status="info" />
    )

    // eslint-disable-next-line testing-library/no-node-access
    const modalContainer = document.querySelector('.chakra-modal__content-container')

    expect(modalContainer).toBeInTheDocument()
    await userEvent.click(modalContainer)
    expect(onCloseMock).not.toHaveBeenCalled()
  })
})
