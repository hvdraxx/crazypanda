import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  SwitchesContainer,
  Switcher,
  TextContainer,
} from "./SecondTask.styled";
import { Sliders } from "./Sliders/Sliders";

export const SecondTask = () => {
  const [rangeRed, setRangeRed] = useState(0);
  const [rangeGreen, setRangeGreen] = useState(0);
  const [rangeBlue, setRangeBlue] = useState(0);
  const [lastColors, setLastColors] = useState({
    text: { red: 0, green: 0, blue: 0 },
    bg: { red: 228, green: 228, blue: 228 },
  });
  const [switchValue, setSwitchValue] = useState("text");

  let currentColor = `rgb(${rangeRed}, ${rangeGreen}, ${rangeBlue})`;
  let lastTextColor = `rgb(${lastColors.text.red}, ${lastColors.text.green}, ${lastColors.text.blue})`;
  let lastBgColor = `rgb(${lastColors.bg.red}, ${lastColors.bg.green}, ${lastColors.bg.blue})`;

  let textColor = switchValue === "text" ? currentColor : "";
  let bgColor = switchValue === "background" ? currentColor : "";

  const container = document.getElementById("container");
  const text = document.getElementById("text");

  useEffect(() => {
    // если text и container есть в дом дереве, то меняем цвет текста в зависимости от слайдеров
    // фон контейнера устанавливаем исходя из предыдущего значения
    if (switchValue === "text" && text && container) {
      text!.style.color = textColor;
      container!.style.backgroundColor = lastBgColor;
    }
    // если text и container есть в дом дереве, то меняем фон контейнера в зависимости от слайдеров
    // цвет текста устанавливаем исходя из предыдущего значения
    if (switchValue === "background" && text && container) {
      text!.style.color = lastTextColor;
      container!.style.backgroundColor = bgColor;
    }
  });

  const textButtonHandler = () => {
    if (switchValue !== "text") {
      // возвращаем слайдеры на предыдущее положение цвета текста
      setRangeRed(lastColors.text.red);
      setRangeGreen(lastColors.text.green);
      setRangeBlue(lastColors.text.blue);
      // записываем предыдущее значение для фона контейнера
      setLastColors({
        text: {
          red: lastColors.text.red,
          green: lastColors.text.green,
          blue: lastColors.text.blue,
        },
        bg: {
          red: rangeRed,
          green: rangeGreen,
          blue: rangeBlue,
        },
      });
      setSwitchValue("text");
    }
  };

  const bgButtonHandler = () => {
    if (switchValue !== "background") {
      // возвращаем слайдеры на предыдущее положение фона контейнера
      setRangeRed(lastColors.bg.red);
      setRangeGreen(lastColors.bg.green);
      setRangeBlue(lastColors.bg.blue);
      // записываем предыдущее значение для цвета текста
      setLastColors({
        text: {
          red: rangeRed,
          green: rangeGreen,
          blue: rangeBlue,
        },
        bg: {
          red: lastColors.bg.red,
          green: lastColors.bg.green,
          blue: lastColors.bg.blue,
        },
      });
      setSwitchValue("background");
    }
  };

  return (
    <Container>
      <div>
        <div>
          <SwitchesContainer>
            <Switcher
              onClick={textButtonHandler}
              className={switchValue === "text" ? "active" : ""}
            >
              Text Color
            </Switcher>
            <Switcher
              onClick={bgButtonHandler}
              className={switchValue === "background" ? "active" : ""}
            >
              Background Color
            </Switcher>
          </SwitchesContainer>
        </div>
        <Wrapper>
          <Sliders
            red={rangeRed}
            green={rangeGreen}
            blue={rangeBlue}
            setRed={setRangeRed}
            setGreen={setRangeGreen}
            setBlue={setRangeBlue}
          />
          <TextContainer id="container">
            <p id="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium non ratione cupiditate ipsum amet impedit, ea hic! Unde
              amet ut ea corporis quos dolor possimus laudantium vel. Nemo, nisi
              debitis. Ab nostrum doloremque, fuga beatae error harum quae
              deserunt iure a, corporis aut, porro voluptas. Atque, voluptatem
              qui unde aspernatur, quisquam cum fugit fuga, ea aliquid amet
              deleniti nostrum facere?
            </p>
          </TextContainer>
        </Wrapper>
      </div>
    </Container>
  );
};
