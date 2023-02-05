import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  div.background-image {
    position: relative;
    background-image: url('/assets/background.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 260px;
    box-shadow: ${(props) => props.theme.shadows.default};

    @media screen and (max-width: 425px) {
      height: 200px;
    }

    @media screen and (max-width: 320px) {
      height: 180px;
    }

    div.overlay {
      position: absolute;
      background-color: ${(props) => props.theme.pallete.main[700]};
      opacity: 0.5;
      width: 100%;
      height: 100%;
      z-index: 10;
    }

    div.content {
      position: inherit;
      z-index: 20;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.pallete.light};
    }
  }
`;
