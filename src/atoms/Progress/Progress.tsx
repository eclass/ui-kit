import { CircularProgress } from '@chakra-ui/react'

import { vars } from '@theme'

interface ProgressProps {
  value: number
}
/**
 * Componente Progress circular, valores permitidos entre 0 - 100
 * @example <Progress value={35} />
 */
export function Progress({ value = 0 }: ProgressProps): JSX.Element {
  let limitedValue = value
  if (value > 100) {
    limitedValue = 100
  } else if (value < 0) {
    limitedValue = 0
  }
  return (
    <CircularProgress
      size="1rem"
      value={limitedValue}
      thickness="1rem"
      color={vars('colors-main-deepSkyBlue')}
      trackColor={vars('colors-neutral-platinum')}
    />
  )
}

Progress.displayName = 'Progress'
