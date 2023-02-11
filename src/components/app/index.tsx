import { ThemeProvider } from 'styled-components';
import { Routes } from '~/providers/routes';
import { GlobalStyles } from '~/styles/global';
import { defaultTheme } from '~/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
