import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  span {
    background: ${(props) => props.theme.colors["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    font-size: 5rem;
    line-height: 4rem;

    span {
      padding: 1rem 0.5rem;
    }
  }
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  width: 4rem;
  padding: 2rem 0;

  color: ${(props) => props.theme.colors["green-500"]};

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    width: 2rem;
    padding: 1rem 0;
  }
`;
