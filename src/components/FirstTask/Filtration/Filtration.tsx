import React, { useEffect, useState } from "react";
import { Iconfig, Ielements } from "../../../types";
import { Container, Heading, Input, Nothing } from "./Filtration.styled";

interface Props {
  filterValue: string;
  setFilterValue(val: string): void;
  elements: Ielements[];
  setFilteredElements(arr: Ielements[]): void;
  setSortConfig({ key, direction, activeColumn }: Iconfig): void;
  setCurrentPage(number: number): void;
}

export const Filtration = ({
  filterValue,
  setFilterValue,
  elements,
  setFilteredElements,
  setSortConfig,
  setCurrentPage,
}: Props) => {
  const [isErrorInput, setErrorInput] = useState(false);

  useEffect(() => {
    if (filterValue.trim() !== "") {
      // создаем новый массив и вызываем метод filter() на массиве всех данных
      const filteredElements = elements.filter((element: any) => {
        // если значение инпута это число, то сравниваем поле id с инппутом
        if (parseInt(filterValue)) {
          return element.id === +filterValue;
        } else {
          // если значение инпута строка, то сравниваем наличие подстроки из инпута с полями name и email
          // значение инпута и полей name / email приводим к нижнему регистру
          return (
            element.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            element.email.toLowerCase().includes(filterValue.toLowerCase())
          );
        }
      });

      // если инпут не пустой И количество найденых элементов равно 0, то показываем ошибку
      if (filterValue !== "" && filteredElements.length === 0) {
        setErrorInput(true);
      } else setErrorInput(false);

      setFilteredElements(filteredElements);
    }
  }, [filterValue, elements, setFilteredElements]);

  const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    // сбрасываем сортировку столбцов при изменении значения инпута
    setSortConfig({ key: "", direction: "", activeColumn: "" });

    setCurrentPage(1);

    // если значение инпута пустое, то сбрасываем массив отфильтр. элементов
    // что приводит к отображению массива всех данных
    if (event.currentTarget.value.trim() === "") {
      setFilteredElements([]);
      setFilterValue("");

      // иначе записываем значение инпута
    } else setFilterValue(event.currentTarget.value.trim());
  };

  return (
    <Container>
      <Heading>What would you like to find? 🕵️‍♂️</Heading>
      <Input value={filterValue} onChange={onChangeHanlder} />
      {/* если нет совпадений, то оповещаем об этом */}
      {isErrorInput && <Nothing>Nothing found 🤷🏼‍♂️</Nothing>}
    </Container>
  );
};
