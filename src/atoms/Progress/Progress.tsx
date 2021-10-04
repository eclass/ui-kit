import { CircularProgress } from '@chakra-ui/react'

export function Progress({ value = 0 }: any): JSX.Element {
  return (
    <CircularProgress
      size="1rem"
      value={value}
      thickness="1rem"
      color="main.deepSkyBlue"
      trackColor="#E6E6E6"
    />
  )
}

Progress.displayName = 'Progress'
