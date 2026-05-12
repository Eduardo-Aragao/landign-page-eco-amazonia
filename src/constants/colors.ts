export const colors = {
  primary: {
    clin: '#579D67',
    light: '#268C8C',
    base: '#155B5B',
    dark: '#0A2E2E',
  },
  accent: {
    light: '#F2C4B3',
    base: '#D97D65',
    dark: '#B35A45',
  },
  white: '#FFFFFF',
  background: '#F6F5F7',
  shape: '#EDE9F2',
  danger: '#DC3545',
  success: '#28A745',
  warning: '#FFC107',
  gray: {
    100: '#ADADAD',
    200: '#949494',
    300: '#666666',
    400: '#3D3D3D',
    500: '#1D1D1D',
  },
} as const;

export type ColorPalette = typeof colors;
