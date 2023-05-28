import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import backgroundRound from '~/assets/background-round.png';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  opacity?: number;
  variant?: 'round';
};

export const Image = styled.img<Props>`
  z-index: 10;
  position: absolute;
  pointer-events: none;
  padding: 4px;
  opacity: ${({ opacity }) => opacity || 0.4};
  width: 100%;
  max-width: 650px;
`;

const VARIANTS = {
  round: backgroundRound,
};

export function ImageDecoration(props: Props) {
  return <Image {...props} src={props.src || VARIANTS[props.variant || 'round']} />;
}
