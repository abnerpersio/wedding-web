import backgroundBlur from '~/assets/background-blur.png';
import backgroundRound from '~/assets/background-round.png';

import { Wrapper } from './styles';

export function SaveTheDate() {
  return (
    <Wrapper>
      <img src={backgroundBlur} alt="" className="background-decoration blur" />
      <img src={backgroundRound} alt="" className="background-decoration round" />

      <div className="content">
        <h2>Save the Date</h2>
        <h3>nosso casamento</h3>
        <h1>Abner & Mayara</h1>
        <h4>07 . 09 . 2023</h4>
        <h4>16 : 30</h4>
      </div>
    </Wrapper>
  );
}
