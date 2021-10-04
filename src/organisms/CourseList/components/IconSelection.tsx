import { Schedule, Certificate, CircularCheck, CircularInformation } from '../../../atoms/Icons'
import { Progress } from '../../../atoms'

import { icon } from '../dataFake'

interface IconSelectionProps {
  type: icon
  progressValue?: number
}

export function IconSelection({ type, progressValue = 0 }: IconSelectionProps): JSX.Element {
  const all = {
    schedule: <Schedule />,
    certificate: <Certificate />,
    circularCheck: <CircularCheck />,
    progress: <Progress value={progressValue} />,
    circularInformation: <CircularInformation />,
  }

  return all[type]
}
