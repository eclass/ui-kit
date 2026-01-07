import { vars } from '@theme'
import { Button, CSSObject } from '@chakra-ui/react'
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

type XOR<T, U> = T | U extends object
  ? (T extends U ? never : T) | (U extends T ? never : U)
  : T | U
export interface propsTertiaryBtn {
  activeWhenPress?: boolean
  id?: string
  iconCustom?: JSX.Element
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
  m?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void
  rightIcon?: boolean
  role?: 'button' | 'link'
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  withoutColor?: boolean
  sx?: CSSObject
}

interface ButtonWithTextProps extends propsTertiaryBtn {
  children: React.ReactNode
  ariaLabel?: string
}

interface ButtonWithoutTextProps extends propsTertiaryBtn {
  children?: React.ReactNode
  ariaLabel: string
}

type ButtonProps = XOR<ButtonWithTextProps, ButtonWithoutTextProps>

export function BtnTertiary({
  ariaLabel,
  activeWhenPress = false,
  children,
  id,
  iconStatus = 'multimedia',
  iconCustom,
  m = '0',
  onClick,
  onMouseEnter,
  onMouseLeave,
  rightIcon,
  role = 'button',
  type = 'button',
  tabIndex,
  withoutColor = false,
  sx,
}: ButtonProps): JSX.Element {
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
      aria-label={ariaLabel}
      id={id}
      role={role}
      type={type}
      tabIndex={tabIndex}
      background="transparent"
      borderRadius="12px"
      color={gray}
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="500"
      fontSize="14px"
      gap="0.5rem"
      height="24px"
      lineHeight="16px"
      leftIcon={lIcon}
      rightIcon={rIcon}
      m={m}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      paddingTop={vars('space-xxs')}
      paddingBottom={vars('space-xxs')}
      paddingLeft={vars('space-xs')}
      paddingRight={vars('space-xs')}
      textDecorationLine="underline"
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
        ...sx,
      }}
    >
      {children}
    </Button>
  )
}

BtnTertiary.displayName = 'BtnTertiary'
