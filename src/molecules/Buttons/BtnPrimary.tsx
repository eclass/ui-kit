import { Btn, propsBaseBtns } from './Btn'

/**
 * Componente BtnPrimary
 *
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <BtnPrimary>Lorem</BtnPrimary>
 */
export function BtnPrimary({
  children,
  disabled = false,
  isFullWidth = false,
  leftIcon,
  m = '0',
  isLoading = false,
  onClick,
  rightIcon,
  size = 'regular',
  type = 'button',
  tabIndex,
  id,
}: propsBaseBtns): JSX.Element {
  return (
    <Btn
      id={id}
      disabled={disabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      leftIcon={leftIcon}
      m={m}
      onClick={onClick}
      rightIcon={rightIcon}
      size={size}
      type={type}
      tabIndex={tabIndex}
    >
      {children}
    </Btn>
  )
}

BtnPrimary.displayName = 'BtnPrimary'
