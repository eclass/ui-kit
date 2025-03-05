import { FC } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import { Icons } from './Icons'
import { vars } from 'theme'
import { Download, DiagonalArrow } from 'atoms/Icons'
import { Ripples } from 'atoms'
import { StandardBackground } from './StandardBackground'

interface ResourcesProps {
  id: string | number
  resourceType: string
  resourceTitle: string
  resourceDetail: string
  resourceTextDownload: string
  resourceLink: string
  targetBlank?: boolean
}

export const Resources: FC<ResourcesProps> = ({
  id,
  resourceType,
  resourceTitle,
  resourceDetail,
  resourceTextDownload,
  resourceLink,
  targetBlank,
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }

  const colorFill = (): string => {
    const colorMap: { [key: string]: string } = {
      jpeg: '#FFBC27',
      jpg: '#FFBC27',
      png: '#FFBC27',
      gif: '#FFBC27',
      ppt: '#FF7A14',
      pptx: '#FF7A14',
      doc: '#0189FF',
      docx: '#0189FF',
      csv: '#28A745',
      xls: '#28A745',
      xlsx: '#28A745',
      pdf: '#CC0000',
      mp4: '#56CCF2',
      avi: '#56CCF2',
      mkv: '#56CCF2',
      mp3: '#9B51E0',
      wav: '#9B51E0',
      url: '#1E2DFF',
    }

    return colorMap[resourceType as keyof typeof colorMap] || '#FFBC27'
  }
  return (
    <Link
      href={resourceLink}
      target={targetBlank ? '_blank' : '_self'}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      transition="box-shadow 0.3s"
      _active={cssActive}
      _hover={cssActive}
      _focus={cssActive}
      cursor="pointer"
      borderRadius={vars('radii-big')}
      border={vars('borders-light')}
      overflow="hidden"
    >
      <Ripples>
        <Box
          width="285px"
          height="139px"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          display="grid"
          padding="1rem"
        >
          <Icons type={resourceType} />
          <Box
            position="absolute"
            width="100%"
            height="100%"
            zIndex="-1"
            top="0px"
            left="0px"
            opacity="0.8"
          >
            <StandardBackground colorFill={colorFill()} />
          </Box>
        </Box>
        <Box
          width="285px"
          height="auto"
          justifyContent="center"
          textAlign="center"
          display="grid"
          gap="8px"
          padding="1rem"
        >
          <Box>
            <Text
              fontFamily="Roboto"
              fontWeight="700"
              lineHeight="21px"
              fontSize="16px"
              color="#555555"
              m="0px"
            >
              {resourceTitle}
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily="Roboto"
              fontWeight="400"
              lineHeight="14px"
              fontSize="12px"
              color="#555555"
              m="0px"
            >
              {resourceDetail}
            </Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text
              fontFamily="Roboto"
              fontWeight="500"
              fontSize="14px"
              lineHeight="16px"
              color={vars('colors-neutral-gray')}
              textDecoration="underline"
              gap="8px"
              display="flex"
              m="0px"
            >
              {resourceType === 'url' ? (
                <DiagonalArrow color={vars('colors-main-deepSkyBlue')} />
              ) : (
                <Download color={vars('colors-main-deepSkyBlue')} />
              )}
              {resourceTextDownload}
            </Text>
          </Box>
        </Box>
      </Ripples>
    </Link>
  )
}
