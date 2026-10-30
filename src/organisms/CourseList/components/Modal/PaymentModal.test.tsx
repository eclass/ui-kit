import { ChakraProvider, Modal } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PaymentModal } from './PaymentModal'

const modalPaymentText = {
  title: 'Curso congelado por pagos pendientes',
  body: 'Para regularizar esta situación, comunícate con tu ejecutivo',
  buttonName: 'Entendido',
}

const renderPaymentModal = (props: { isOpen?: boolean; onClose?: () => void } = {}): void => {
  render(
    <ChakraProvider>
      <PaymentModal
        isOpen={props.isOpen ?? true}
        onOpen={vi.fn()}
        onClose={props.onClose ?? vi.fn()}
        showOverlay
        modalPaymentText={modalPaymentText}
      />
    </ChakraProvider>
  )
}

describe('PaymentModal', () => {
  const user = userEvent.setup()

  test('abierto muestra el título, el cuerpo y el botón de modalPaymentText', () => {
    renderPaymentModal()

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveTextContent(modalPaymentText.title)
    expect(screen.getByText(modalPaymentText.body)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: modalPaymentText.buttonName })).toBeInTheDocument()
  })

  test('cerrado no renderiza el modal', () => {
    renderPaymentModal({ isOpen: false })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('el botón principal llama a onClose', async () => {
    const onClose = vi.fn()
    renderPaymentModal({ onClose })

    await user.click(screen.getByRole('button', { name: modalPaymentText.buttonName }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('la X llama a onClose', async () => {
    const onClose = vi.fn()
    renderPaymentModal({ onClose })

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Escape llama a onClose', async () => {
    const onClose = vi.fn()
    renderPaymentModal({ onClose })

    await user.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('tiene su propio displayName y no toca el del Modal de Chakra', () => {
    expect(PaymentModal.displayName).toBe('PaymentModal')
    expect(Modal.displayName).toBe('Modal')
  })
})
