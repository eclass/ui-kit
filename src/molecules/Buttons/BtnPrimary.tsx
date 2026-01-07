import { Btn, propsBaseBtns } from './Btn'

/**
 * Componente BtnPrimary
 *
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <BtnPrimary>Lorem</BtnPrimary>
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

type PrimaryButtonProps = XOR<ButtonWithTextProps, ButtonWithoutTextProps>
export function BtnPrimary({
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
  sx,
}: PrimaryButtonProps): JSX.Element {
  return (
    <Btn
      ariaLabel={ariaLabel}
      id={id}
      disabled={disabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      leftIcon={leftIcon}
      m={m}
      onClick={onClick}
      rightIcon={rightIcon}
      role={role}
      size={size}
      type={type}
      tabIndex={tabIndex}
      sx={sx}
    >
      {children}
    </Btn>
  )
}

BtnPrimary.displayName = 'BtnPrimary'
