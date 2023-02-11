import { useRouter } from 'next/router';
import { Banner } from '~/components/Banner';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Loader } from '~/components/Loader';
import { Content, Wrapper } from '~/styles/list';

export default function Invite() {
  const { query } = useRouter();
  const { id } = query;

  console.log(id);

  return (
    <Wrapper>
      <Loader isLoading />

      <Banner title="Confirmação de presença" />

      <Content>
        <h2>Abner e família</h2>

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
