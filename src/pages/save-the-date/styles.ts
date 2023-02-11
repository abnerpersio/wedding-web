import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary[100]};

  img.background-decoration {
    position: absolute;
    pointer-events: none;

    &.round {
      padding: 4px;
      opacity: 0.5;
      width: 100%;
      max-width: 650px;
    }

    &.blur {
      opacity: 0.5;
      width: 40%;
      max-width: 250px;
    }
  }

  div.content {
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.25em;
      font-weight: 500;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0.75px;
      text-transform: uppercase;
    }

    h1 {
      margin: 16px 0;
      font-weight: normal;
      font-size: 2.7em;
      font-family: ${({ theme }) => theme.fonts.handwrite};
      color: ${({ theme }) => theme.colors.secondary[700]};
    }

    h3 {
      font-size: 1em;
      font-weight: normal;
      text-transform: lowercase;
    }

    h4 {
      font-size: 1.3em;
      font-family: ${({ theme }) => theme.fonts.handwrite};
    }

    a {
      text-transform: lowercase;
      font-size: 0.8em;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.secondary[700]};
      text-decoration: none;
      transition: 0.3s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary[500]};
      }
    }

    @media screen and (max-width: 320px) {
      h1 {
        font-size: 2em;
      }
    }

    @media screen and (max-width: 375px) {
      h1 {
        margin: 8px 0;
      }
    }

    @media screen and (min-width: 1440px) {
      h2 {
        font-size: 1.5em;
      }

      h1 {
        font-size: 3.25em;
      }

      h3 {
        font-size: 1.2em;
      }

      h4 {
        font-size: 1.5em;
      }
    }
  }
`;
