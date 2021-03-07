/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { List, Button } from "./Pagination.styled";

interface Props {
  elementsPerPage: number;
  totalElements: number;
  totalFilteredElements: number;
  currentPage: number;
  setCurrentPage(number: number): void;
}

export const Pagination = ({
  elementsPerPage,
  totalElements,
  totalFilteredElements,
  currentPage,
  setCurrentPage,
}: Props) => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers: number[] = [];
  let totalPages = 1;

  useEffect(() => {
    if (pageNumbers.length === 1) {
      setCurrentPage(1);
      setActivePage(1);
    }
    setActivePage(currentPage);
  }, [pageNumbers, setCurrentPage]);

  // если поле инпута пустое, то количество страниц устанавливается относительно всех данных
  // иначе количество страниц устанавливается относительно отфильтрованных данных
  if (totalFilteredElements === 0)
    totalPages = Math.ceil(totalElements / elementsPerPage);
  else totalPages = Math.ceil(totalFilteredElements / elementsPerPage);

  // записываем номера страниц в массив
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // при клике устанавливаем текущую страницу
  const clickHandler = (number: number) => {
    setCurrentPage(number);
    setActivePage(number);
  };

  // при клике на левую стрелку уменьшаем номер текущей страницы на 1
  // если меньше 1, то переходим на последнюю страницу
  const clickBackHandler = () => {
    if (activePage === 1) {
      setActivePage(totalPages);
      setCurrentPage(totalPages);
    } else {
      setActivePage(activePage - 1);
      setCurrentPage(activePage - 1);
    }
  };

  // при клике на правую стрелку увеличиваем номер текущей страницы на 1
  // если больше максимального количества страниц, то переходим на первую страницу
  const clickForwardHandler = () => {
    if (activePage === totalPages) {
      setActivePage(1);
      setCurrentPage(1);
    } else {
      setActivePage(activePage + 1);
      setCurrentPage(activePage + 1);
    }
  };

  return (
    <List>
      <li>
        <Button onClick={clickBackHandler}>←</Button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <Button
            onClick={() => clickHandler(number)}
            className={number === activePage ? "active" : ""}
          >
            {number}
          </Button>
        </li>
      ))}
      <li>
        <Button onClick={clickForwardHandler}>→</Button>
      </li>
    </List>
  );
};
