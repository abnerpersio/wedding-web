import { InputGroup, StyledInput } from './styles';

type Props = {
  label?: string;
  value?: string | number;
} & React.InputHTMLAttributes<unknown>;

export function Input(props: Props) {
  const { type, onChange, value, label } = props;

  const inputProps = { onChange, value, type };

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
