import styled from 'styled-components';
import { blinkAnimation, typingAnimation } from '~/styles/animations';

export const Content = styled.main`
  z-index: 20;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.65em;
    font-family: ${({ theme }) => theme.fonts.handwrite};
    animation: ${typingAnimation} 3.5s steps(40, end), ${blinkAnimation} 0.75s step-end;
  }

  h1 {
    margin: 16px 0;
    font-size: 2.75em;
  }

  h4 {
    font-weight: normal;
    font-size: 1.3em;
    font-family: ${({ theme }) => theme.fonts.handwrite};
  }

  button {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    h2 {
      font-size: 1.8em;
    }

    h1 {
      font-size: 3.5em;
    }

    h4 {
      font-size: 1.5em;
    }
  }
`;
