import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  padding: none;
  border: none;
  background: none;
  transition: 0.4s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: 4px 8px;
  border-radius: 2px;
  outline: none;
  resize: none;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
