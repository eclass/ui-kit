import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentProps } from 'react'

import { EventsList } from './EventsList'

const renderComponent = (
  onClick?: () => void,
  props?: Partial<ComponentProps<typeof EventsList>>
): RenderResult =>
  render(
    <ChakraProvider>
      <EventsList
        color="#00857A"
        courseName="Curso demo"
        day="viernes"
        date="30 jun"
        name="Evento demo"
        onClick={onClick}
        showCourse
        text="Curso"
        time="19:00 hrs."
        type="in-person"
        {...props}
      />
    </ChakraProvider>
  )

describe('EventsList', () => {
  it('does not call onClick when the item is clicked even with url', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    renderComponent(onClick, { url: '/demo' })

    await user.click(screen.getByText('Evento demo'))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when url is not provided', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    renderComponent(onClick)

    await user.click(screen.getByText('Evento demo'))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders the item when onClick is not provided', () => {
    renderComponent()

    expect(screen.getByText('Evento demo')).toBeInTheDocument()
  })

  it('renders unavailable label and does not call onClick when url is empty', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    renderComponent(onClick, { url: '' })

    expect(screen.getByText('Aún no disponible')).toBeInTheDocument()

    await user.click(screen.getByText('Evento demo'))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders duration for online or in-person events with positive minutes', () => {
    const { container } = renderComponent(undefined, { duration: 40 })

    expect(screen.getByText('Link clase online')).toBeInTheDocument()
    expect(container).toHaveTextContent(/40\s*min/)
  })

  it('renders headquarters address instead of online class link for cpr events', () => {
    const { container } = renderComponent(undefined, {
      duration: 40,
      headquartersAddress: 'Sede Apoquindo',
      type: 'cpr',
    })

    expect(screen.getByText('Sede Apoquindo')).toBeInTheDocument()
    expect(screen.queryByText('Link clase online')).not.toBeInTheDocument()
    expect(container).toHaveTextContent(/40\s*min/)
  })

  it('does not render location text when cpr event has no headquarters address', () => {
    const { container } = renderComponent(undefined, {
      duration: 40,
      headquartersAddress: null,
      type: 'cpr',
    })

    expect(screen.queryByText('Link clase online')).not.toBeInTheDocument()
    expect(container).toHaveTextContent(/40\s*min/)
  })

  it('does not render duration when minutes are zero', () => {
    renderComponent(undefined, { duration: 0 })

    expect(screen.queryByText('Duración:')).not.toBeInTheDocument()
  })

  it('does not render course text for cv-events', () => {
    renderComponent(undefined, { type: 'cv-events' })

    expect(screen.queryByText('Curso:')).not.toBeInTheDocument()
    expect(screen.getByText('Curso demo')).toBeInTheDocument()
  })
})
