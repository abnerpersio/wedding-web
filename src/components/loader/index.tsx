import { ReactPortal } from '~/components/react-portal';

import { Overlay, Spinner } from './styles';

type Props = {
  isLoading?: boolean;
};

export function Loader(props: Props) {
  if (!props.isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={80}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </Spinner>
      </Overlay>
    </ReactPortal>
  );
}
