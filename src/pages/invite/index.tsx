import { Link, useParams } from 'react-router-dom';
import { HeartIcon } from '~/components/icons/heart';
import { ImageDecoration } from '~/components/image-decoration';
import { Loader } from '~/components/loader';
import { Page } from '~/components/page';
import { PageError } from '~/components/page-error';
import { Title } from '~/components/title';
import { useInvite } from '~/hooks/useInvite';

import { Content } from './styles';

export function Invite() {
  const { id } = useParams();
  const { isLoading, isError, invite } = useInvite(id);

  if (isLoading) {
    return <Loader isLoading />;
  }

  const guest = invite?.guest;
  const hasError = isError || !invite || !guest;

  if (hasError) {
    return (
      <PageError message="Link de convite não encontrado. Verifique se está tudo certo ou tente novamente mais tarde." />
    );
  }

  return (
    <Page isLoading={false}>
      <ImageDecoration opacity={0.2} />

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
