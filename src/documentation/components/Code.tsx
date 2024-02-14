import { Box } from '@chakra-ui/react'
import { CopyBlock, dracula } from 'react-code-blocks'

// Se cambia atomOneDark por dracula, debido a que no detecta funciones en objetos
interface ICode {
  text: string
  language?: string
}
export const Code = ({ text, language = 'jsx' }: ICode): JSX.Element => {
  return (
    <Box m="1rem 0">
      <CopyBlock
        language={language}
        text={text}
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
    </Box>
  )
}
