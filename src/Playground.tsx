import { Box, Heading } from '@chakra-ui/react'
import { BtnTertiary } from './molecules'

export function Playground(): JSX.Element {
  return (
    <Box p="5rem 1rem">
      <Heading as="h1" size="sm">
        eClass Design System Playground
      </Heading>

      <BtnTertiary
        iconCustom={
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
            <path
              fill="#28A745"
              fillRule="evenodd"
              d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8Zm3.6 0L7 11.4 12.4 6 11 4.6l-4 4-2-2L3.6 8Z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        ahead
      </BtnTertiary>
      <BtnTertiary iconStatus="ahead">ahead</BtnTertiary>
      <BtnTertiary iconStatus="answer">answer</BtnTertiary>
      <BtnTertiary iconStatus="back">back</BtnTertiary>
      <BtnTertiary iconStatus="edit">edit</BtnTertiary>
      <BtnTertiary iconStatus="delete">delete</BtnTertiary>
      <BtnTertiary iconStatus="more">more</BtnTertiary>
      <BtnTertiary iconStatus="password">password</BtnTertiary>
      <BtnTertiary iconStatus="multimedia">multimedia</BtnTertiary>
      <BtnTertiary iconStatus="record">record</BtnTertiary>
      <BtnTertiary iconStatus="download">download</BtnTertiary>
      <BtnTertiary iconStatus="noIcon">noIcon</BtnTertiary>
    </Box>
  )
}
