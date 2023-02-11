import { useParams } from 'react-router-dom';
import { Banner } from '~/components/banner';
import { Button } from '~/components/button';
import { Input } from '~/components/input';

import { Content, Wrapper } from '../styles';

export function InviteConfirm() {
  const { id } = useParams();

  console.log(id);

  return (
    <Wrapper>
      <Banner title="Confirmação de presença" />

      <Content>
        <h2>Olá, Abner!</h2>

        <div className="flex">
          <span>Número de acompanhantes</span>
          <span>2</span>
        </div>

        <span>Alterar</span>
        <Input value={2} type="number" />

        <Button type="submit">Confirmar presença</Button>
        <small>Você poderá atualizar as informações depois</small>
      </Content>
    </Wrapper>
  );
}
