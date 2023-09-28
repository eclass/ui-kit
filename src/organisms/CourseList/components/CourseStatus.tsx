import { Flex, Text } from '@chakra-ui/react'
import { type ProgressCourse, type StatusCourse } from '@eclass/api'

import { Label } from '@/atoms'
import { vars } from '@/theme'
import { IconSelection } from './IconSelection'

const ID_QUALIFIED = 7

interface props {
  /** import { ProgressCourse } from '@eclass/api' */
  progress: ProgressCourse
  /** import { StatusCourse } from '@eclass/api' */
  status?: StatusCourse
}

/**
 * Devuelve estado en el que se encuentra el curso, por ejemplo:
 *
 * avance, inicio, curso aprovado, reprovado, finalizado
 */
export function CourseStatus({ progress, status }: props): JSX.Element {
  return (
    <>
      <Flex>
        <IconSelection type={progress.icon} progressValue={progress.progress} />
        <Text m="0" ml=".625rem" fontSize=".875rem" lineHeight="1.125rem">
          {progress?.label}
        </Text>
      </Flex>
      {status?.id === ID_QUALIFIED && progress?.finalGrade && progress?.finalGrade.length > 0 && (
        <Label
          size="sm"
          bg={progress.isApproved ? vars('colors-alert-jadeGreen') : vars('colors-alert-red')}
          color={vars('colors-neutral-white')}
        >
          {progress?.finalGrade}
        </Label>
      )}
    </>
  )
}
