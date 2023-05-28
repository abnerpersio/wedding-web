import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '~/components/button';
import { GoogleMapsIcon } from '~/components/icons/google-maps';
import { HeartIcon } from '~/components/icons/heart';
import { WazeIcon } from '~/components/icons/waze';
import { ImageDecoration } from '~/components/image-decoration';
import { Loader } from '~/components/loader';
import { Modal } from '~/components/modal';
import { Page } from '~/components/page';
import { PageError } from '~/components/page-error';
import { Title } from '~/components/title';
import { LINKS } from '~/constants/links';
import { useInvite } from '~/hooks/useInvite';

import { Content, ModalContent } from './styles';

export function Invite() {
  const { id } = useParams();
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const { isLoading, isError, invite } = useInvite(id);

  const handleOpenLocationModal = () => setOpenLocationModal(true);
  const handleCloseLocationModal = () => setOpenLocationModal(false);

  const handleOpenLocation = (type: 'waze' | 'google') => {
    window.open(LINKS.LOCATION[type], '_blank');
  };

  const handleOpenGiftList = () => {
    window.open(LINKS.WEDDING_GIFT_LIST, '_blank');
  };

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
    <Page>
      <Modal isOpen={openLocationModal} onClose={handleCloseLocationModal} modalId="location-modal">
        <ModalContent>
          <p>Salão Paraíso Jundiai - SP</p>
          <p>Endereço: Av. Lindório Rocha, 1700 - Chacaras Santa Martha, Várzea Paulista - SP</p>

          <div>
            <button onClick={() => handleOpenLocation('google')} type="button">
              <GoogleMapsIcon />
            </button>
            <button onClick={() => handleOpenLocation('waze')} type="button">
              <WazeIcon />
            </button>
          </div>
        </ModalContent>
      </Modal>

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

        {invite.status === 'confirmed' && (
          <section className="bottom-informations">
            <Button variant="outlined" onClick={handleOpenLocationModal}>
              Acessar localização
            </Button>

            {LINKS.WEDDING_GIFT_LIST && (
              <Button variant="outlined" onClick={handleOpenGiftList}>
                Lista de presentes
              </Button>
            )}
          </section>
        )}
      </Content>
    </Page>
  );
}
