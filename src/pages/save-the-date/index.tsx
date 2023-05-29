import { Button } from '~/components/button';
import { ImageDecoration } from '~/components/image-decoration';
import { Page } from '~/components/page';
import { Title } from '~/components/title';
import { LINKS } from '~/constants/links';

import { Content } from './styles';

export function SaveTheDate() {
  const goToGiftList = () => {
    window.open(LINKS.WEDDING_GIFT_LIST, '_blank');
  };

  return (
    <Page backgroundVariant="photo">
      {/* <ImageDecoration opacity={0.2} /> */}

      <Content>
        <h2>Save the date</h2>
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
