import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-image: url('/assets/background.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 260px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  @media screen and (max-width: 425px) {
    height: 200px;
  }

  @media screen and (max-width: 320px) {
    height: 180px;
  }

  div.overlay {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.main[700]};
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  div.title {
    position: inherit;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
    gap: 8px;

    h1 {
      font-size: 36px;
      font-family: ${({ theme }) => theme.fonts.handwrite};
    }
  }
`;
