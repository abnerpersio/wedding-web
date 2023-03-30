import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background: none;
  background-color: ${({ theme }) => theme.colors.main[500]};
  border: 1px solid ${({ theme }) => theme.colors.main[400]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border-radius: 4px;
  padding: 8px 16px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.disabled} !important;
    border-color: ${({ theme }) => theme.colors.disabled} !important;
    color: ${({ theme }) => theme.colors.black} !important;
    opacity: 0.5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.main[400]};
    border-color: ${({ theme }) => theme.colors.main[300]};
  }
`;
