import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 999;
`;

const beatAnimation = keyframes`
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
`;

type SpinnerProps = {
  size: number;
};

export const Spinner = styled.div<SpinnerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size * 0.9}px;
    opacity: 0.6;
    animation: ${beatAnimation} 3s infinite ease-in-out;

    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 0;
      width: ${(props) => props.size * 0.5}px;
      height: ${(props) => props.size * 0.8}px;
      background: #ff69b4;
      -moz-border-radius: ${(props) => props.size}px ${(props) => props.size}px 0 0;
      border-radius: ${(props) => props.size}px ${(props) => props.size}px 0 0;
    }

    &:before {
      left: ${(props) => props.size * 0.5}px;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transform-origin: 0 100%;
      -moz-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      -o-transform-origin: 0 100%;
      transform-origin: 0 100%;
    }

    &:after {
      left: 0;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transform-origin: 100% 100%;
      -moz-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      -o-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }

    &:nth-child(2) {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;

      &:before,
      &:after {
        background: #ff1d8e;
      }
    }

    &:nth-child(3) {
      -webkit-animation-delay: -1.5s;
      animation-delay: -1.5s;

      &:before,
      &:after {
        background: #ff0080;
      }
    }

    &:nth-child(4) {
      -webkit-animation-delay: -2s;
      animation-delay: -2s;
    }

    &:nth-child(5) {
      -webkit-animation-delay: -2.5s;
      animation-delay: -2.5s;
    }
  }
`;
