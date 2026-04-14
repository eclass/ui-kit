import { vars } from '@/theme'

export const profileStyle = {
  header: {
    background: vars('colors-neutral-davysGrey'),
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: '500',
    margin: '0',
    padding: '0 20px 15px',
    color: vars('colors-neutral-white'),
  },
  logout: {
    background: vars('colors-neutral-white'),
    border: 'none',
    color: vars('colors-alert-deepSkyBlue'),
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    justifyContent: 'center',
    padding: '14px 20px',
    width: '-webkit-fill-available',
    _hover: {
      background: vars('colors-neutral-cultured'),
      MenuItemShadow: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: `0 0 0 3px ${vars('colors-icon-deepSkyBlue')} inset`,
    },
  },

  items: {
    background: vars('colors-neutral-white'),
    borderBottom: `solid 1px ${vars('colors-neutral-platinum')}`,
    color: vars('colors-neutral-spanishGrey'),
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    _focus: {
      boxShadow: `0 0 0 3px ${vars('colors-icon-deepSkyBlue')} inset`,
    },
    _hover: {
      background: vars('colors-neutral-cultured'),
      boxShadow: 'none',
      color: vars('colors-neutral-spanishGrey'),
      textDecoration: 'none',
    },
  },
}
