import styled, { css } from 'styled-components';

export const Content = styled.main`
  z-index: 30;
  width: 90%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;

  & > * {
    width: 100%;
  }

  h2 {
    text-align: left;
    font-size: 1.75em;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.main[500]};
  }

  div.actions {
    width: 100%;
    margin-bottom: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    font-size: 0.85em;
    opacity: 0.8;

    svg {
      fill: ${({ theme }) => theme.colors.black};
      width: 0.75em;
      height: 0.75em;
    }

    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: none;
    }

    small {
      margin: 0px 8px;
    }
  }

  div.info-group {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin: 8px 0px;
  }

  div.form-actions {
    margin: 8px 0px 4px 0px;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    & > * {
      flex: 1;
    }
  }

  small {
    font-size: 0.7em;
  }
`;

export const ModalContent = styled.div<{ gap?: number; align?: 'center' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap || 32}px`};
  padding: 8px 4px;
  opacity: 0.8;
  text-align: ${({ align }) => align || 'left'};

  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1em;
    line-height: 1.4em;
  }
`;
