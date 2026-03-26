import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { EventsList } from './EventsList'

const renderComponent = (onClick?: () => void) =>
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
      />
    </ChakraProvider>
  )

describe('EventsList', () => {
  it('calls onClick when the item is clicked', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    renderComponent(onClick)

    const eventItem = screen.getByText('Evento demo').closest('.eventsList')

    expect(eventItem).not.toBeNull()

    await user.click(eventItem!)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders the item when onClick is not provided', () => {
    renderComponent()

    expect(screen.getByText('Evento demo')).toBeInTheDocument()
  })
})
