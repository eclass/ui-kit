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

    // Bloqueamos el scroll del body mientras el menú esté abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const viewContainer = document.getElementById('ViewContainer')

    if (viewContainer) {
      // Caso v8: se usa el ID del contenedor principal
      viewContainer.style.display = isOpen ? 'none' : ''
      const footer = document.getElementById('Footer')

      if (footer) {
        footer.style.display = isOpen ? 'none' : ''
      }
    } else {
      // Caso CV: lógica de respaldo buscando elementos en .main
      const browse = document.querySelector<HTMLElement>('.browse')
      if (browse) {
        browse.style.display = isOpen ? 'none' : ''
      }

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

    // Cleanup: restaurar display y overflow cuando se cierra el menú o cambia el breakpoint
    return () => {
      document.body.style.overflow = ''
      const viewContainer = document.getElementById('ViewContainer')

      if (viewContainer) {
        viewContainer.style.display = ''
        const footer = document.getElementById('Footer')
        if (footer) {
          footer.style.display = ''
        }
      } else {
        const browse = document.querySelector<HTMLElement>('.browse')
        if (browse) {
          browse.style.display = ''
        }
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
