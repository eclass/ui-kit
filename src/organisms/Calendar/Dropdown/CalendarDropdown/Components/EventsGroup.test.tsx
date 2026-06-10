import { ChakraProvider, Menu, MenuList } from '@chakra-ui/react'
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Event } from '../../types'
import { EventsGroup } from './EventsGroup'

const baseEvent: Event = {
  id: 1,
  associated_resource: {
    id: 1,
    name: 'Evaluación 2',
  },
  course: {
    id: 1,
    name: 'Economía',
  },
  course_id: 1,
  end: '2026-07-27T03:59:00.000Z',
  start: '2026-07-27T02:59:00.000Z',
  formatedDate: {
    day: 'viernes',
    date: '26 julio',
    time: '23:59 hrs.',
  },
  translatedTitle: 'Se habilita para responder “Evaluación 2”',
  type: 'evaluation-release',
  url: null,
}

const renderComponent = (event: Event, onClickEvent = jest.fn()): RenderResult =>
  render(
    <ChakraProvider>
      <Menu isOpen>
        <MenuList>
          <EventsGroup events={[event]} onClickEvent={onClickEvent} text="Curso" title="Próximos" />
        </MenuList>
      </Menu>
    </ChakraProvider>
  )

describe('EventsGroup', () => {
  it('renders unavailable event label and does not call onClickEvent when url is empty', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()

    renderComponent(baseEvent, onClickEvent)

    expect(screen.getByText('Aún no disponible')).toBeInTheDocument()

    await user.click(screen.getByText('Se habilita para responder “Evaluación 2”'))

    expect(onClickEvent).not.toHaveBeenCalled()
  })

  it('does not call onClickEvent when event has url', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()
    const event = { ...baseEvent, url: 'https://example.com/evaluation-2' }

    renderComponent(event, onClickEvent)

    await user.click(screen.getByText('Se habilita para responder “Evaluación 2”'))

    expect(onClickEvent).not.toHaveBeenCalled()
  })

  it('renders headquarters address for cpr events', () => {
    const event = {
      ...baseEvent,
      duration_in_minutes: 40,
      headquarters_address: 'Sede Apoquindo',
      type: 'cpr',
      url: 'https://example.com/cpr',
    }

    renderComponent(event)

    expect(screen.getByText('Sede Apoquindo')).toBeInTheDocument()
    expect(screen.queryByText('Link clase online')).not.toBeInTheDocument()
  })
})
