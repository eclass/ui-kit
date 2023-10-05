import { Box } from '@chakra-ui/react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'

interface ICode {
  text: string
  language?: string
}
export const Code = ({ text, language = 'jsx' }: ICode): JSX.Element => {
  const codeBlockProps = {
    theme: atomOneDark,
    text,
    language,
    codeBlock: true,
    showLineNumbers: false,
  }
  return (
    <Box m="1rem 0">
      <CopyBlock {...codeBlockProps} />
    </Box>
  )
}
