import backgroundBlur from '~/assets/background-blur.png';
import { Loader } from '~/components/loader';

import { Wrapper } from './styles';

type Props = {
  isLoading?: boolean;
  children: React.ReactNode;
};

export function Page(props: Props) {
  return (
    <Wrapper>
      <Loader isLoading={props.isLoading} />
      <img src={backgroundBlur} className="background-decoration" />

      {props.children}
    </Wrapper>
  );
}
