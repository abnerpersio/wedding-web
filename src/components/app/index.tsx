import { ThemeProvider } from 'styled-components';
import { QueryProvider } from '~/providers/query';
import { Routes } from '~/providers/routes';
import { ToastProvider } from '~/providers/toast';
import { GlobalStyles } from '~/styles/global';
import { defaultTheme } from '~/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastProvider>
        <QueryProvider>
          <GlobalStyles />
          <Routes />
        </QueryProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
