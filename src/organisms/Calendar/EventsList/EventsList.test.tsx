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
  it('calls onClick when the item is clicked', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    renderComponent(onClick)

    await user.click(screen.getByText('Evento demo'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders the item when onClick is not provided', () => {
    renderComponent()

    expect(screen.getByText('Evento demo')).toBeInTheDocument()
  })

  it('renders duration for online or in-person events with positive minutes', () => {
    const { container } = renderComponent(undefined, { duration: 40 })

    expect(screen.getByText('Link clase online')).toBeInTheDocument()
    expect(container).toHaveTextContent(/40\s*min/)
  })

  it('renders location for in-person-presencial events when locationSede is provided', () => {
    const { container } = renderComponent(undefined, {
      duration: 40,
      locationSede: 'Sede Santiago, sala 204',
      type: 'in-person-presencial',
    })

    expect(screen.getByText('Sede Santiago, sala 204')).toBeInTheDocument()
    expect(screen.queryByText('Link clase online')).not.toBeInTheDocument()
    expect(container).toHaveTextContent(/40\s*min/)
  })

  it('does not render an empty location label for in-person-presencial events without locationSede', () => {
    const { container } = renderComponent(undefined, {
      duration: 40,
      type: 'in-person-presencial',
    })

    expect(screen.queryByText('Link clase online')).not.toBeInTheDocument()
    expect(screen.queryByTitle('icon-mapIndicator')).not.toBeInTheDocument()
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
