import { Base, type BaseProps } from './Base'

export function AcademicRecord(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="16px" h="16px" viewBox="0 0 16 16" title="academicRecord">
      <path
        d="M14 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1V7C1 7.26522 1.10536 7.51957 1.29289 7.70711C1.48043 7.89464 1.73478 8 2 8H14C14.2652 8 14.5196 7.89464 14.7071 7.70711C14.8946 7.51957 15 7.26522 15 7V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0V0Z"
        fill="currentColor"
      />
      <path d="M15 10H1V12H15V10Z" fill="currentColor" />
      <path d="M15 14H1V16H15V14Z" fill="currentColor" />
    </Base>
  )
}

AcademicRecord.displayName = 'AcademicRecord'
