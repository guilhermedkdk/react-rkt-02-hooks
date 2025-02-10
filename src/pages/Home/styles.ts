import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    form {
      gap: 2rem;
    }
  }
`;

export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  gap: 0.5rem;

  border: 0;
  border-radius: 8px;

  cursor: pointer;
  font-weight: bold;
  color: ${(props) => props.theme.colors["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    padding: 0.75rem;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors["green-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["green-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors["red-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["red-700"]};
  }
`;
