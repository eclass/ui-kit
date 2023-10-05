import { vars } from '@theme'
import { Button } from '@chakra-ui/react'
import {
  GoAhead,
  GoBack,
  Password,
  Pen,
  PlusSign,
  TextBubble,
  TrashCan,
  Multimedia,
  AcademicRecord,
  Download,
} from '@/atoms/Icons'

export interface propsTertiaryBtn {
  iconStatus?:
    | 'answer'
    | 'ahead'
    | 'back'
    | 'edit'
    | 'delete'
    | 'more'
    | 'password'
    | 'multimedia'
    | 'record'
    | 'download'
    | 'noIcon'

  /** Se permite agregar un nuevo icono, para casos en que no sirvan los de la lista definida */
  iconCustom?: JSX.Element
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
  iconCustom,
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
  const colorIcon = withoutColor ? vars('colors-main-blueGrey') : blue

  const btnIcons = {
    ahead: <GoAhead color={colorIcon} />,
    answer: <TextBubble color={colorIcon} />,
    back: <GoBack color={colorIcon} />,
    delete: <TrashCan color={colorIcon} />,
    download: <Download color={colorIcon} />,
    edit: <Pen color={colorIcon} />,
    more: <PlusSign color={colorIcon} />,
    multimedia: <Multimedia color={colorIcon} />,
    password: <Password color={colorIcon} />,
    record: <AcademicRecord color={colorIcon} />,
    noIcon: <></>,
  }

  let icon = btnIcons[iconStatus] ?? btnIcons.multimedia
  if (iconCustom) {
    icon = iconCustom
  }
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
        color: `${blue}`,
      }}
      _focusVisible={{
        boxShadow: `inset 0 0 0 2px ${blue}, inset 0 0 0 4px ${white}`,
      }}
      _focus={{
        boxShadow: 'none',
      }}
      _active={{
        bg: 'transparent',
      }}
      sx={{
        '&:hover': {
          'svg path': {
            fill: `${blue}`,
          },
          '@media (hover: none)': {
            color: `${gray}`,
            'svg path': {
              fill: colorIcon,
            },
          },
        },
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
