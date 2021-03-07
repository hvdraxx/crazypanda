import React from "react";
import { Iconfig, Ielements } from "../../../types";
import { StyledTable, TableHeading } from "./Table.styled";

interface Props {
  elements: Ielements[];
  sortConfig: Iconfig;
  setSortConfig({ key, direction, activeColumn }: Iconfig): void;
}

export const Table = ({ elements, sortConfig, setSortConfig }: Props) => {
  const sortedElements = [...elements];

  sortedElements.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // при клике сортируем столбец по возразтанию или убыванию
  const requestSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction, activeColumn: key });
  };

  return (
    <StyledTable direction={sortConfig.direction}>
      <thead>
        <tr>
          <TableHeading
            onClick={() => requestSort("id")}
            className={sortConfig.activeColumn === "id" ? "active-column" : ""}
          >
            ID
          </TableHeading>

          <TableHeading
            onClick={() => requestSort("name")}
            className={
              sortConfig.activeColumn === "name" ? "active-column" : ""
            }
          >
            Name
          </TableHeading>

          <TableHeading
            onClick={() => requestSort("email")}
            className={
              sortConfig.activeColumn === "email" ? "active-column" : ""
            }
          >
            Email
          </TableHeading>
        </tr>
      </thead>

      <tbody>
        {sortedElements.map((elem: Ielements) => (
          <tr key={elem.id}>
            <td>{elem.id}</td>
            <td>{elem.name}</td>
            <td>{elem.email}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
