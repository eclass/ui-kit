import { Btn, propsBaseBtns } from './Btn'
import { vars } from 'theme'

/**
 * Componente BtnSecondary
 *
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <BtnSecondary>Lorem</BtnSecondary>
 */

type XOR<T, U> = T | U extends object
  ? (T extends U ? never : T) | (U extends T ? never : U)
  : T | U
interface ButtonWithTextProps extends propsBaseBtns {
  children: React.ReactNode
  ariaLabel?: string
}

interface ButtonWithoutTextProps extends propsBaseBtns {
  children?: React.ReactNode
  ariaLabel: string
}

type SecondaryButtonProps = XOR<ButtonWithTextProps, ButtonWithoutTextProps>
export function BtnSecondary({
  ariaLabel,
  children,
  disabled = false,
  isFullWidth = false,
  leftIcon,
  m = '0',
  isLoading = false,
  onClick,
  rightIcon,
  role = 'button',
  size = 'regular',
  type = 'button',
  tabIndex,
  id,
}: SecondaryButtonProps): JSX.Element {
  return (
    <Btn
      ariaLabel={ariaLabel}
      id={id}
      bg={{
        main: vars('colors-main-veryLightBlue'),
        hover: vars('colors-main-linkWater'),
      }}
      borderColorActive={[vars('colors-main-deepSkyBlue'), vars('colors-neutral-white')]}
      color={vars('colors-main-deepSkyBlue')}
      disabled={disabled}
      fillLoader={vars('colors-main-deepSkyBlue')}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      leftIcon={leftIcon}
      m={m}
      onClick={onClick}
      rightIcon={rightIcon}
      role={role}
      size={size}
      touchDark
      type={type}
      tabIndex={tabIndex}
    >
      {children}
    </Btn>
  )
}

BtnSecondary.displayName = 'BtnSecondary'
