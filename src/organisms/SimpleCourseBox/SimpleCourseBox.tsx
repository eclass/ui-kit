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
  Text,
  TextProps,
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowRight } from '@/atoms/Icons'

import { IconSelection } from '../CourseList/components/IconSelection'
import { vars } from '@theme'
import { TinyAlert } from '@/atoms'

interface SimpleCourseBoxProps {
  alert?: {
    status: 'success' | 'error' | 'info' | 'warning' | 'answered' | 'pending' | 'omitted' | 'new'
    text: string
  }
  courseName: string
  finishDate?: string
  grade?: string
  href?: string
  img: string
  icon?: string
  isApproved?: boolean
  isEnabled?: boolean
  label?: string
  noBorder?: boolean
  p?: string
}

const StyledFlex = Flex as React.FC<FlexProps>
const StyledText = Text as React.FC<TextProps>
const StyledImage = Image as React.FC<ImageProps>
const StyledLinkBox = LinkBox as React.FC<LinkBoxProps>
const StyledLinkOverlay = LinkOverlay as React.FC<LinkOverlayProps>

// Componente que renderiza información básica de un curso en formato horizontal
// Creado para listar prerrequerimientos de cursos dentro de un modal

export const SimpleCourseBox = ({
  alert,
  courseName,
  finishDate,
  grade,
  href,
  img,
  icon,
  isApproved,
  label,
  isEnabled = true,
  noBorder = false,
  p = '16px 24px',
}: SimpleCourseBoxProps): JSX.Element => {
  const link = !isEnabled || !href || href === '' ? undefined : href
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const defaultPadding = isDesktop ? '16px 24px' : '16px'

  return (
    <StyledLinkBox
      p={p ?? defaultPadding}
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
          <StyledImage src={img} w="150px" h="74px" borderRadius="10px" objectFit="cover" />
          <StyledFlex flexDirection="column" gap="8px" justifyContent="center">
            {alert && <TinyAlert status={alert.status} text={alert.text} />}
            {finishDate && (
              <StyledText fontSize="12px" lineHeight="100%" m="0">
                {finishDate}
              </StyledText>
            )}
            <StyledText as="strong" lineHeight="21px" m="0">
              {courseName}
            </StyledText>

            {icon && label && (
              <Box
                m="0"
                fontSize="14px"
                lineHeight="19px"
                display="flex"
                gap="10px"
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
