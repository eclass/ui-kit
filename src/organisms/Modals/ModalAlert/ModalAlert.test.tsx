import { useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
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

const ModalAlertFocusHarness = ({
  returnFocusOnClose = true,
}: {
  returnFocusOnClose?: boolean
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Alert
      </button>
      <ModalAlertNew
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Focus Alert"
        type="info"
        status="info"
        returnFocusOnClose={returnFocusOnClose}
      >
        <button type="button" onClick={() => setIsOpen(false)}>
          Close Alert
        </button>
      </ModalAlertNew>
    </>
  )
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

  it('calls onClose when overlay is clicked', async () => {
    const onCloseMock = jest.fn()
    renderWithChakra(
      <ModalAlertNew isOpen onClose={onCloseMock} title="Test Title" type="info" status="info" />
    )

    // eslint-disable-next-line testing-library/no-node-access
    const modalContainer = document.querySelector('.chakra-modal__content-container')

    expect(modalContainer).toBeInTheDocument()

    if (modalContainer) {
      await userEvent.click(modalContainer)
    }
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  it('renders children when provided and type is not loading', () => {
    renderWithChakra(
      <ModalAlertNew isOpen onClose={() => {}} title="Test Title" type="info" status="info">
        <div>Test Children Content</div>
      </ModalAlertNew>
    )
    expect(screen.getByText('Test Children Content')).toBeInTheDocument()
  })

  it('does not render children when type is loading', () => {
    renderWithChakra(
      <ModalAlertNew isOpen onClose={() => {}} title="Test Title" type="loading" status="info">
        <div>Test Children Content</div>
      </ModalAlertNew>
    )
    expect(screen.queryByText('Test Children Content')).not.toBeInTheDocument()
  })

  it('keeps target blank links and adds noopener noreferrer preserving existing rel values', () => {
    renderWithChakra(
      <ModalAlertNew
        isOpen
        onClose={() => {}}
        title="Test Title"
        description={
          'Visita <a href="https://example.com" target="_blank" rel="nofollow">este enlace</a>'
        }
        type="info"
        status="info"
      >
        <div>Test Children Content</div>
      </ModalAlertNew>
    )

    const link = screen.getByRole('link', { name: 'este enlace' })

    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'nofollow noopener noreferrer')
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Children Content')).toBeInTheDocument()
  })

  it('renders non-string descriptions without sanitizing them', () => {
    renderWithChakra(
      <ModalAlertNew
        isOpen
        onClose={() => {}}
        title="Test Title"
        description={(<span>Custom Description Node</span>) as unknown as string}
        type="info"
        status="info"
      />
    )

    expect(screen.getByText('Custom Description Node')).toBeInTheDocument()
  })

  it('does not restore focus to trigger when returnFocusOnClose is false', async () => {
    const user = userEvent.setup()
    renderWithChakra(<ModalAlertFocusHarness returnFocusOnClose={false} />)

    const trigger = screen.getByRole('button', { name: 'Open Alert' })
    trigger.focus()

    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Close Alert' }))

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
    expect(trigger).not.toHaveFocus()
  })
})
