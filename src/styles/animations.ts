import { keyframes } from 'styled-components';

export const scaleAnimation = keyframes`
  0% {
    transform: scale(80%);
    opacity: 0;
  }
  100% {
    transform: scale(100%);
    opacity: 1;
  }
`;

export const typingAnimation = keyframes`
  from { 
    max-width: 0;
  }
  to { 
    max-width: 100%; 
  }
`;

export const blinkAnimation = keyframes`
  from, to { 
    border-right-width: 1px;
    border-right-style: solid;
    border-color: transparent;
  }
  50% { 
    border-right-width: 1px;
    border-right-style: solid;
    border-color: #7a047b; 
  }
`;
