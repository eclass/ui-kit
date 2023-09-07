import { Box } from '@chakra-ui/react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'

interface ICode {
  text: string
  language?: string
}
export const Code = ({ text, language = 'jsx' }: ICode): JSX.Element => {
  return (
    <Box m="1rem 0">
      <CopyBlock
        theme={atomOneDark}
        // @ts-expect-error
        text={text}
        language={language}
        codeBlock
        showLineNumbers={false}
      />
    </Box>
  )
}
