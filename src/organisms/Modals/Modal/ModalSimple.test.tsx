import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalSimple } from './ModalSimple'

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    ...originalModule,
    useMediaQuery: jest.fn(() => [false]),
  }
})

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

describe('ModalSimple Component', () => {
  it('renders children content', () => {
    renderWithChakra(
      <ModalSimple isOpen onClose={jest.fn()}>
        <div>Simple content</div>
      </ModalSimple>
    )

    expect(screen.getByText('Simple content')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onCloseMock = jest.fn()

    renderWithChakra(
      <ModalSimple isOpen onClose={onCloseMock}>
        <div>Simple content</div>
      </ModalSimple>
    )

    await user.click(screen.getByLabelText('Close'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when Escape key is pressed and closeOnEsc is false', async () => {
    const user = userEvent.setup()
    const onCloseMock = jest.fn()

    renderWithChakra(
      <ModalSimple isOpen onClose={onCloseMock} closeOnEsc={false}>
        <div>Simple content</div>
      </ModalSimple>
    )

    await user.keyboard('{Escape}')
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  it('removes inner spacing when withoutMargin is true', () => {
    renderWithChakra(
      <ModalSimple isOpen onClose={jest.fn()} withoutMargin>
        <div>Simple content</div>
      </ModalSimple>
    )

    expect(screen.getByTestId('modal-simple-content')).toBeInTheDocument()
    expect(screen.getByText('Simple content')).toBeInTheDocument()
  })

  it('renders in compact mode on mobile when mobileCompact is true', () => {
    renderWithChakra(
      <ModalSimple isOpen onClose={jest.fn()} mobileCompact>
        <div>Simple content</div>
      </ModalSimple>
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Simple content')).toBeInTheDocument()
  })
})
