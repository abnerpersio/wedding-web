import { InputGroup, StyledInput } from './styles';

type Props = React.InputHTMLAttributes<unknown> & {
  label?: string;
  value?: string | number;
};

export function Input(props: Props) {
  const { label, ...inputProps } = props;

  if (label) {
    return (
      <InputGroup>
        <label>{label}</label>
        <StyledInput {...inputProps} />
      </InputGroup>
    );
  }

  return <StyledInput {...inputProps} />;
}
