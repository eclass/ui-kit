import {
  Box,
  keyframes,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  LinkOverlayProps,
} from '@chakra-ui/react'
import { useState } from 'react'

import { vars } from '@theme'
import { PathHeader } from '../components/LearningPath/PathHeader'
import { PathProgress } from '../components/LearningPath/PathProgress'
import { PathCourseLink } from '../components/LearningPath/PathCourseLink'
import { IBoxLearningPath } from '../types'

const StyledLinkBox = LinkBox as React.FC<LinkBoxProps>
const StyledLinkOverlay = LinkOverlay as React.FC<LinkOverlayProps>

// Desplazamiento de las tarjetas apiladas al bajar y al subir (atrás y adelante)
const BACK_PEEK = 8
const FRONT_PEEK = 4

/**
 * Subida de las tarjetas apiladas al hacer hover: bajan `peek` px y suben hasta
 * `peek` px por sobre su posición inicial. Con `both`, la tarjeta de atrás espera su
 * retraso en la posición inicial y al terminar ambas se quedan arriba.
 */
const stackBounce = (peek: number): string => keyframes`
  0% { transform: translateY(0); }
  40% { transform: translateY(${peek}px); }
  100% { transform: translateY(-${peek}px); }
`

/** Bajada de las tarjetas apiladas a su posición inicial al salir el cursor */
const stackDrop = (peek: number): string => keyframes`
  from { transform: translateY(-${peek}px); }
  to { transform: translateY(0); }
`

const stackAnimations = {
  back: {
    rise: `${stackBounce(BACK_PEEK)} 680ms ease-in-out 90ms both`,
    drop: `${stackDrop(BACK_PEEK)} 300ms ease-in-out both`,
  },
  front: {
    rise: `${stackBounce(FRONT_PEEK)} 680ms ease-in-out both`,
    drop: `${stackDrop(FRONT_PEEK)} 300ms ease-in-out both`,
  },
}

/**
 * Fases de las tarjetas apiladas:
 * - `rest`: en su posición inicial (sin animación).
 * - `rising`: animación de subida en curso; siempre se completa, aunque el cursor salga.
 * - `raised`: subida terminada y el cursor sigue en la caja; se quedan arriba.
 * - `dropping`: bajando o ya abajo tras salir el cursor.
 */
type StackPhase = 'rest' | 'rising' | 'raised' | 'dropping'

/** Animación CSS de una tarjeta apilada según la fase */
const stackAnimation = (
  phase: StackPhase,
  animations: { rise: string; drop: string }
): string | undefined => {
  if (phase === 'rising' || phase === 'raised') return animations.rise
  if (phase === 'dropping') return animations.drop
  return undefined
}

export const BoxLearningPath = ({
  headerImage,
  title,
  coursesCount,
  progress = 0,
  start,
  buttonLabel = 'Ver ruta de aprendizaje',
  pathHref,
  hasFinished = false,
}: IBoxLearningPath): JSX.Element => {
  const safeProgress = Math.min(100, Math.max(0, progress))
  const [isHovered, setIsHovered] = useState(false)
  const [stackPhase, setStackPhase] = useState<StackPhase>('rest')

  return (
    <Box
      as="article"
      position="relative"
      w="100%"
      pt="10px"
      onMouseEnter={() => {
        setIsHovered(true)
        if (stackPhase === 'rest' || stackPhase === 'dropping') setStackPhase('rising')
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        // Si la subida sigue en curso, la bajada parte en onAnimationEnd
        if (stackPhase === 'raised') setStackPhase('dropping')
      }}
    >
      {/* Efecto de tarjetas apiladas detrás; rebotan al pasar el mouse por la caja */}
      <Box
        aria-hidden="true"
        position="absolute"
        top="-3px"
        left="24px"
        right="24px"
        h="28px"
        w="calc(100% - 48px)"
        border={`1px solid ${vars('colors-neutral-silverSand')}`}
        borderBottom="none"
        borderTopRadius={vars('radii-big')}
        bg={vars('colors-neutral-cultured2')}
        animation={stackAnimation(stackPhase, stackAnimations.back)}
        onAnimationEnd={() => {
          if (stackPhase === 'rising') setStackPhase(isHovered ? 'raised' : 'dropping')
        }}
      />
      <Box
        aria-hidden="true"
        position="absolute"
        top="4px"
        left="12px"
        right="12px"
        h="18px"
        w="calc(100% - 24px)"
        border={`1px solid ${vars('colors-neutral-silverSand')}`}
        borderBottom="none"
        borderTopRadius={vars('radii-big')}
        bg={vars('colors-neutral-cultured2')}
        animation={stackAnimation(stackPhase, stackAnimations.front)}
      />

      {/* position relative: la caja queda por encima de las tarjetas cuando bajan */}
      <StyledLinkBox
        position="relative"
        display="flex"
        flexDir="column"
        border={`1px solid ${vars('colors-neutral-platinum')}`}
        borderRadius={vars('radii-big')}
        h="100%"
        overflow="hidden"
        _hover={{
          boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
          cursor: 'pointer',
        }}
      >
        {/* Header */}
        <PathHeader headerImage={headerImage} title={title} coursesCount={coursesCount} />

        {/* Progreso */}
        <PathProgress progress={safeProgress} />

        {/* Comenzar/Continuar con */}
        <PathCourseLink
          title="Comenzar con:"
          start={start}
          progress={safeProgress}
          finished={hasFinished}
        />

        {/* Botón para ver ruta */}
        <StyledLinkOverlay
          href={pathHref}
          w="100%"
          h="53px"
          minH="53px"
          alignContent="center"
          textAlign="center"
          bg={vars('colors-neutral-white')}
          borderRadius="0"
          borderTop={vars('borders-light')}
          fontSize="16px"
          fontWeight="500"
          color={vars('colors-icon-deepSkyBlue')}
          _hover={{
            bg: 'none',
          }}
          _focusVisible={{
            boxShadow: `0 0 0 3px ${vars('colors-alert-deepSkyBlue')} inset`,
          }}
        >
          {buttonLabel}
        </StyledLinkOverlay>
      </StyledLinkBox>
    </Box>
  )
}
