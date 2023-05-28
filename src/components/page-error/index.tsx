import { ErrorAnimation } from '~/components/animations/error';

import { Container } from './styles';

type Props = {
  message: string;
};

export function PageError(props: Props) {
  return (
    <Container>
      <h3>{props.message}</h3>
      <ErrorAnimation />
    </Container>
  );
}
