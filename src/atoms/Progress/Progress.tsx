import { CircularProgress } from '@chakra-ui/react'

import { vars } from '../../'

interface ProgressProps {
  value: number
}
export function Progress({ value = 0 }: ProgressProps): JSX.Element {
  return (
    <CircularProgress
      size="1rem"
      value={value}
      thickness="1rem"
      color={vars('colors-main-deepSkyBlue')}
      trackColor={vars('colors-neutral-platinum')}
    />
  )
}

Progress.displayName = 'Progress'
