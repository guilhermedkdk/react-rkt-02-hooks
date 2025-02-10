import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 3rem;
      height: 3rem;

      color: ${(props) => props.theme.colors["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.colors["green-500"]};
      }

      &.active {
        color: ${(props) => props.theme.colors["green-500"]};
      }
    }
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    nav {
      gap: 0.25rem;

      a {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
