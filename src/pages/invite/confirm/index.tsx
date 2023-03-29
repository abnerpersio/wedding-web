import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '~/components/button';
import { Input } from '~/components/input';
import { Page } from '~/components/page';

import { Content } from './styles';

export function InviteConfirm() {
  const { id } = useParams();
  const [guests, setGuests] = useState<number>(0);

  console.log(id);

  const handleChangeGuests = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // TODO: validate number of guests. Should be less then 20
    setGuests(value);
  };

  return (
    <Page isLoading={false}>
      <Content>
        <h2>Olá, Abner!</h2>

        <div className="input-group">
          <p>Número de acompanhantes</p>
          <p>2</p>
          <small>Alterar</small>
        </div>

        <Input max={20} value={guests} onChange={handleChangeGuests} type="number" />

        <Button type="submit">Confirmar presença</Button>
        <small>Você poderá atualizar essas informações depois</small>
      </Content>
    </Page>
  );
}
