import React, { useState, useEffect } from "react";
import { Container, Section } from "./FirstTask.styled";
import { Filtration } from "./Filtration/Filtration";
import { Pagination } from "./Pagination/Pagination";
import { Table } from "./Table/Table";
import { Ielements } from "../../types";

function FirstTask() {
  const [data, setData] = useState<Ielements[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [elementsPerPage] = useState<number>(50);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredElements, setFilteredElements] = useState<Ielements[]>([]);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
    activeColumn: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  // получаем массив данных относительно максимального количества элементов на странице
  const currentElements = data.slice(indexOfFirstElement, indexOfLastElement);
  // получаем массив ОТФИЛЬТРОВАННЫХ данных относительно максимального количества элементов на странице
  const currentElementsFiltered = filteredElements.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  return (
    <Container>
      <Table
        // если поле инпута пустое, то передаем весь массив данных
        // иначе передаем отфильтрованный массив
        elements={
          filteredElements.length === 0
            ? currentElements
            : currentElementsFiltered
        }
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
      />
      <Section>
        <Filtration
          setFilterValue={setFilterValue}
          filterValue={filterValue}
          setFilteredElements={setFilteredElements}
          elements={data}
          setSortConfig={setSortConfig}
          setCurrentPage={setCurrentPage}
        />
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={data.length}
          totalFilteredElements={filteredElements.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Section>
    </Container>
  );
}

export default FirstTask;
