import { useEffect } from 'react'

export function useTooltipToggleDelay(
  isMenuOpen: boolean,
  setTooltipDisabled: (disabled: boolean) => void,
  delay = 300
): void {
  useEffect(() => {
    if (isMenuOpen) {
      setTooltipDisabled(true)
    } else {
      const timer = setTimeout(() => setTooltipDisabled(false), delay)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen, setTooltipDisabled, delay])
}
