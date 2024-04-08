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
  children?: React.ReactNode
  rightIcon?: boolean
  iconCustom?: JSX.Element
  withoutColor?: boolean
  m?: string
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  id?: string
  activeWhenPress?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void
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
  activeWhenPress = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
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

  let icon
  if (btnIcons[iconStatus] && iconStatus !== 'noIcon') {
    icon = btnIcons[iconStatus]
  }
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
      gap="0.5rem"
      paddingTop={vars('space-xxs')}
      paddingBottom={vars('space-xxs')}
      paddingLeft={vars('space-xs')}
      paddingRight={vars('space-xs')}
      color={gray}
      rightIcon={rIcon}
      leftIcon={lIcon}
      m={m}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      _hover={{
        color: `${blue}`,
      }}
      _focusVisible={{
        boxShadow: `inset 0 0 0 2px ${blue}, inset 0 0 0 4px ${white}`,
      }}
      _focus={{
        color: activeWhenPress ? `${blue} !important` : 'inherit',
        boxShadow: 'none',
      }}
      _active={{
        bg: 'transparent',
      }}
      sx={{
        '>span': {
          mr: 0,
        },
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
