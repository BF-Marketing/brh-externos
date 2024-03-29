import styled from 'styled-components';

export const Container = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      button[about='pdf'] {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: red;
      }

      button[about='csv'] {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: green;
      }
    }
  }
`;
