import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '~/components/button';
import { GoBackIcon } from '~/components/icons/go-back';
import { Input } from '~/components/input';
import { Modal } from '~/components/modal';
import { Page } from '~/components/page';

import { Content, InfoModalContent } from './styles';

export function InviteConfirm() {
  const { id } = useParams();
  const [guests, setGuests] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  console.log(id);

  const handleChangeGuests = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // TODO: validate number of guests. Should be less then 20
    setGuests(value);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Page isLoading={false}>
      <Modal modalId="invite-confirm-info" isOpen={modalOpen} onClose={handleCloseModal}>
        <InfoModalContent>
          <p>Cada convidado (junto de seus acompanhantes) tem seu próprio link.</p>

          <p>
            Se houve um engano com o nome escrito nesse formulário, não o preencha. Entre em contato
            com quem te enviou para receber o seu link personalizado
          </p>
        </InfoModalContent>
      </Modal>

      <Content>
        <h2>Olá, Abner!</h2>

        <div className="actions">
          <GoBackIcon />
          <Link to={`/invite/${id}`}>Voltar</Link>
          <small>|</small>
          <span onClick={handleOpenModal}>Não sou Abner</span>
        </div>

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
