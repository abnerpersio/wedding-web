import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '~/components/button';
import { GoBackIcon } from '~/components/icons/go-back';
import { InfoIcon } from '~/components/icons/info';
import { TextArea } from '~/components/input/textarea';
import { Loader } from '~/components/loader';
import { Modal } from '~/components/modal';
import { Page } from '~/components/page';
import { PageError } from '~/components/page-error';
import { useInvite } from '~/hooks/useInvite';
import { InviteService } from '~/services/invite/invite-service';

import { Content, ModalContent } from './styles';

export function InviteConfirm() {
  const { id } = useParams();
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);
  const [refuseModalOpen, setRefuseModalOpen] = useState<boolean>(false);
  const [companionsModalOpen, setCompanionsModalOpen] = useState<boolean>(false);
  const [isRefusing, setIsRefusing] = useState<boolean>(false);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [comments, setComments] = useState<string>('');
  const [mode, setMode] = useState<'update' | 'info'>('update');
  const { isLoading, isError, invite, refetch: refetchInviteQuery } = useInvite(id);

  const handleOpenInfoModal = () => setInfoModalOpen(true);
  const handleCloseInfoModal = () => setInfoModalOpen(false);

  const handleOpenRefuseModal = () => setRefuseModalOpen(true);
  const handleCloseRefuseModal = () => setRefuseModalOpen(false);

  const handleOpenCompanionsModal = () => setCompanionsModalOpen(true);
  const handleCloseCompanionsModal = () => setCompanionsModalOpen(false);

  const handleRefuseInvite = useCallback(async () => {
    if (!id || !invite) return;
    if (isRefusing) return;

    try {
      setIsRefusing(true);
      await InviteService.update(id, { status: 'refused' });
      setIsRefusing(false);
      handleCloseRefuseModal();
      toast.success('Convite atualizado');
      refetchInviteQuery();
    } catch {
      toast.error('Ocorreu um erro ao atualizar. Tente novamente');
    } finally {
      setIsRefusing(false);
    }
  }, [id, invite, isRefusing]);

  const handleConfirmInvite = useCallback(async () => {
    if (!id || !invite) return;
    if (isConfirming) return;

    try {
      setIsConfirming(true);
      await InviteService.update(id, {
        comments: comments || '',
        status: 'confirmed',
      });
      setIsConfirming(false);
      toast.success('Convite confirmado!');
      refetchInviteQuery();
    } catch {
      toast.error('Ocorreu um erro ao atualizar. Tente novamente');
    } finally {
      setIsConfirming(false);
    }
  }, [id, invite, isConfirming, comments]);

  useEffect(() => {
    if (invite?.comments) {
      setComments(invite.comments);
    }
  }, [invite?.comments]);

  useEffect(() => {
    if (!invite?.status) return;
    if (['confirmed', 'refused'].includes(invite.status)) {
      setMode('info');
    }
  }, [invite?.status]);

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

  if (mode === 'info') {
    return (
      <Page backgroundVariant="photo">
        <Content>
          <h2>
            {guest.name}
            {invite.companions > 0 && ' e família'}
          </h2>

          <div className="actions">
            <GoBackIcon />
            <Link to={`/invite/${id}`}>Voltar</Link>
          </div>

          {invite.status === 'confirmed' && (
            <p className="info-mode">Você já confirmou esse convite. Nos vemos no grande dia!</p>
          )}
          {invite.status === 'refused' && <p className="info-mode">Você já recusou esse convite</p>}

          <div className="form-actions">
            <Button onClick={() => setMode('update')} type="button" variant="outlined">
              Atualizar informações
            </Button>
          </div>
        </Content>
      </Page>
    );
  }

  return (
    <Page backgroundVariant="photo">
      <Modal modalId="invite-confirm-info" isOpen={infoModalOpen} onClose={handleCloseInfoModal}>
        <ModalContent>
          <p>Cada convite tem seu próprio link.</p>

          <p>
            Se houve um engano com o nome escrito nesse formulário, não o preencha. Entre em contato
            com quem te enviou para receber o seu link personalizado
          </p>

          <Button type="button" onClick={handleCloseInfoModal}>
            Ok
          </Button>
        </ModalContent>
      </Modal>

      <Modal
        modalId="invite-refuse"
        isOpen={refuseModalOpen}
        onClose={isRefusing ? undefined : handleCloseRefuseModal}
      >
        <ModalContent gap={16}>
          <h4>Confirmar cancelamento</h4>
          <p>Ficamos tristes que não poderá estar no dia mais importante de nossas vidas :(</p>
          <p>Mas entendemos que faz parte e agradeçemos pelo carinho!</p>
          <Button type="button" disabled={isRefusing} onClick={handleRefuseInvite}>
            {isRefusing ? 'Cancelando...' : 'Tenho certeza dessa decisão, cancelar'}
          </Button>
        </ModalContent>
      </Modal>

      <Modal
        modalId="invite-companions-info"
        isOpen={companionsModalOpen}
        onClose={handleCloseCompanionsModal}
      >
        <ModalContent gap={16}>
          <h4>Número de acompanhantes</h4>
          <p>Esse é o número de pessoas do seu convite, sem contar com você.</p>
          <p>Crianças de até 12 anos não contam como acompanhantes.</p>
          <Button type="button" onClick={handleCloseCompanionsModal}>
            Ok
          </Button>
        </ModalContent>
      </Modal>

      <Content>
        <h2>
          {guest.name}
          {invite.companions > 0 && ' e família'}
        </h2>

        <div className="actions">
          <GoBackIcon />
          <Link to={`/invite/${id}`}>Voltar</Link>
          <small>|</small>
          <span onClick={handleOpenInfoModal}>Convite errado?</span>
        </div>

        <div className="info-group">
          <p>
            Número de acompanhantes{' '}
            <span onClick={handleOpenCompanionsModal}>
              <InfoIcon />
            </span>
          </p>
          <p>{invite.companions}</p>
        </div>

        <TextArea
          value={comments}
          onChange={(value) => setComments(value as string)}
          cols={10}
          rows={3}
          maxLength={200}
          label="Alguma observação? (opcional)"
        />

        <div className="form-actions">
          <Button
            disabled={isConfirming || isRefusing}
            onClick={handleOpenRefuseModal}
            variant="outlined"
            type="button"
          >
            Não poderei comparecer
          </Button>

          <Button disabled={isConfirming || isRefusing} onClick={handleConfirmInvite} type="button">
            {isConfirming ? 'Confirmando...' : 'Confirmar presença'}
          </Button>
        </div>

        <small>Você poderá atualizar essas informações depois</small>
      </Content>
    </Page>
  );
}
