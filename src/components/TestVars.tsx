import { chakra } from '@chakra-ui/react'

interface props {
  color?: string
}
export const TestVars = ({ color = 'main.veryLightBlue' }: props): JSX.Element => {
  return (
    <chakra.button px="3" py="2" bg="main.deepSkyBlue" rounded="md" color={color}>
      Click me
    </chakra.button>
  )
}
