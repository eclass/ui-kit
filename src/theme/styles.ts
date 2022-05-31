// import { vars } from '@theme'

export const styles = {
  global: (props: any) => ({
    '.react-ripples': {
      h: '100%',
      display: 'grid!important',
    },
    '.chakra-button': {
      borderStyle: 'none',
    },
    '.chakra-modal__content-container': {
      padding: '1.87rem',
      zIndex: '1400',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'auto',
    },
    '.chakra-modal__content': {
      borderRadius: '0.5rem',
      background: 'white',
      color: 'inherit',
      zIndex: '1400',
      maxWidth: '36.813rem',
      boxShadow: '0px 4px 16px rgba(92, 92, 92, 0.2)',
    },
    '.chakra-modal__header': {
      paddingInlineStart: '1.5rem',
      paddingInlineEnd: '1.5rem',
      fontSize: '1.25rem',
      fontWeight: '700',
      textAlign: 'center',
      '.chakra-icon': {
        width: '13rem',
      },
    },
    '.chakra-modal__close-btn': {
      width: '2rem',
      height: '2rem',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      position: 'absolute',
      top: '0.5rem',
      right: '0.75rem',
      color: '#60798E',
      backgroundColor: 'transparent',
      borderStyle: 'none',
    },
  }),
}
