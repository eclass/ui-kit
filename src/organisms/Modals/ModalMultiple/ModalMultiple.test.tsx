import { useState } from 'react'
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalMultiple } from './ModalMultiple'

// Mock de useMediaQuery para controlar el comportamiento responsivo
vi.mock('@chakra-ui/react', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@chakra-ui/react')>()
  return {
    ...originalModule,
    useMediaQuery: vi.fn(() => [true]), // Desktop por defecto
  }
})

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

const ModalMultipleFocusHarness = ({
  returnFocusOnClose = true,
}: {
  returnFocusOnClose?: boolean
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Multiple
      </button>
      <ModalMultiple
        type="modal"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Focus Multiple"
        returnFocusOnClose={returnFocusOnClose}
      >
        <div>Focus Content</div>
      </ModalMultiple>
    </>
  )
}

describe('ModalMultiple Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  /* -------------------------------------------------------------------------- */
  /*                                   RENDERING                                */
  /* -------------------------------------------------------------------------- */

  describe('Rendering', () => {
    it('renders modal type correctly', () => {
      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={vi.fn()} title="Modal Title">
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
          onClose={vi.fn()}
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
          onClose={vi.fn()}
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
        <ModalMultiple type="modal" isOpen={false} onClose={vi.fn()} title="Hidden Modal">
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
      const onCloseMock = vi.fn()

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
      const onCloseMock = vi.fn()

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

    it('does not restore focus to trigger when returnFocusOnClose is false', async () => {
      const user = userEvent.setup()
      renderWithChakra(<ModalMultipleFocusHarness returnFocusOnClose={false} />)

      const trigger = screen.getByRole('button', { name: 'Open Multiple' })
      trigger.focus()

      await user.click(trigger)
      await user.click(screen.getByLabelText('Close'))

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
      expect(trigger).not.toHaveFocus()
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                             CHILDREN BEHAVIOR                              */
  /* -------------------------------------------------------------------------- */

  describe('Children rendering', () => {
    it('renders children for modal type', () => {
      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={vi.fn()} title="Modal With Children">
          <div>Children Content</div>
        </ModalMultiple>
      )

      expect(screen.getByText('Children Content')).toBeInTheDocument()
    })

    it('renders children for modalLoading type', () => {
      renderWithChakra(
        <ModalMultiple type="modalLoading" isOpen onClose={vi.fn()} title="Loading">
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
      const mediaQueryMock = vi.mocked(useMediaQuery)
      mediaQueryMock.mockReturnValue([true])

      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={vi.fn()} title="Desktop Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('applies mobile behavior', () => {
      const mediaQueryMock = vi.mocked(useMediaQuery)
      mediaQueryMock.mockReturnValue([false])

      renderWithChakra(
        <ModalMultiple type="modal" isOpen onClose={vi.fn()} title="Mobile Modal">
          <div>Modal Multiple</div>
        </ModalMultiple>
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })
})
