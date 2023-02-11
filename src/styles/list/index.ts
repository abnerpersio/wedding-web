import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }
`;
