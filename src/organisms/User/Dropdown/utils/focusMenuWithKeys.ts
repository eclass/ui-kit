export function focusMenuWithKeys(
  event: React.KeyboardEvent<HTMLElement>,
  menuListRef: React.RefObject<HTMLElement>
): void {
  if (!menuListRef.current) return

  const focusableItems = Array.from(
    menuListRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])')
  )

  if (!focusableItems.length) return

  const currentIndex = focusableItems.findIndex((item) => item === document.activeElement)
  const firstIndex = 0
  const lastIndex = focusableItems.length - 1

  let nextIndex = -1

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    nextIndex = currentIndex === -1 ? firstIndex : (currentIndex + 1) % focusableItems.length
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    nextIndex =
      currentIndex === -1
        ? lastIndex
        : (currentIndex - 1 + focusableItems.length) % focusableItems.length
  }

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (currentIndex > firstIndex) {
        event.preventDefault()
        nextIndex = currentIndex - 1
      }
    } else {
      if (currentIndex < lastIndex) {
        event.preventDefault()
        nextIndex = currentIndex + 1
      }
    }
  }

  if (nextIndex >= 0) {
    focusableItems[nextIndex].focus()
  }
}
