import Lottie from 'lottie-react';

import errorAnimation from './json/error.json';

export function ErrorAnimation() {
  return <Lottie animationData={errorAnimation} loop />;
}
