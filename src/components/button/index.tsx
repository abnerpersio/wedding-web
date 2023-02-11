import { StyledButton } from './styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

export function Button(props: Props) {
  const { children, onClick, type = 'button', disabled } = props;

  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
