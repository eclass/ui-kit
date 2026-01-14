import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalMultiple } from './ModalMultiple'

// Mock de useMediaQuery para controlar el comportamiento responsivo
jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    ...originalModule,
    useMediaQuery: jest.fn(() => [true]), // Desktop por defecto
  }
})

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

describe('ModalMultiple Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  /* -------------------------------------------------------------------------- */
  /*                                   RENDERING                                */
  /* -------------------------------------------------------------------------- */

  describe('Rendering', () => {
    it('renders modal type correctly', () => {
      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={jest.fn()} title="Modal Title">
          <div>Modal Content</div>
        </ModalMultiple>
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Modal Title')).toBeInTheDocument()
      expect(screen.getByText('Modal Content')).toBeInTheDocument()
    })

    it('renders modalAlert type correctly', () => {
      renderWithChakra(
        <ModalMultiple
          type="modalAlert"
          isOpen
          onClose={jest.fn()}
          title="Alert Title"
          description="Alert Description"
        />
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Alert Title')).toBeInTheDocument()
      expect(screen.getByText('Alert Description')).toBeInTheDocument()
    })

    it('renders modalLoading type correctly', () => {
      renderWithChakra(
        <ModalMultiple
          type="modalLoading"
          isOpen
          onClose={jest.fn()}
          title="Loading Title"
          description="Loading Description"
        />
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Loading Title')).toBeInTheDocument()
      expect(screen.getByText('Loading Description')).toBeInTheDocument()
    })

    it('does not render when isOpen is false', () => {
      renderWithChakra(
        <ModalMultiple type="modal" isOpen={false} onClose={jest.fn()} title="Hidden Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(screen.queryByText('Hidden Modal')).not.toBeInTheDocument()
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                                 INTERACTION                                */
  /* -------------------------------------------------------------------------- */

  describe('Interaction', () => {
    it('calls onClose when close button is clicked (modal)', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={onCloseMock} title="Closable Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      await user.click(screen.getByLabelText('Close'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('does not close on escape when type is modalLoading', async () => {
      const user = userEvent.setup()
      const onCloseMock = jest.fn()

      renderWithChakra(
        <ModalMultiple
          type="modalLoading"
          isOpen
          onClose={onCloseMock}
          title="Loading Modal"
          description="Please wait"
        />
      )

      await user.keyboard('{Escape}')
      expect(onCloseMock).not.toHaveBeenCalled()
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                             CHILDREN BEHAVIOR                              */
  /* -------------------------------------------------------------------------- */

  describe('Children rendering', () => {
    it('renders children for modal type', () => {
      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={jest.fn()} title="Modal With Children">
          <div>Children Content</div>
        </ModalMultiple>
      )

      expect(screen.getByText('Children Content')).toBeInTheDocument()
    })

    it('renders children for modalLoading type', () => {
      renderWithChakra(
        <ModalMultiple type="modalLoading" isOpen onClose={jest.fn()} title="Loading">
          <div>Loading Children</div>
        </ModalMultiple>
      )

      expect(screen.getByText('Loading')).toBeInTheDocument()
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                             RESPONSIVE BEHAVIOR                            */
  /* -------------------------------------------------------------------------- */

  describe('Responsive behavior', () => {
    it('applies desktop behavior', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
      useMediaQuery.mockReturnValue([true])

      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={jest.fn()} title="Desktop Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('applies mobile behavior', () => {
      const useMediaQuery = jest.requireMock('@chakra-ui/react').useMediaQuery
      useMediaQuery.mockReturnValue([false])

      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={jest.fn()} title="Mobile Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })
})
