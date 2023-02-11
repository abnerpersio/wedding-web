import { useParams } from 'react-router-dom';
import { Banner } from '~/components/banner';
import { Loader } from '~/components/loader';

import { Content, Wrapper } from './styles';

export function Invite() {
  const { id } = useParams();

  console.log(id);

  return (
    <Wrapper>
      <Loader isLoading={false} />

      <Banner />

      <Content>
        <h2>Abner e família</h2>
      </Content>
    </Wrapper>
  );
}
