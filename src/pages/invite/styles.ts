import styled from 'styled-components';
import { scaleAnimation } from '~/styles/animations';

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
    opacity: 0.5;
    width: 40%;
    max-width: 250px;
  }
`;

export const Content = styled.main`
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  h1 {
    margin: 16px 0;
  }

  h4 {
    font-weight: normal;
    text-align: center;
    max-width: 300px;
    word-break: break-word;
  }
`;
