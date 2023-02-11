import { ReactPortal } from '~/components/ReactPortal';

import { Overlay, Spinner } from './styles';

type Props = {
  isLoading?: boolean;
};

export function Loader(props: Props) {
  if (!props.isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={100}>
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
