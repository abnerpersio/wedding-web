import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: React.ReactNode;
};

export function ToastProvider(props: Props) {
  return (
    <>
      {props.children}
      <ToastContainer position="top-right" />
    </>
  );
}
