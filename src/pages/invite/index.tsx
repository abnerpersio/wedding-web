import { Link, useParams } from 'react-router-dom';
import { HeartIcon } from '~/components/icons/heart';
import { Page } from '~/components/page';
import { Title } from '~/components/title';

import { Content } from './styles';

export function Invite() {
  const { id } = useParams();

  console.log(id);

  return (
    <Page isLoading={false}>
      <Content>
        <Title text="Abner & Mayara" withAnimation />

        <h4>Convidam você para participar de sua cerimônia de casamento</h4>

        <div className="date-info">
          <small>Quinta, às 16:30</small>

          <div>
            <span>07</span>
            <HeartIcon />
            <span>SETEMBRO</span>
            <HeartIcon />
            <span>2023</span>
          </div>

          <section className="border-bottom" />
        </div>

        <Link to={`/invite/${id}/confirm`}>Confirme sua presença clicando aqui</Link>
      </Content>
    </Page>
  );
}
