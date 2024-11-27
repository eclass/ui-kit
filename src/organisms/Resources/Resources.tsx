import { FC } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import { Icons } from './Icons'
import { vars } from '@/theme'
import { Download, DiagonalArrow } from '@/atoms/Icons'
import { Ripples } from '@/atoms'

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
          height="147px"
          justifyContent="center"
          textAlign="center"
          display="grid"
          gap="8px"
          padding="1rem"
        >
          <Box>
            <Icons type={resourceType} />
          </Box>
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
