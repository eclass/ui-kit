import { useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

/**
 * Hook para ocultar el contenido de fondo cuando un menú está abierto en mobile.
 * Implementa la lógica específica de la v8 (ocultar #ViewContainer o .main)
 * con un breakpoint de 480px.
 *
 * @param isOpen - Estado de apertura del menú
 * @returns boolean - Indica si el dispositivo actual es considerado mobile (<= 480px)
 */
export const useHideBackgroundOnMobile = (isOpen: boolean): boolean => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  useEffect(() => {
    if (!isMobile) return

    const viewContainer = document.getElementById('ViewContainer')

    if (viewContainer) {
      // Caso v8: se usa el ID del contenedor principal
      viewContainer.style.display = isOpen ? 'none' : ''
    } else {
      // Caso CV: lógica de respaldo buscando elementos en .main
      const mainElement = document.querySelector('.main')
      if (!mainElement) return

      const firstChild = mainElement.firstElementChild
      if (!firstChild || !(firstChild instanceof HTMLElement)) return

      const headerElement = firstChild.querySelector('header.header')
      if (!headerElement) return

      const targetElement = headerElement.nextElementSibling
      if (!targetElement || !(targetElement instanceof HTMLElement)) return

      targetElement.style.display = isOpen ? 'none' : ''
    }

    // Cleanup: restaurar display cuando se cierra el menú o cambia el breakpoint
    return () => {
      const viewContainer = document.getElementById('ViewContainer')
      if (viewContainer) {
        viewContainer.style.display = ''
      } else {
        const mainElement = document.querySelector('.main')
        if (mainElement) {
          const firstChild = mainElement.firstElementChild
          if (firstChild instanceof HTMLElement) {
            const headerElement = firstChild.querySelector('header.header')
            if (headerElement) {
              const targetElement = headerElement.nextElementSibling
              if (targetElement instanceof HTMLElement) {
                targetElement.style.display = ''
              }
            }
          }
        }
      }
    }
  }, [isMobile, isOpen])

  return isMobile
}
