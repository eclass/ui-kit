import { Box, LinkOverlay } from '@chakra-ui/react'

import { vars } from '@theme'
import { Ripples } from '@atoms'
import * as Type from '../types'
import { isCourseActive } from '../utils'

interface ImageBoxProps {
  backgroundImg: string
  title: string
  data?: Type.ExtendAcademicList
  size?: 'large' | 'small'
  m?: string
}

// Componente que agrega efecto al hacer click
interface WithRipplesProps {
  enabled: boolean
  children: React.ReactChild
}
function WithRipples({ enabled, children }: WithRipplesProps): JSX.Element {
  return enabled ? <Ripples>{children}</Ripples> : <>{children}</>
}

export function BoxImage({
  backgroundImg,
  title,
  data,
  size = 'large',
  m,
}: ImageBoxProps): JSX.Element {
  const boxHeight = {
    large: '286px',
    small: '197px',
  }
  return (
    <WithRipples enabled={isCourseActive(data?.action?.enabled ?? false, data?.Profile?.id)}>
      <Box
        className="CourseList-ImageBox"
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${backgroundImg})`,
          color: vars('colors-neutral-white'),
          cursor: 'pointer',
          height: boxHeight[size], // Customize the height based on the type prop
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          padding: '16px',
          display: 'flex',
          font: 'Roboto',
          flexDirection: 'column',
          margin: m,
          justifyContent: 'end',
          textAlign: 'left',
        }}
      >
        {!data?.hasFinanzeFreezed &&
          isCourseActive(data?.action?.enabled ?? false, data?.Profile?.id) && (
            <LinkOverlay href={data?.action?.href} isExternal={data?.action?.targetBlank} />
          )}
        <Box className="textBox" bottom="20px" display="flex" flexDirection="column" gap="8px">
          <Box
            as="h2"
            className="courseName"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            marginBlockEnd="0"
            margin="0"
          >
            {title}
          </Box>

          {data?.information?.map(
            (item, index) =>
              item.icon === 'certificate' && (
                <Box
                  as="p"
                  className="certificateText"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="12px"
                  margin="0"
                  key={index}
                >
                  {item.text}
                </Box>
              )
          )}
        </Box>
      </Box>
    </WithRipples>
  )
}

BoxImage.displayName = 'BoxImage'
