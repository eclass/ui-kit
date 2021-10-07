import { CircularProgress } from '@chakra-ui/react'

import { vars } from '../../'

export function Progress({ value = 0 }: any): JSX.Element {
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
