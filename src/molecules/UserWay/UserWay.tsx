import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Accessibility } from '@/atoms/Icons/Accessibility'
import { vars } from '@theme'

declare global {
  interface Window {
    UserWay: {
      widgetOpen: () => void
    }
  }
}

interface IUserWay {
  color?: string
}

const waitForUserWay = async (): Promise<void> => {
  return await new Promise((resolve, reject) => {
    const checkUserWay = (): void => {
      if (window.UserWay) {
        resolve() // Resuelve cuando UserWay está disponible
      } else {
        requestAnimationFrame(checkUserWay) // Sigue esperando
      }
    }

    try {
      checkUserWay() // Inicia la verificación
    } catch (error) {
      reject(new Error('UserWay script failed to load'))
    }
  })
}

export function UserWay({ color = '#0189FF' }: IUserWay): JSX.Element {
  const [isUserWayReady, setIsUserWayReady] = useState(false)

  useEffect(() => {
    // Cargar el script de UserWay
    if (!document.getElementById('userway-script')) {
      const script = document.createElement('script')
      script.id = 'userway-script'
      script.src = 'https://cdn.userway.org/widget.js'
      script.async = true
      script.setAttribute('data-account', '06mvMZzmO4')
      script.setAttribute('data-color', color)
      script.setAttribute('data-trigger', 'customTrigger')
      document.body.appendChild(script)
    }

    // Esperar a que el script esté listo
    waitForUserWay()
      .then(() => {
        setIsUserWayReady(true)
        return undefined
      })
      .catch((error) => {
        console.error('Failed to load UserWay:', error)
      })
  }, [color])

  const handleButtonClick = (): void => {
    if (isUserWayReady && window?.UserWay?.widgetOpen) {
      window.UserWay.widgetOpen() // Abrir el menú
    } else {
      console.error('UserWay script not loaded yet.')
    }
  }

  return (
    <Box
      as="button"
      alignItems="center"
      bg={vars('colors-main-blueGrey')}
      borderRadius="100%"
      border="1px solid transparent"
      display="flex"
      height="30px"
      id="customTrigger"
      justifyContent="center"
      onClick={handleButtonClick}
      width="30px"
      _hover={{
        background: 'rgba(96, 121, 142, 0.8)',
      }}
    >
      <Accessibility />
    </Box>
  )
}
