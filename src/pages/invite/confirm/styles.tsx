import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;

  & > * {
    width: 100%;
  }

  h2 {
    text-align: left;
    font-size: 1.75em;
  }

  div.actions {
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
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

  div.input-group {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  small {
    font-size: 0.7em;
  }
`;

export const InfoModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1em;
`;
