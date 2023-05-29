import backgroundBlur from '~/assets/background-blur.png';
import backgroundPhoto from '~/assets/background-photo.jpg';
import { Loader } from '~/components/loader';

import { Wrapper } from './styles';

type Props = {
  backgroundVariant?: 'blur' | 'photo';
  isLoading?: boolean;
  children: React.ReactNode;
};

export function Page({ children, isLoading, backgroundVariant = 'blur' }: Props) {
  return (
    <Wrapper>
      <Loader isLoading={isLoading} />
      {backgroundVariant === 'blur' && (
        <img src={backgroundBlur} className="background-decoration" />
      )}
      {backgroundVariant === 'photo' && <img src={backgroundPhoto} className="background-photo" />}

      {children}
    </Wrapper>
  );
}
