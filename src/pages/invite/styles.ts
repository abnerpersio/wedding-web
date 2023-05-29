import styled from 'styled-components';

export const Content = styled.main`
  z-index: 30;
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  h1 {
    margin: 16px 0;
    text-align: center;
  }

  h4 {
    font-weight: normal;
    text-align: center;
    max-width: 280px;
    font-size: 1em;
    word-break: break-word;

    @media screen and (max-width: 320px) {
      font-size: 0.9em;
    }
  }

  div.date-info {
    position: relative;
    margin-top: 8px;
    width: 80%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 4px;

    @media screen and (max-width: 420px) {
      width: 90%;
    }

    small {
      overflow: hidden;
      text-align: center;
      width: 100%;
      font-size: 0.8em;

      &:before,
      &:after {
        background-color: ${({ theme }) => theme.colors.main[300]};
        content: '';
        display: inline-block;
        height: 2px;
        opacity: 0.5;
        position: relative;
        vertical-align: middle;
        width: 50%;
      }

      &:before {
        right: 0.5em;
        margin-left: -50%;
      }

      &:after {
        left: 0.5em;
        margin-right: -50%;
      }
    }

    div {
      margin: 16px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 1em;

      svg {
        width: 12px;
        height: 12px;
        fill: ${({ theme }) => theme.colors.black};
        opacity: 0.8;
      }
    }

    section.border-bottom {
      background-color: ${({ theme }) => theme.colors.main[300]};
      height: 2px;
      opacity: 0.5;
      width: 100%;
    }
  }

  section.bottom-informations {
    margin-top: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  a {
    margin: 16px 0px;
    color: ${({ theme }) => theme.colors.main[500]};
    font-size: 0.95em;
    transition: all 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.main[300]};
    }

    @media screen and (max-width: 320px) {
      font-size: 0.75em;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 12px 4px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;

  .copy-button {
    outline: none;
    border: none;
    background: none;
    padding: 8px;
    margin-left: 8px;
    width: 36px;
    height: 36px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  div {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    & > button {
      outline: none;
      border: none;
      background: none;
      border: 2px solid ${({ theme }) => theme.colors.main[500]};
      border-radius: 4px;
      width: 120px;
      height: 120px;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
