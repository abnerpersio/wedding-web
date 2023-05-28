import { StyledButton } from './styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'outlined' | 'contained';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

export function Button(props: Props) {
  const { children, onClick, type = 'button', variant = 'contained', disabled } = props;

  return (
    <StyledButton variant={variant} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
