import backgroundRound from '~/assets/background-round.png';
import { Button } from '~/components/button';
import { Page } from '~/components/page';
import { Title } from '~/components/title';
import { LINKS } from '~/constants/links';

import { Content, ImageDecoration } from './styles';

export function SaveTheDate() {
  const goToGiftList = () => {
    window.open(LINKS.WEDDING_GIFT_LIST, '_blank');
  };

  return (
    <Page>
      <ImageDecoration src={backgroundRound} opacity={0.2} />

      <Content>
        <h2>Save the date</h2>
        <h3>nosso casamento</h3>
        <Title text="Abner & Mayara" withAnimation />
        <h4>07 . 09 . 2023</h4>
        <h4>16 : 30</h4>

        {LINKS.WEDDING_GIFT_LIST && (
          <Button type="button" onClick={goToGiftList}>
            Confira nossa lista de presentes
          </Button>
        )}
      </Content>
    </Page>
  );
}
