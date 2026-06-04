import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'

import { ModalCard } from './ModalCard'

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

describe('ModalCard Component', () => {
  it('renders children content', () => {
    renderWithChakra(
      <ModalCard isOpen onClose={jest.fn()}>
        <div>Card content</div>
      </ModalCard>
    )

    expect(screen.getByText('Card content')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('does not render a close button', () => {
    renderWithChakra(
      <ModalCard isOpen onClose={jest.fn()}>
        <div>Card content</div>
      </ModalCard>
    )

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })
})
