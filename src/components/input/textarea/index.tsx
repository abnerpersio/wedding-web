import { InputGroup, StyledTextarea } from './styles';

type Props = React.TextareaHTMLAttributes<unknown> & {
  label?: string;
  value?: string;
};

export function TextArea(props: Props) {
  const { label, ...inputProps } = props;

  if (label) {
    return (
      <InputGroup>
        <label>{label}</label>
        <StyledTextarea {...inputProps} />
      </InputGroup>
    );
  }

  return <StyledTextarea {...inputProps} />;
}
