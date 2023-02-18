import backgroundBlur from '~/assets/background-blur.png';
import backgroundRound from '~/assets/background-round.png';
import { Button } from '~/components/button';
import { Title } from '~/components/title';

import { WEDDING_GIFT_LIST } from '../../constants/links';
import { Content, Wrapper } from './styles';

export function SaveTheDate() {
  const goToGiftList = () => {
    window.open(WEDDING_GIFT_LIST, '_blank');
  };

  return (
    <Wrapper>
      <img src={backgroundBlur} alt="" className="background-decoration blur" />
      <img src={backgroundRound} alt="" className="background-decoration round" />

      <Content>
        <h2>Save the Date</h2>
        <h3>nosso casamento</h3>
        <Title text="Abner & Mayara" withAnimation />
        <h4>07 . 09 . 2023</h4>
        <h4>16 : 30</h4>

        <Button type="button" onClick={goToGiftList}>
          Confira nossa lista de presentes
        </Button>
      </Content>
    </Wrapper>
  );
}
