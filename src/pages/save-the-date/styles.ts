import styled from 'styled-components';
import { blinkAnimation, typingAnimation } from '~/styles/animations';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary[100]};

  img.background-decoration {
    z-index: 10;
    position: absolute;
    pointer-events: none;

    &.round {
      padding: 4px;
      opacity: 0.5;
      width: 100%;
      max-width: 650px;
    }

    &.blur {
      opacity: 0.5;
      width: 40%;
      max-width: 250px;
    }
  }
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
