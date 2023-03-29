import styled from 'styled-components';

const zIndex = 999;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: rgba(255, 255, 255);
  z-index: ${zIndex};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img.background-decoration {
    position: absolute;
    pointer-events: none;
    opacity: 0.25;
    width: 40%;
    max-width: 250px;
    z-index: ${zIndex + 10};
  }

  div.bride-and-groom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${zIndex + 20};

    img {
      opacity: 0.5;
      width: 40%;
      max-width: 200px;
      transform: translateX(-20px);

      @media screen and (max-width: 320px) {
        transform: translateX(-10px);
      }
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: ${zIndex + 30};

    h4 {
      color: ${({ theme }) => theme.colors.main[700]};
    }
  }
`;
