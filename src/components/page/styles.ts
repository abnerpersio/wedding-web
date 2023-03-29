import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  img.background-decoration {
    z-index: 10;
    position: absolute;
    pointer-events: none;
    opacity: 0.25;
    width: 40%;
    max-width: 250px;
  }
`;
