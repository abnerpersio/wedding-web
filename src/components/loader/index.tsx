import { useEffect, useState } from 'react';
import backgroundBlur from '~/assets/background-blur.png';
import brideAndGroom from '~/assets/bride-and-groom.webp';
import { ReactPortal } from '~/components/react-portal';
import { Title } from '~/components/title';

import { Overlay, Wrapper } from './styles';

type Props = {
  isLoading?: boolean;
};

export function Loader(props: Props) {
  const [ellipsis, setEllipsis] = useState(0);

  useEffect(() => {
    if (!props.isLoading) return;

    const interval = setInterval(() => {
      setEllipsis((prevState) => (prevState + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.isLoading]);

  if (!props.isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Wrapper>
          <img src={backgroundBlur} className="background-decoration" />
          <div className="bride-and-groom">
            <img src={brideAndGroom} />
          </div>

          <div className="content">
            <Title text="Abner & Mayara" withAnimation />
            <h4>Carregando{Array.from({ length: ellipsis }).map(() => '.')}</h4>
          </div>
        </Wrapper>
      </Overlay>
    </ReactPortal>
  );
}
