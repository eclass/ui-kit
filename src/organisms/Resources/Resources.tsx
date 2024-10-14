import { FC } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import { Icons } from './Icons'
import { vars } from '@/theme'
import { Download } from '@/atoms/Icons'

interface ResourcesProps {
  id: string | number
  resourceType: string
  resourceTitle: string
  resourceDetail: string
  resourceTextDownload: string
  resourceLink: string
  resourceNameFile: string
}

export const Resources: FC<ResourcesProps> = ({
  id,
  resourceType,
  resourceTitle,
  resourceDetail,
  resourceTextDownload,
  resourceLink,
  resourceNameFile,
}) => {
  return (
    <Box
      width="285px"
      height="147px"
      borderRadius="8px"
      border="1px"
      borderColor={vars('colors-neutral-platinum')}
      justifyContent="center"
      textAlign="center"
      display="grid"
      gap="8px"
      padding={4}
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
        >
          {resourceDetail}
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link
          href={resourceLink}
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="14px"
          lineHeight="16px"
          color={vars('colors-neutral-gray')}
          download={resourceNameFile}
          textDecoration="underline"
          gap="8px"
          display="flex"
        >
          <Download color={vars('colors-main-deepSkyBlue')} />
          {resourceTextDownload}
        </Link>
      </Box>
    </Box>
  )
}
