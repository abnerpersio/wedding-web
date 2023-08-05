import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '~/components/button';
import { CopyIcon } from '~/components/icons/copy';
import { GoogleMapsIcon } from '~/components/icons/google-maps';
import { HeartIcon } from '~/components/icons/heart';
import { WazeIcon } from '~/components/icons/waze';
import { Loader } from '~/components/loader';
import { Modal } from '~/components/modal';
import { Page } from '~/components/page';
import { PageError } from '~/components/page-error';
import { Title } from '~/components/title';
import { LINKS } from '~/constants/links';
import { useInvite } from '~/hooks/useInvite';

import { Content, LocationModalContent, PixModalContent } from './styles';

const LOCATION_LABEL = 'Av. Lindório Rocha, 1700 - Chacaras Santa Martha, Várzea Paulista - SP';
const PIX_KEY = '(19) 99560-3201';
const NOT_DIGIT_REGEX = /[^\d]/g;

export function Invite() {
  const { id } = useParams();
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const [openPixModal, setOpenPixModal] = useState<boolean>(false);
  const { isLoading, isError, invite } = useInvite(id);

  const handleOpenLocationModal = () => setOpenLocationModal(true);
  const handleCloseLocationModal = () => setOpenLocationModal(false);

  const handleOpenPixModal = () => setOpenPixModal(true);
  const handleClosePixModal = () => setOpenPixModal(false);

  const handleOpenLocation = (type: 'waze' | 'google') => {
    window.open(LINKS.LOCATION[type], '_blank');
  };

  const handleOpenGiftList = () => {
    window.open(LINKS.WEDDING_GIFT_LIST, '_blank');
  };

  const handleCopyAddress = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(LOCATION_LABEL);
      toast.success('Endereço copiado!');
    }
  };

  const handleCopyPixKey = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PIX_KEY.replace(NOT_DIGIT_REGEX, ''));
      toast.success('Chave pix copiada!');
    }
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
    <Page backgroundVariant="photo">
      <Modal isOpen={openLocationModal} onClose={handleCloseLocationModal} modalId="location-modal">
        <LocationModalContent>
          <p>Salão Paraíso Jundiai - SP</p>
          <p>
            Endereço: {LOCATION_LABEL}
            <button className="copy-button" type="button" onClick={handleCopyAddress}>
              <CopyIcon />
            </button>
          </p>

          <div>
            <button onClick={() => handleOpenLocation('google')} type="button">
              <GoogleMapsIcon />
            </button>
            <button onClick={() => handleOpenLocation('waze')} type="button">
              <WazeIcon />
            </button>
          </div>
        </LocationModalContent>
      </Modal>

      <Modal isOpen={openPixModal} onClose={handleClosePixModal} modalId="pix-modal">
        <PixModalContent>
          <p>Nosso maior presente é sua presença! Caso queira nos presentar via pix:</p>

          <div>
            <p>Celular: {PIX_KEY}</p>
            <p>Banco: Nubank (260) | Mayara de Oliveira Vitorino</p>
            <Button onClick={handleCopyPixKey}>Copiar chave</Button>
          </div>
        </PixModalContent>
      </Modal>

      {/* <ImageDecoration opacity={0.2} /> */}

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
          <a onClick={handleOpenLocationModal}>Acessar localização</a>
        )}

        {invite.status === 'confirmed' && (
          <section className="bottom-informations">
            {LINKS.WEDDING_GIFT_LIST && (
              <Button variant="outlined" onClick={handleOpenGiftList}>
                Lista de presentes
              </Button>
            )}

            <Button variant="outlined" onClick={handleOpenPixModal}>
              Presentes em PIX
            </Button>
          </section>
        )}
      </Content>
    </Page>
  );
}
