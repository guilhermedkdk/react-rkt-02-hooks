import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors["gray-100"]};
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    padding: 2rem;

    h1 {
      font-size: 1.25rem;
    }
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      text-align: left;
      padding: 1rem;

      background-color: ${(props) => props.theme.colors["gray-600"]};

      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.colors["gray-100"]};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;

      border-top: 4px solid ${(props) => props.theme.colors["gray-800"]};
      background-color: ${(props) => props.theme.colors["gray-700"]};

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    margin-top: 1rem;

    table {
      min-width: 100%;

      th,
      td {
        padding: 0.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    margin-bottom: 2px;

    border-radius: 999px;
    background: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statusColor]]};
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    gap: 0.25rem;

    &::before {
      width: 0.25rem;
      height: 0.25rem;
    }
  }
`;
