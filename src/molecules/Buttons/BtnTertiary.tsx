import { vars } from '@theme'
import { Button } from '@chakra-ui/react'
import {
  GoBack,
  Password,
  Pen,
  PlusSign,
  TextBubble,
  TrashCan,
  Multimedia,
  AcademicRecord,
} from '@/atoms/Icons'

export interface propsTertiaryBtn {
  iconStatus?: 'answer' | 'back' | 'edit' | 'delete' | 'more' | 'password' | 'multimedia' | 'record'
  children?: React.ReactNode
  rightIcon?: boolean
  withoutColor?: boolean
  m?: string
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  id?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function BtnTertiary({
  children,
  iconStatus = 'multimedia',
  rightIcon,
  withoutColor = false,
  m = '0',
  type = 'button',
  tabIndex,
  id,
  onClick,
}: propsTertiaryBtn): JSX.Element {
  const gray = vars('colors-neutral-gray')
  const blue = vars('colors-main-deepSkyBlue')
  const white = vars('colors-neutral-white')
  const colorIcon = withoutColor ? gray : blue

  const btnIcons = {
    answer: <TextBubble color={colorIcon} />,
    back: <GoBack color={colorIcon} />,
    edit: <Pen color={colorIcon} />,
    delete: <TrashCan color={colorIcon} />,
    more: <PlusSign color={colorIcon} />,
    password: <Password color={colorIcon} />,
    multimedia: <Multimedia color={colorIcon} />,
    record: <AcademicRecord color={colorIcon} />,
  }

  const icon = btnIcons[iconStatus] ?? btnIcons.multimedia
  const rIcon = rightIcon ? icon : undefined
  const lIcon = !rightIcon ? icon : undefined

  return (
    <Button
      id={id}
      type={type}
      tabIndex={tabIndex}
      height="24px"
      background="transparent"
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize="14px"
      lineHeight="16px"
      textDecorationLine="underline"
      borderRadius="12px"
      paddingTop={vars('space-xxs')}
      paddingBottom={vars('space-xxs')}
      paddingLeft={vars('space-xs')}
      paddingRight={vars('space-xs')}
      color={gray}
      rightIcon={rIcon}
      leftIcon={lIcon}
      m={m}
      onClick={onClick}
      _hover={{
        color: blue,
      }}
      _focus={{
        boxShadow: `inset 0 0 0 2px ${blue}, inset 0 0 0 4px ${white}`,
      }}
      sx={{
        '&:hover': {
          'svg path': {
            fill: blue,
          },
        },
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
