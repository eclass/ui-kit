import { vars } from '@/theme'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const MyHeading: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
      <Divider m="2rem 0" />
    </>
  )
}

interface IMyTitle {
  divider?: boolean
}

export const MyTitle: FC<IMyTitle> = ({ children, divider = true }): JSX.Element => {
  return (
    <>
      {divider && <Divider m="3rem 0" />}
      <Heading as="h2" size="lg" mt="3rem">
        {children}
      </Heading>
    </>
  )
}

export const MyText: FC = ({ children }): JSX.Element => {
  return <Text>{children}</Text>
}

interface IMyLink {
  href: string
}
export const MyLink: FC<IMyLink> = ({ children, href }): JSX.Element => {
  return (
    <Box
      as="a"
      color={vars('colors-main-deepSkyBlue')}
      fontWeight="bold"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Box>
  )
}
