import { useRouter } from 'next/router';
import { Container } from '~/styles/list';

export default function List() {
  const { query } = useRouter();
  const { id } = query;

  console.log(id);

  return (
    <Container>
      <div className="background-image">
        <div className="overlay" />

        <div className="content">
          <h1>Lista de convidados</h1>
        </div>
      </div>

      <div>
        <h2>Olá, Abner!</h2>

        <p>Confirme seus convidados por favor</p>

        <input type="text" placeholder="" />
      </div>
    </Container>
  );
}
