import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { PageHeader } from '~/components/PageHeader';
import { GlobalStyles } from '~/styles/global';
import { defaultTheme } from '~/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader />
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
