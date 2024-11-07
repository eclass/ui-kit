import { Box } from '@chakra-ui/react'

import { Accessibility } from '@/atoms/Icons/Accessibility'
import { vars } from '@theme'

export function UserWay(): JSX.Element {
  const triggerWidget = (): void => {
    const buttonB = document.getElementById('userWayTrigger')
    if (buttonB?.click) {
      buttonB.click() // Hace clic en el botón del archivo index.html
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
      id="UserWayButton"
      justifyContent="center"
      padding="0 8px"
      width="30px"
      _hover={{
        background: 'rgba(96, 121, 142, 0.8)',
      }}
      onClick={triggerWidget}
    >
      <Accessibility />
    </Box>
  )
}
