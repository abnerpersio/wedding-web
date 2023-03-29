import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;

  & > * {
    width: 100%;
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
