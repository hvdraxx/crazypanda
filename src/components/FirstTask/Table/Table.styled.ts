import styled from "styled-components";

interface dirProp {
  direction: string;
}

export const TableHeading = styled.th``;

export const StyledTable = styled.table<dirProp>`
  table-layout: fixed;
  width: 60%;
  border-right: 2px solid #d5d5d5;
  border-bottom: 2px solid #d5d5d5;
  border-collapse: collapse;

  & thead tr {
    font-size: 1.2rem;
    font-weight: bold;
    user-select: none;
  }

  & thead ${TableHeading} {
    position: relative;
    background-color: #bebebe;
    transition: 0.2s;
    cursor: pointer;

    &::after {
      content: "↓";
      position: absolute;
      top: ${(props) => (props.direction === "ascending" ? "20%" : "25%")};
      right: 8px;
      font-size: 1.2rem;
      font-weight: normal;
      color: transparent;
      transition: 0.2s;
      transform: ${(props) =>
        props.direction === "ascending" ? "rotate(0deg)" : "rotate(180deg)"};
    }

    &.active-column {
      background-color: #a3a3a3;

      &::after {
        color: #353535;
      }
    }
  }
  & thead tr ${TableHeading}:first-child {
    width: 70px;
    padding: 10px 25px;
  }
  & thead tr ${TableHeading}:last-child {
    width: 310px;
  }
  & thead tr ${TableHeading}:not(:first-child) {
    padding: 5px;
  }

  & thead ${TableHeading}:hover {
    background-color: #a3a3a3;

    &::after {
      color: #353535;
    }
  }

  & tbody tr:nth-child(even) {
    background-color: #e4e4e4;
  }
  & tbody tr:nth-child(odd) {
    background-color: #d5d5d5;
  }

  & tbody tr:hover {
    background-color: #bebebe;
  }

  & tbody td {
    position: relative;
    padding: 10px 0;
    transition: 0.1s;
  }

  & tbody tr td:not(:first-child) {
    padding: 5px;
  }

  & tbody td:first-child {
    text-align: center;
  }

  @media all and (max-width: 1360px) {
    & tbody tr td {
      font-size: 0.85rem;
    }
    & thead tr ${TableHeading}:first-child {
      width: 50px;
      padding: 10px 10px;
    }
    & thead tr ${TableHeading}:last-child {
      width: 240px;
    }

    & thead ${TableHeading} {
      &::after {
        right: 3px;
      }
    }
  }

  @media all and (max-width: 1000px) {
    width: 100%;
  }

  @media all and (max-width: 500px) {
    & thead tr ${TableHeading}:last-child {
      width: 213px;
    }
  }
`;
