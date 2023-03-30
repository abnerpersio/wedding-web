import styled from 'styled-components';
import { blinkAnimation, typingAnimation } from '~/styles/animations';

export const ImageDecoration = styled.img`
  z-index: 10;
  position: absolute;
  pointer-events: none;
  padding: 4px;
  opacity: 0.4;
  width: 100%;
  max-width: 650px;
`;

export const Content = styled.main`
  z-index: 20;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.25em;
    font-weight: 500;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.75px;
    text-transform: uppercase;
    animation: ${typingAnimation} 3.5s steps(40, end), ${blinkAnimation} 0.75s step-end;
  }

  h1 {
    margin: 16px 0;
  }

  h3 {
    font-size: 1.3em;
    font-family: ${({ theme }) => theme.fonts.handwrite};
    font-weight: normal;
    text-transform: lowercase;
  }

  h4 {
    font-size: 1.3em;
    font-family: ${({ theme }) => theme.fonts.handwrite};
  }

  button {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.2em;
    }

    h4 {
      font-size: 1.5em;
    }
  }
`;
