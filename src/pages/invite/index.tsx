import { useParams } from 'react-router-dom';
import backgroundBlur from '~/assets/background-blur.png';
import { Loader } from '~/components/loader';
import { Title } from '~/components/title';

import { Content, Wrapper } from './styles';

export function Invite() {
  const { id } = useParams();

  console.log(id);

  return (
    <Wrapper>
      <Loader isLoading={false} />

      <img src={backgroundBlur} alt="" className="background-decoration" />

      <Content>
        <Title text="Abner & Mayara" withAnimation />
        <h4>Convidam você para participar de sua cerimônia de casamento</h4>
      </Content>
    </Wrapper>
  );
}
