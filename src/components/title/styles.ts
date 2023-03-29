import styled, { css } from 'styled-components';
import { scaleAnimation } from '~/styles/animations';

export type StyleProps = {
  withAnimation?: boolean;
};

export const StyledTitle = styled.h1<StyleProps>`
  font-weight: normal;
  text-align: center;
  font-size: 2.8em;
  font-family: ${({ theme }) => theme.fonts.handwrite};
  color: ${({ theme }) => theme.colors.secondary[700]};

  ${(props) =>
    props.withAnimation &&
    css`
      animation: ${scaleAnimation} 0.3s ease-in-out;
    `}

  @media screen and (max-width: 330px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.25em;
  }
`;
