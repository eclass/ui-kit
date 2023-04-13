import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NewTooltip } from './NewTooltip'

describe('Tooltip', () => {
  test('default', async () => {
    render(
      <NewTooltip label="Visible Tooltip">
        <span data-testid="trigger">Tooltip Test</span>
      </NewTooltip>
    )

    userEvent.hover(screen.getByTestId('trigger'))

    await waitFor(() => {
      expect(screen.getByText('Visible Tooltip')).toBeVisible()
    })
  })
})
