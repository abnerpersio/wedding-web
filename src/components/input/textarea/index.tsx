import { InputGroup, StyledTextarea } from './styles';

type Props = React.TextareaHTMLAttributes<unknown> & {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function TextArea(props: Props) {
  const { label, onChange, ...inputProps } = props;

  if (label) {
    return (
      <InputGroup>
        <label>{label}</label>
        <StyledTextarea onChange={(e) => onChange?.(e.target.value)} {...inputProps} />
      </InputGroup>
    );
  }

  return <StyledTextarea {...inputProps} />;
}
