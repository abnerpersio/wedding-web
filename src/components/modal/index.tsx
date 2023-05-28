import { CloseIcon } from '~/components/icons/close';
import { ReactPortal } from '~/components/react-portal';

import { Content, Overlay } from './styles';

type Props = {
  modalId: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export function Modal(props: Props) {
  const { modalId, isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <ReactPortal containerId={modalId}>
      <Overlay>
        <Content>
          <div className="header">
            <button type="button" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>

          <div className="body">{children}</div>
        </Content>
      </Overlay>
    </ReactPortal>
  );
}
