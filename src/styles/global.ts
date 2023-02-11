import { createGlobalStyle } from 'styled-components';

import { defaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${defaultTheme.fonts.default};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${defaultTheme.colors.light}
  }

  #root {
    width: 100%;
    height: 100%;
  }

  input, button, a {
    outline: none;
  }
`;
