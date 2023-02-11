export const defaultTheme = {
  colors: {
    main: {
      700: '#46156b',
      500: '#7726B3',
      400: '#9742d7',
      300: '#ae6ce1',
      100: '#debff6',
    },
    secondary: {
      700: '#7a047b',
      500: '#d90fda',
      400: '#f226f4',
      300: '#F654F7',
      100: '#fdb5fd',
    },
    blue: {
      700: '#01077e',
      500: '#0a0de0',
      400: '#2026f9',
      300: '#474DFB',
      100: '#b3b7ff',
    },
    dark: '#1a1a1a',
    light: '#fafafa',
    disabled: '#d3d3d3',
  },
  shadows: {
    default: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    medium: '0px 0px 4px rgba(0, 0, 0, 0.15)',
    light: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  fonts: {
    default: "'Lato', sans-serif",
    handwrite: "'Ephesis', cursive",
  },
};

export type AppDefaultTheme = typeof defaultTheme;
