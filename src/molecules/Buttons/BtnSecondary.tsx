import { Btn, propsBaseBtns } from './Btn'
import { vars } from '@theme'

/**
 * Componente BtnSecondary
 *
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <BtnSecondary>Lorem</BtnSecondary>
 */
export function BtnSecondary({
  children,
  disabled = false,
  isFullWidth = false,
  leftIcon,
  m = '0',
  isLoading = false,
  onClick,
  rightIcon,
  size = 'regular',
}: propsBaseBtns): JSX.Element {
  return (
    <Btn
      bg={{
        main: vars('colors-main-veryLightBlue'),
        hover: vars('colors-main-linkWater'),
      }}
      fillLoader={vars('colors-main-deepSkyBlue')}
      borderColorActive={[vars('colors-main-deepSkyBlue'), vars('colors-neutral-white')]}
      color={vars('colors-main-deepSkyBlue')}
      disabled={disabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      leftIcon={leftIcon}
      m={m}
      onClick={onClick}
      rightIcon={rightIcon}
      size={size}
      touchDark
    >
      {children}
    </Btn>
  )
}

BtnSecondary.displayName = 'BtnSecondary'
