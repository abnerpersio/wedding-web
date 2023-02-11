import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  containerId: string;
  children: React.ReactNode;
};

export function ReactPortal({ containerId, children }: Props) {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    let container = document.getElementById(containerId);

    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
    }

    ref.current = container;
  }, [containerId]);

  return ref.current && createPortal(children, ref.current);
}
