/* eslint-disable */
import { useEffect } from 'react'

export function useEnterNavigate(): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Enter') {
        const active = document.activeElement as HTMLElement | null
        const role = active?.getAttribute('role')
        const href = active?.getAttribute('data-href')

        const isFocusableLink =
          active?.classList?.contains('chakra-linkbox') ||
          active?.classList?.contains('focusable-link')

        if (role === 'link' && href != null && isFocusableLink) {
          window.location.href = href
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}
