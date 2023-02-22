import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TooltipLabel } from './Tooltip'

describe('Tooltip', () => {
  test('default', async () => {
    render(
      <TooltipLabel label="Visible Tooltip">
        <span data-testid="trigger">Tooltip Test</span>
      </TooltipLabel>
    )

    userEvent.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByText('Visible Tooltip')).toBeVisible()
    })
  })
})
