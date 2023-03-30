import styled from 'styled-components';

const zIndex = 990;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${zIndex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  max-width: 500px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;

  div.header {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    button {
      background: none;
      border: none;
      padding: 4px;
      opacity: 0.8;

      svg {
        fill: ${({ theme }) => theme.colors.black};
        width: 12px;
        height: 12px;
      }
    }
  }

  div.body {
    width: 100%;
    margin-top: 4px;
  }
`;
