import { StyleProps, StyledTitle } from './styles';

type Props = StyleProps & {
  text: string;
};

export function Title(props: Props) {
  return <StyledTitle {...props}>{props.text}</StyledTitle>;
}
