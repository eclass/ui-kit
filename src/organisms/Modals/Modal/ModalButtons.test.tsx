import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider, Modal as ChakraModal } from '@chakra-ui/react'

import { ModalButtons } from './ModalButtons'

const renderWithChakra = (ui: React.ReactElement): any => {
  return render(
    <ChakraProvider>
      <ChakraModal isOpen onClose={() => {}}>
        {ui}
      </ChakraModal>
    </ChakraProvider>
  )
}

describe('ModalButtons Component', () => {
  it('renders nothing when no buttons are provided', () => {
    const { container } = renderWithChakra(
      <ModalButtons
        buttons={[]}
        buttonsCenter={false}
        buttonsColumn={false}
        isDesktop
        px="0"
        py="0"
      />
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a primary button and calls its action on click', async () => {
    const actionMock = jest.fn()
    renderWithChakra(
      <ModalButtons
        buttons={[{ text: 'Primary Button', action: actionMock, type: 'primary' }]}
        buttonsCenter={false}
        buttonsColumn={false}
        isDesktop
        px="0"
        py="0"
      />
    )
    const button = screen.getByText('Primary Button')
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(actionMock).toHaveBeenCalledTimes(1)
  })

  it('renders a secondary button and calls its action on click', async () => {
    const actionMock = jest.fn()
    renderWithChakra(
      <ModalButtons
        buttons={[{ text: 'Secondary Button', action: actionMock, type: 'secondary' }]}
        buttonsCenter={false}
        buttonsColumn={false}
        isDesktop
        px="0"
        py="0"
      />
    )
    const button = screen.getByText('Secondary Button')
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(actionMock).toHaveBeenCalledTimes(1)
  })

  it('renders mixed buttons correctly', () => {
    const primaryActionMock = jest.fn()
    const secondaryActionMock = jest.fn()
    renderWithChakra(
      <ModalButtons
        buttons={[
          { text: 'Primary', action: primaryActionMock, type: 'primary' },
          { text: 'Secondary', action: secondaryActionMock, type: 'secondary' },
        ]}
        buttonsCenter={false}
        buttonsColumn={false}
        isDesktop
        px="0"
        py="0"
      />
    )
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toBeInTheDocument()
  })
})
