import { Progress } from '@atoms'
import { Schedule, Certificate, CircularCheck, CircularInformation } from '@icons'

interface IconSelectionProps {
  type: string
  progressValue?: number
}

export function IconSelection({ type, progressValue = 0 }: IconSelectionProps): JSX.Element | null {
  switch (type) {
    case 'schedule':
      return <Schedule />
    case 'certificate':
      return <Certificate />
    case 'circularCheck':
      return <CircularCheck />
    case 'progress':
      return <Progress value={progressValue} />
    case 'circularInformation':
      return <CircularInformation />
    case 'info':
      return <CircularInformation />
    default:
      return null
  }
}
