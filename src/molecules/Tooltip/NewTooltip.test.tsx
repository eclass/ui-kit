import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NewTooltip } from './NewTooltip'

describe('Tooltip', () => {
  const user = userEvent.setup()

  test('default', async () => {
    render(
      <NewTooltip label="Visible Tooltip">
        <span data-testid="trigger">Tooltip Test</span>
      </NewTooltip>,
    )

    await user.hover(screen.getByTestId('trigger'))

    expect(screen.getByText('Visible Tooltip')).toBeInTheDocument()
  })
})
