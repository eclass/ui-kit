import {
  Box,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  LinkOverlayProps,
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowRight } from '@/atoms/Icons'

import { IconSelection } from '../CourseList/components/IconSelection'
import { vars } from '@theme'

interface SimpleCourseBoxProps {
  courseName: string
  grade?: string
  href?: string
  img: string
  icon?: string
  isApproved?: boolean
  label?: string
  isEnabled?: boolean
  noBorder?: boolean
}

const StyledFlex = Flex as React.FC<FlexProps>
const StyledImage = Image as React.FC<ImageProps>
const StyledLinkBox = LinkBox as React.FC<LinkBoxProps>
const StyledLinkOverlay = LinkOverlay as React.FC<LinkOverlayProps>

// Componente que renderiza información básica de un curso en formato horizontal
// Creado para listar prerrequerimientos de cursos dentro de un modal

export const SimpleCourseBox = ({
  courseName,
  grade,
  href,
  img,
  icon,
  isApproved,
  label,
  isEnabled = true,
  noBorder = false,
}: SimpleCourseBoxProps): JSX.Element => {
  const link = !isEnabled || !href || href === '' ? undefined : href
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <StyledLinkBox
      p={isDesktop ? '16px 24px' : '16px'}
      borderBottom={noBorder ? 'none' : `1px solid ${vars('colors-neutral-platinum')}`}
      _hover={{
        backgroundColor: link ? vars('colors-neutral-cultured2') : 'none',
        cursor: link ? 'pointer' : 'default',
      }}
      sx={{
        a: {
          textDecoration: 'none',
          color: vars('colors-neutral-darkCharcoal'),
        },
      }}
    >
      <StyledLinkOverlay
        href={link}
        display="flex"
        gap="24px"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledFlex
          gap={isDesktop ? '24px' : '16px'}
          alignItems={isDesktop ? 'center' : 'flex-start'}
          flexDir={isDesktop ? 'row' : 'column'}
        >
          <StyledImage src={img} w="150px" h="74px" borderRadius="10px" />
          <StyledFlex flexDirection="column" gap="8px" justifyContent="center">
            <strong>{courseName}</strong>

            {icon && label && (
              <Box
                m="0"
                fontSize="14px"
                lineHeight="19px"
                display="flex"
                gap="10px"
                maxW="395px"
                sx={{
                  svg: {
                    verticalAlign: 'top',
                  },
                }}
              >
                <IconSelection type={icon} />
                <p>{label}</p>
                {grade && (
                  <Box
                    h="17px"
                    w="34px"
                    fontSize="12px"
                    fontWeight="700"
                    textAlign="center"
                    borderRadius="5px"
                    color={vars('colors-neutral-white')}
                    bg={isApproved ? vars('colors-alert-jadeGreen') : vars('colors-alert-red')}
                  >
                    {grade}
                  </Box>
                )}
              </Box>
            )}
          </StyledFlex>
        </StyledFlex>
        {isEnabled && link && (
          <Box>
            <ArrowRight color="#60798E" />
          </Box>
        )}
      </StyledLinkOverlay>
    </StyledLinkBox>
  )
}
