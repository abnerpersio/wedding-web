import { Wrapper } from './styles';

type Props = {
  title?: string;
};

export function Banner(props: Props) {
  return (
    <Wrapper>
      <div className="overlay" />

      <div className="title">
        <h1>Abner & Mayara</h1>
        {props.title && <h4>{props.title}</h4>}
      </div>
    </Wrapper>
  );
}
