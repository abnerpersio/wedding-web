import { createPortal } from 'react-dom';

type Props = {
  containerId: string;
  children: React.ReactNode;
};

export function ReactPortal({ containerId, children }: Props) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}
