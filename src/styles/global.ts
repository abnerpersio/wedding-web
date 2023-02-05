import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${defaultTheme.pallete.light}
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  input, button, a {
    outline: none;
  }

  .font-ephesis {
    font-family: 'Ephesis', cursive;
  }
`;
